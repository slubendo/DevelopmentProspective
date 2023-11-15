import Image from "next/image";
import Link from "next/link";

export default function AvatarLogo (props: {src: string, href: string}) {
    return (
        <Link href={props.href}>
            <Image 
                src={props.src}
                alt="Prospective Logo"
            />
        </Link>
    )
}