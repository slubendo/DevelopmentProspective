import Link from "next/link"

export default function ButtonActionText(props: { href: string, text: string }) {

  return (
    <Link href={props.href}>
      <div className="text-center p-2 bg-blue-600 hover:bg-blue-900 text-white text-xs font-extralight py-2 px-4 rounded-full transform hover:-translate-y-1 w-18">
        {props.text}
      </div>
    </Link>
  )
}