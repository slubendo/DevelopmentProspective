import Image from "next/image"

export default function ScholarshipIcon (props: {src: string, alt: string}) {
    return (
        <Image 
            src={props.src}
            alt={props.alt}
            className="object-scale-down rounded-xl"
            width={350}
            height={350}
        />
    )
}