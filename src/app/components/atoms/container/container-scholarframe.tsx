import { ReactNode } from "react";

export default function ContainerScholarFrame(props: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-blue-ish-gray p-1">
      {props.children}
    </div>
  );
}