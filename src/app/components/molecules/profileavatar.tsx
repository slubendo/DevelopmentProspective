import AvatarUser from "../atoms/avatar/avatar-user"
import AvatarFrame from "../atoms/avatar/avatar-frame"

export default function ProfileAvatar(props:{src: string, href: string, alt: string}) {
    return (
        <AvatarFrame>
            <AvatarUser src={props.src} href={props.href} alt={props.alt} />
        </AvatarFrame>
    )
}