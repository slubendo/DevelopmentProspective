import { db } from '@/db'
import { scholarships } from '@/db/schema/scholarships'
import { eq } from 'drizzle-orm/mysql-core/expressions'

async function getScholarshipById(id: number) {
    const response = await db.select().from(scholarships).where(eq(scholarships.id, id))

    return response
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
    const scholarship = await getScholarshipById(id);

    if(scholarship) {
        console.log(scholarship[0].isApplied);
    }
    
}

export async function deleteScholarshipFromProfile(id: number) {
    const scholarship = await getScholarshipById(id);

    if(scholarship) {
        console.log(scholarship[0].userId)
    }
}