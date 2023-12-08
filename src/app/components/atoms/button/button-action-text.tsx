import Link from "next/link";

export default function ButtonActionText(props: { href: string, text: string }) {
  return (
    <Link href={`${props.href}`}>
      <div className="text-center p-2 bg-azure-blue text-white text-xs font-medium py-2 px-6 rounded-full transition-transform ease-in-out duration-300 transform hover:scale-105">
        {props.text}
      </div>
    </Link>
  );
}