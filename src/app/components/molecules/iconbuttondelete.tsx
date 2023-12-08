import DeleteIcon from "../atoms/icon-components/delete-icon"

import { deleteScholarshipFromProfile } from "@/app/(pages)/profile/action"

export default function IconButtonDelete(props: {id: number}) {

    //alright, so the scheme now is to just turn that shit into links
    //we'll create pages that can use server and all in order to get actions to do stuff
    //maybe in the api folder??

    const handleClick = async () => {
        await deleteScholarshipFromProfile(props.id);
    }

    return (
            <button className="" onClick={handleClick}>
                <DeleteIcon />
            </button>
    )
    
}