import ButtonActionIconBlue from "../atoms/button/button-action-icon-blue"
import DeleteIcon from "../atoms/icon-components/delete-icon"

import Link from "next/link"

export default function IconButtonDelete(props: {id: number}) {

    //alright, so the scheme now is to just turn that shit into links
    //we'll create pages that can use server and all in order to get actions to do stuff
    //maybe in the api folder??

    const url = "/profile/delete/" + String(props.id);

    return (
        <Link href={url}>
            <ButtonActionIconBlue id={props.id}>
                <DeleteIcon />
            </ButtonActionIconBlue>
        </Link>
    )
    
}