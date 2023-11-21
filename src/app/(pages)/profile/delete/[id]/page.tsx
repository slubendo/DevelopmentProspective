import { auth } from '@/auth'
import { deleteScholarshipFromProfile } from '../../action';
import { redirect } from 'next/navigation';

export default async function Delete({params}: {params: {id: string }}) {
    const scholarshipId = parseInt(params.id);

    const session = await auth();
    
    let userId;

    if(session) {
        userId = session.user.id;
        await deleteScholarshipFromProfile(scholarshipId, userId)
        redirect("/profile")
    } else {
        redirect("/")
    }

}