import Image from "next/image";

export default function ProfileUserIcon(props: { src: string, name: string }) {

  return (
    <Image
      src={props.src}
      alt={props.name}
    />
  )
}