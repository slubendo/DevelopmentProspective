import React, { use, useState } from "react"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
//import FeedScholarship from "../molecules/feed-scholarship"



async function searchScholarship(data: FormData) {
    "use server"

    console.log(data.get("search-input"))
    // const result = await db.select().from(scholarship).orderBy(scholarship.award, desc(scholarship.amount)); NEED TO DO LAMDA INDEXING FUNCTION

    revalidatePath("/")
    // redirect("/anotherPage")

    // return ( <FeedScholarship scholarshipArr={result}></FeedScholarship>)

}


export default function ScholarshipSearchBar() {

    return (
        <div>
            <form action={searchScholarship}>
                <input name="search-input" />
                <button type="submit">
                    {/* <SearchIcon></SearchIcon> */}
                </button>
            </form>

        </div>
    )
}
