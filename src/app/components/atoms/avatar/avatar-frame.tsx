import { ReactNode } from "react";

export default function AvatarFrame(props: {children:ReactNode}) {
    return (
        <div className="rounded-full w-fit h-auto">
            {props.children}
        </div>
    )
}