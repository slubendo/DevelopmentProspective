import { ReactNode } from "react";

export default function ContainerCard(props: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-xl m-4 w-7/8 h-[95%] p-3 md:w-80 flex flex-col justify-between">
      {props.children}
    </div>
  )
}
