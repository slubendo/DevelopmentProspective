import { ReactNode } from "react"

export default function ContainerScholarFrame(props: { children: ReactNode }) {

  return (
    <div className="rounded-xl bg-gray-300 aspect-square w-16 h-auto p-2 m-2">
      {props.children}
    </div>
  )
}