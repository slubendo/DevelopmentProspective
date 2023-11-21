import { auth } from '@/auth'
import { toggleScholarshipApplicationStatus } from '../../action';

import { redirect } from 'next/navigation';

export default async function ToggleApply({params}: {params: {id: string }}) {
    const scholarshipId = parseInt(params.id);
    
    const session = await auth();

    let userId;

    if(session) {
        userId = session.user.id;
        await toggleScholarshipApplicationStatus(scholarshipId, userId)
        redirect("/profile")
    } else {
        redirect("/")
    }
}