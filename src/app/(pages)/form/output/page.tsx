import { ai } from "@/app/aiFunction"
import { redirect } from "next/navigation"

export default async function Home ({
    params,
    searchParams,
  }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {

    if(searchParams) {
        const scholarshipArray = await ai(JSON.stringify(searchParams))
    }

    redirect("/scholarship")

}