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
      <img
        src="/save.svg" 
        alt="Save Icon"
        className="absolute top-1 right-0" // Adjust the positioning as needed
        style={{ width: "24px", height: "24px" }} // Set the width and height as needed
      />
    </div>
  );
}