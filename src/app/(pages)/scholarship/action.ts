"use server"

import { db } from '@/db'
import { eq } from 'drizzle-orm/mysql-core/expressions'

import { auth } from '@/auth'

import { formResults } from '@/db/schema/formResults'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { scholarships } from '@/db/schema/scholarships'

export async function getFormResultsAndConvertToScholarshipArray() {

    const session = await auth();

    if(session) {
        const userId = session.user.id;
        const response = await db.select().from(formResults).where(eq(formResults.userId, userId))
        //if there is no previous formresult, need to deal with this being undefined
        if (response.length > 0) {
            const jsonList = response[0].scholarshipArray;
            console.log(response)
            console.log(jsonList)
        const list = JSON.parse(jsonList)

        return list;
        }
            const emptyArray: any[] = [];

            return emptyArray;
        

    }
    
}

export async function saveScholarshipToUser(jsonData: string) {
    const session = await auth();
    if(session) {
        console.log("Server Triggered")

        const userId = session.user.id;

        //retrieve the user's current form results.
        const list = await getFormResultsAndConvertToScholarshipArray();

        const savedScholarship = JSON.parse(jsonData);

        //remove savedScholarship from list, utilizing the filter function and the description.

        const updatedArray = list.filter((scholarship:any) => scholarship.description != savedScholarship.content);

        const updatedJSONArray = JSON.stringify(updatedArray);

        //update the form results table so that users results have the saved scholarship removed from them.
        const update = await db.update(formResults).set({scholarshipArray: updatedJSONArray}).where(eq(formResults.userId, userId));

        await db.insert(scholarships).values({
            userId: userId,
            jsonData: jsonData,
            isApplied: false,
        })
        console.log("Insert completed.")

        revalidatePath("/scholarship")
        redirect("/scholarship")

    }
}