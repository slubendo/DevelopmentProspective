import { ReactNode } from "react";

export default function AvatarFrame(props: {children:ReactNode}) {
    return (
        <div className="p-2 rounded-full border-4 border-blue-500">
            {props.children}
        </div>
    )
}