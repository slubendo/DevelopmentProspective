import { db } from '@/db'
import { scholarships } from '@/db/schema/scholarships'
import { eq } from 'drizzle-orm/mysql-core/expressions'

async function getAllScholarships(userId: string) {
    const response = await db.select().from(scholarships).where(eq(scholarships.userId, userId))

    const list = response.map(item => {
        return {
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
            return JSON.parse(item.jsonData);
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
            return JSON.parse(item.jsonData);
        }
    })

    savedList = savedList.filter((item) => {
        return item !== undefined;
    })

    return savedList;
}