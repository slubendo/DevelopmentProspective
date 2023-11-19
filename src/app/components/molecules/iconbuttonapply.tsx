import { MouseEventHandler } from "react"
import ButtonActionIconBlue from "../atoms/button/button-action-icon-blue"
import ButtonActionIconWhite from "../atoms/button/button-action-icon-white"
import StarEmptyIcon from "../atoms/icon-components/star-empty-icon"
import StarFilledIcon from "../atoms/icon-components/star-filled-icon"

export default function IconButtonApply(props: {id: number, isApplied: boolean, onClick: MouseEventHandler}) {

    if(props.isApplied) {
        return (
            <ButtonActionIconBlue id={props.id} onClick={props.onClick}>
                <StarFilledIcon />
            </ButtonActionIconBlue>
        )
    } else {
        return (
            <ButtonActionIconWhite id={props.id} onClick={props.onClick}>
                <StarEmptyIcon />
            </ButtonActionIconWhite>
        )
    }
    
}