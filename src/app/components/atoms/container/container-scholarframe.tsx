import { ReactNode } from "react";

export default function ContainerScholarFrame(props: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-blue-ish-gray overflow-hidden flex items-center justify-center" style={{ paddingTop: "100%", position: "relative" }}>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        {props.children}
      </div>
    </div>
  );
}