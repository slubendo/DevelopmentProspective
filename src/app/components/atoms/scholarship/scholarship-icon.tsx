import Image from "next/image"

export default function ScholarshipIcon (props: {src: string, alt: string}) {
    return (
        <Image 
            src={props.src}
            alt={props.alt}
            className="object-scale-down rounded-2xl"
            width={300}
            height={300}
        />
    )
}