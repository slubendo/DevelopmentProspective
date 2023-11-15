import { ReactNode } from "react";

export default function ContainerCard(props: { children: ReactNode }) {

  return (
    <div className="bg-white border rounded-xl mx-4 my-2 w-7/8 h-[90%] shadow-2xl p-3 md:w-80">
      {props.children}
    </div>
  )
}