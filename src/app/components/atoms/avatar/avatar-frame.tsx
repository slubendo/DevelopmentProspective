import { ReactNode } from "react";

export default function AvatarFrame(props: { children: ReactNode }) {
  return (
    <div className="p-2 rounded-full border-4 border-azure-blue">
      {props.children}
    </div>
  );
}