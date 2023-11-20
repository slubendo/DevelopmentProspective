import { MouseEventHandler } from "react"
import ButtonActionIconBlue from "../atoms/button/button-action-icon-blue"
import ButtonActionIconWhite from "../atoms/button/button-action-icon-white"
import StarEmptyIcon from "../atoms/icon-components/star-empty-icon"
import StarFilledIcon from "../atoms/icon-components/star-filled-icon"

import Link from "next/link"

export default function IconButtonApply(props: {id: number, isApplied: boolean}) {

    const url = "/profile/toggle-apply/" + String(props.id);

    if(props.isApplied) {
        return (
            <Link href={url}>
            <ButtonActionIconBlue id={props.id}>
                <StarFilledIcon />
            </ButtonActionIconBlue>
            </Link>
        )
    } else {
        return (
            <Link href={url}>
                <ButtonActionIconWhite id={props.id}>
                    <StarEmptyIcon />
                </ButtonActionIconWhite>
            </Link>
        )
    }
    
}