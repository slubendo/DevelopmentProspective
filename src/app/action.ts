"use server"

import { db } from '@/db'
import { eq } from 'drizzle-orm/mysql-core/expressions'
import { auth } from '@/auth'
import scholarshipData from '@/db/fake-schol.json';
import { formResults as resultsTable } from '@/db/schema/formResults'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createOrUpdateFormResultForUser(jsonArray: string) {

    const session = await auth();

    if(session) {
        console.log("Triggered create or update");
        const userId = session.user.id;
        const result = await db.select().from(resultsTable).where(eq(resultsTable.userId, userId));

        if(result[0]) {
            const update = await db.update(resultsTable).set({scholarshipArray: jsonArray}).where(eq(resultsTable.userId, userId));
        } else {
            const insert = await db.insert(resultsTable).values({ userId: userId, scholarshipArray: jsonArray });
        }

        revalidatePath("/scholarship")
        redirect("/scholarship")

    } else {
        return
    }

    
}

export async function sessionUser() {
    const session = await auth();
    return session

}

export type SessionUserType = typeof sessionUser;
