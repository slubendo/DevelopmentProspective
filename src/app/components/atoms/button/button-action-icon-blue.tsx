import { ReactNode } from "react";

export default function ButtonActionIconBlue(props: {id: number, children: ReactNode}) {

  //for this, we'll be insert an icon image into this button and seeing how that works out.
  return (
    <button type="submit" value={props.id}>
      {props.children}
    </button>
  )
}