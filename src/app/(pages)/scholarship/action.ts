import { db } from '@/db'
import { eq } from 'drizzle-orm/mysql-core/expressions'

import { auth } from '@/auth'

import { formResults, formResults as resultsTable } from '@/db/schema/formResults'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function getFormResultsAndConvertToScholarshipArray() {

    const session = await auth();

    if(session) {
        const userId = session.user.id;
        const response = await db.select().from(formResults).where(eq(formResults.userId, userId))
        //if there is no previous formresult, need to deal with this being undefined
        const jsonList = response[0].scholarshipArray;

        const list = JSON.parse(jsonList)

        return list;
    }
    
}

export async function saveScholarshipToUser() {
    const session = await auth();
    if(session) {
        console.log("Server Triggered")
    }
}