import "react-toastify/dist/ReactToastify.css";
import type { AgentStep } from "langchain/schema";
import { NextRequest, NextResponse } from "next/server";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { AIMessage, ChatMessage, HumanMessage } from "langchain/schema";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { createOrUpdateFormResultForUser } from "../../action";

export const runtime = "edge";
// export const maxDuration = 60; // This function can run for a maximum of 60 seconds

// export async function aiFunction(endpoint: string, showIntermediateStepsToggle: boolean, formData: string) {
//   console.log("Ai Function Trigger")
//   const response = await fetch(endpoint, {
//     method: "POST",
//     body: JSON.stringify({
//       messages: { id: "", content: formData ?? "", role: "user" },
//       show_intermediate_steps: true
//     })
//   });
//   console.log("Ai Function Here")

//   const json = await response.json();
//   if (response.status === 200) {
//     // Represent intermediate steps as system messages for display purposes
//     const intermediateStepMessages = (json.intermediate_steps ?? []).map((intermediateStep: AgentStep, i: number) => {
//       return { id: "", content: JSON.stringify(intermediateStep), role: "system" };
//     });

//     console.log(`Output ${json.output}`)
//     return (
//       json.output
//     )
//   } else if (response.status === 500) {
//     console.log(`Error ${json.error}`)
//     return `Error ${json.error}`
//   }
// }

export async function POST(req: NextRequest) {
  const TEMPLATE =
    'You are an expert at finding URLs of scholarships that meet a user\'s eligibility. You will receive the users scholarship eligibility as a JSON object then you will return an array of JSON objects of scholarship specifications from the scholarship website URLs that meet this criteria. Include the exact URL you visited for each scholarship in the "siteURL". Format it perfectly into JSON with the following format [{"title" : string, "description" : string, "shortDescription": string, "provider": string, "amount" : number, "siteURL" : string, "deadline", isodatestring}]. You only respond with an array of the JSON objects, never explain what you\'re doing or respond with any other text. \n\nUser eligibility JSON:\n{chat_history}\\nAI:';
  try {
    // const body = await req.json();
    const returnIntermediateSteps = false;
    const tools = [new Calculator(), new SerpAPI()];
    const chat = new ChatOpenAI({
      modelName: "gpt-4-1106-preview",
      temperature: 0,
    });

    const chatHistory = await req.json();
    console.log(`Checking ${JSON.stringify(chatHistory)}`);

    const formattedTemplate = TEMPLATE.replace(
      "{chat_history}",
      JSON.stringify(chatHistory)
    );

    const asyncRes = (async () => {
      const executor = await initializeAgentExecutorWithOptions(tools, chat, {
        agentType: "openai-functions",
        verbose: true,
        returnIntermediateSteps,
        memory: new BufferMemory({
          memoryKey: "chat_history",
          chatHistory: new ChatMessageHistory([]),
          returnMessages: true,
          outputKey: "output",
        }),
      });

      const result = await executor.call({
        input: formattedTemplate, // Use the formatted TEMPLATE
      });

      const ScholarshipArray = result.output;
      console.log(`output ${ScholarshipArray}`);
      await createOrUpdateFormResultForUser(ScholarshipArray);
      return ScholarshipArray;
    })();

    const stream = new ReadableStream({
      async pull(controller) {
        controller.enqueue("start");
        try {
          const ScholarshipArray = await asyncRes;
          console.log("\n\n\n\n\n\n\n\n\n\n done");
          console.log(ScholarshipArray);
        } catch (e) {
          console.error("error in stream", e);

        } finally {
          controller.enqueue("done"); 
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "content-type": "text/plain",
      },
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.error();
  }
}
