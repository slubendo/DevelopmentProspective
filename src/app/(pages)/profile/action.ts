"use server"

import { db } from '@/db'
import { scholarships } from '@/db/schema/scholarships'
import { eq, ne } from 'drizzle-orm/mysql-core/expressions'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { auth } from '@/auth'

import { Scholarship } from '@/app/components/organisms/scrollscholarshipcardsimple';

async function getScholarshipById(id: number) {
    const response = await db.select().from(scholarships).where(eq(scholarships.id, id))

    return response
}

export async function getNonProfileScholarships():Promise<Scholarship[]> {
    const session = await auth();

    const emptyArray:Scholarship[] = []

    if(session) {

        const userScholarships = await db.selectDistinct({jsonData: scholarships.jsonData}).from(scholarships).where(eq(scholarships.userId, session.user.id))

        let userScholarshipsJSONArray:any[] = [];

        if(userScholarships.length > 0) {
            userScholarshipsJSONArray = userScholarships.map((data) => {
                return data.jsonData
            })
        }

        const response = await db.selectDistinct({jsonData: scholarships.jsonData}).from(scholarships).where(ne(scholarships.userId, session.user.id))
        //need to set up a way to filter out hijinks. Ok, that's probably not too hard.

        if(response.length > 0) {

            const dataFilteredArray = response.filter((data) => !userScholarshipsJSONArray.includes(data.jsonData))

            const dataArray = dataFilteredArray.map((data) => {

                return JSON.parse(data.jsonData);

            })
    
            return dataArray
        }

        return emptyArray;

    }

    const response = await db.selectDistinct({jsonData: scholarships.jsonData}).from(scholarships)

    if(response.length > 0) {
        const dataArray = response.map((data) => {
            return JSON.parse(data.jsonData);
        })

        return dataArray
    }

    return emptyArray;
}

async function getAllScholarships(userId: string) {
    const response = await db.select().from(scholarships).where(eq(scholarships.userId, userId))

    const list = response.map(item => {
        return {
            id: item.id,
            jsonData: item.jsonData,
            isApplied: item.isApplied
        };
    })

    return list;
}

export async function getAppliedScholarships(userId: string) {
    const list = await getAllScholarships(userId);

    let appliedList = list.map(item => {
        if(item.isApplied) {

            const data = JSON.parse(item.jsonData);

            const scholarship = {
                id: item.id,
                ...data,
            }

            return scholarship;
        }
    })

    appliedList = appliedList.filter((item) => {
        return item !== undefined;
    })

    return appliedList;
}

export async function getSavedScholarships(userId: string) {
    const list = await getAllScholarships(userId);

    let savedList = list.map(item => {
        if(!item.isApplied) {
            const data = JSON.parse(item.jsonData);

            const scholarship = {
                id: item.id,
                ...data,
            }

            return scholarship;
        }
    })

    savedList = savedList.filter((item) => {
        return item !== undefined;
    })

    return savedList;
}

export async function toggleScholarshipApplicationStatus(id: number) {

    const session = await auth();

    if(session) {
        const scholarship = await getScholarshipById(id);
        const userId = session.user.id;

        if(scholarship && scholarship[0].userId == userId) {
            await db.update(scholarships)
                .set({isApplied: !scholarship[0].isApplied})
                .where(eq(scholarships.id, scholarship[0].id))
    
            revalidatePath("/profile")
            redirect("/profile")
        }
    } else {
        redirect("/api/auth/signin?callbackUrl=/profile")
    }
    
}

export async function deleteScholarshipFromProfile(id: number) {

    const session = await auth();

    if(session) {
        const scholarship = await getScholarshipById(id);
        const userId = session.user.id;

        if(scholarship && scholarship[0].userId == userId) {
            await db.delete(scholarships)
               .where(eq(scholarships.id, scholarship[0].id))
            
            revalidatePath("/profile")
            redirect("/profile")
        }
    } else {
        redirect("/api/auth/signin?callbackUrl=/profile")
    }
    
}