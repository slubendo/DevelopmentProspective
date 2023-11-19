import { MouseEventHandler } from "react"
import ButtonActionIconBlue from "../atoms/button/button-action-icon-blue"
import DeleteIcon from "../atoms/icon-components/delete-icon"

export default function IconButtonDelete(props: {id: number, onClick: MouseEventHandler}) {

    return (
        <ButtonActionIconBlue id={props.id} onClick={props.onClick}>
            <DeleteIcon />
        </ButtonActionIconBlue>
    )
    
}