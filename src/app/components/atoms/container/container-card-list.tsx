import { ReactNode } from "react";

export default function ContainerCardList(props: { children: ReactNode }) {

  return (
    <div className="rounded-xl m-4 w-5/6 h-1/2 shadow-2xl p-4">
      {props.children}
    </div>
  )
}