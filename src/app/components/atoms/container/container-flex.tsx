import { ReactNode } from "react";

export default function ContainerFlex(props: { children: ReactNode }) {

  return (
    <div className="flex flex-col rounded-xl m-auto w-full 
        overflow-scroll md:flex-row md:overflow-x-auto md:w-5/6 md:h-auto">
      {props.children}
    </div>
  )
}