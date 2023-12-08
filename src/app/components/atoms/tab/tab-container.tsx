import { ReactNode } from "react";

export default function TabContainer(props: { children: ReactNode }) {
  return (
    <div className="rounded-t-xl">
      <div className="bg-gray-100 pt-2 my-4 rounded-t-[80px]">
        {props.children}
      </div>
    </div>
  )
}