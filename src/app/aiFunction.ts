import 'react-toastify/dist/ReactToastify.css';
import type { AgentStep } from "langchain/schema";


export async function aiFunction(endpoint: string, showIntermediateStepsToggle: boolean, formData: string) {
  console.log("Ai Function Trigger")
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      messages: { id: "", content: formData ?? "", role: "user" },
      show_intermediate_steps: true
    })
  });
  console.log("Ai Function Here")

  const json = await response.json();
  if (response.status === 200) {
    // Represent intermediate steps as system messages for display purposes
    const intermediateStepMessages = (json.intermediate_steps ?? []).map((intermediateStep: AgentStep, i: number) => {
      return { id: "", content: JSON.stringify(intermediateStep), role: "system" };
    });
    

    console.log(`Output ${json.output}`)
    return (
      json.output
    )
  } else if (response.status === 500) {
    console.log(`Error ${json.error}`)
    return `Error ${json.error}`
  }
} 
  


