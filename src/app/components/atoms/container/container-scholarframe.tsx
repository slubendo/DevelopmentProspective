import { ReactNode } from "react"

export default function ContainerScholarFrame(props: { children: ReactNode }) {

  return (
    // Card holding all the scholarship information
    <div className="rounded-lg bg-gray-100 p-1">
      {props.children}
    </div>
  )
}