import Link from "next/link"

export default function ButtonActionText(props: { href: string, text: string }) {

  return (
    <Link href={props.href}>
      <div className="text-center p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-2xl transform hover:-translate-y-1 w-18">
        {props.text}
      </div>
    </Link>
  )
}