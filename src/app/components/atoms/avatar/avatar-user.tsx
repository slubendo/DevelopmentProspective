import Image from "next/image";
import Link from "next/link";

export default function AvatarUser (props: {src: string, alt: string, href: string}) {
    return (
        <Link href={props.href}>
            <Image 
                src={props.src}
                alt={props.alt}
                className="object-scale-down rounded-full"
                width={100}
                height={100}
            />
        </Link>
    )
}