import SubmitForm from "./form"

import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Page () {

    const session = await auth()

    if (!session?.user) {
      redirect("/api/auth/signin?callbackUrl=/form")
    }

    return (
        <div>
            <SubmitForm />
        </div>
    )
}