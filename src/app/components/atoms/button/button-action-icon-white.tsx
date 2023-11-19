import { ReactNode, MouseEventHandler } from "react";

export default function ButtonActionIconWhite(props: {id: number, onClick:MouseEventHandler, children: ReactNode}) {

  //for this, we'll be insert an icon image into this button and seeing how that works out.
  return (
    <button type="submit" value={props.id} onClick={props.onClick}>
      {props.children}
    </button>
  )
}