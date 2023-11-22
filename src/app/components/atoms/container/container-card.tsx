import { ReactNode } from "react";

export default function ContainerCard(props: { children: ReactNode }) {

  return (
    <div className="bg-white rounded-xl mx-4 my-2 w-7/8 h-[90%] p-3 md:w-80">
      {props.children}
    </div>
  )
}