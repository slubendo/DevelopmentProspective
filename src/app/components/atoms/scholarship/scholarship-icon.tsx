import Image from "next/image";

export default function ScholarshipIcon(props: { src: string, alt: string }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ width: "100%", height: "100%" }}>
      <Image
        src={props.src}
        alt={props.alt}
        className="object-cover w-full h-full"
        layout="fill"
      />
    </div>
  );
}