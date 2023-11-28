"use server";
import { NextRequest, NextResponse } from "next/server";

const { writeFile } = require("fs").promises;

import { Message as VercelChatMessage, StreamingTextResponse } from "ai";

import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

import { PromptTemplate } from "langchain/prompts";

import { AIMessage, ChatMessage, HumanMessage } from "langchain/schema";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { createOrUpdateFormResultForUser } from "../action";
import { scheduler } from "timers/promises";
import { redirect } from "next/navigation";

// export const runtime = "edge";

const convertVercelMessageToLangChainMessage = (message: VercelChatMessage) => {
  if (message.role === "user") {
    return new HumanMessage(message.content);
  } else if (message.role === "assistant") {
    return new AIMessage(message.content);
  } else {
    return new ChatMessage(message.content, message.role);
  }
};

// title: item.title,
// content: item.content,
// award: item.award,
// deadline: item.deadline,
// href: item.href,
// src: item.src,
// alt: item.alt

const TEMPLATE =
  'You are an expert at finding URLs of scholarships that meet a user\'s eligibility. You will receive the users scholarship eligibility as a JSON object then you will return an array of JSON objects of scholarship specifications from the scholarship website URLs that meet this criteria. Include the exact URL you visited for each scholarship in the "siteURL". Format it perfectly into JSON with the following format [{"title" : string, "description" : string, "shortDescription": string, "provider": string, "amount" : number, "siteURL" : string, "deadline", isodatestring}]. You only respond with an array of the JSON objects, never explain what you\'re doing or respond with any other text. \n\nUser eligibility JSON:\n{chat_history}\\nAI:';

/**
 * This handler initializes and calls an OpenAI Functions agent.
 * See the docs for more information:
 *
 * https://js.langchain.com/docs/modules/agents/agent_types/openai_functions_agent
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    /**
     * We represent intermediate steps as system messages for display purposes,
     * but don't want them in the chat history.
     */
    const messages = (body.messages ?? []).filter(
      (message: VercelChatMessage) =>
        message.role === "user" || message.role === "assistant"
    );
    const returnIntermediateSteps = body.show_intermediate_steps;
    const previousMessages = messages
      .slice(0, -1)
      .map(convertVercelMessageToLangChainMessage);
    const currentMessageContent = messages[messages.length - 1].content;

    // Requires process.env.SERPAPI_API_KEY to be set: https://serpapi.com/
    const tools = [new Calculator(), new SerpAPI()];
    const chat = new ChatOpenAI({ modelName: "gpt-4", temperature: 0 });

    // Hard coded userEligibility for testing
    const userEligibility = {
      gender: "male",
      ethnicity: "white",
      indigenous: false,
      disability: false,
      "level of education": "Highschool",
      "income level": "medium",
      sports: "none",
      "field of study": "computer science",
      religion: "none",
    };

    // Replace the hard-coded prompt with the TEMPLATE
    const formattedTemplate = TEMPLATE.replace(
      "{chat_history}",
      JSON.stringify(userEligibility)
    ).replace("{input}", currentMessageContent);

    /**
     * The default prompt for the OpenAI functions agent has a placeholder
     * where chat messages get injected - that's why we set "memoryKey" to
     * "chat_history". This will be made clearer and more customizable in the future.
     */

    // AI response generator comment out to test without using AI
    const executor = await initializeAgentExecutorWithOptions(tools, chat, {
      agentType: "openai-functions",
      verbose: true,
      returnIntermediateSteps,
      memory: new BufferMemory({
        memoryKey: "chat_history",
        chatHistory: new ChatMessageHistory(previousMessages),
        returnMessages: true,
        outputKey: "output",
      }),
    });

    const result = await executor.call({
      input: formattedTemplate, // Use the formatted TEMPLATE
    });

    const ScholarshipArray = result.output;

    await createOrUpdateFormResultForUser(ScholarshipArray)

    // if (typeof window !== "undefined") {
    //   console.log("client side");
    // } else {
    //   console.log("server side");
    //   const filePath = "./fake-schol.json";
    //   await writeFile(filePath, ScholarshipArray, "utf8");
    //   console.log("File written to", filePath);
    // }

    // if (typeof window === 'undefined') {
    //   // Running on the server
    //   const { writeFileSync } = require('fs');
    //   // Running on the Client
    // }

    // // send ScholarshipArray to the backend
    // //relative file path 'pai/src/app/(pages)/chat-agents/route.ts'
    // fetch("/api/write-file/route", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(ScholarshipArray),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    // // Chatbot response
    // // Intermediate steps are too complex to stream
    // if (returnIntermediateSteps) {
    //   return NextResponse.json(
    //     { output: result.output, intermediate_steps: result.intermediateSteps },
    //     { status: 200 },
    //   );
    // } else {
    //   /**
    //    * Agent executors don't support streaming responses (yet!), so stream back the
    //    * complete response one character at a time with a delay to simulate it.
    //    */
    //   const textEncoder = new TextEncoder();
    //   const fakeStream = new ReadableStream({
    //     async start(controller) {
    //       new StreamingTextResponse(fakeStream)

    //       for (const character of result.output) {
    //         controller.enqueue(textEncoder.encode(character));
    //         await new Promise((resolve) => setTimeout(resolve, 20));
    //       }
    //       controller.close();
    //     },
    //   });

    //   // return new StreamingTextResponse(fakeStream);
    // }
    return NextResponse.json({ output: ScholarshipArray }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
