"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import { UserForm } from "./form"

export async function sendJSON(content:UserForm) {

  const request = content;
  const requestJSON = JSON.stringify(request)
  console.log(requestJSON)
  
  revalidatePath("/form")
  redirect(`/form`)
}
