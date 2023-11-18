import ProfileBlock from "../molecules/profileblock"
import ProfileAvatar from "../molecules/profileavatar"

import {auth} from "@/auth"
import {redirect} from "next/navigation"
import { db } from "@/db";

export default async function ProfileUserCard() {
  const session = await auth();

  if(!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/profile")
  }

  let image = "";
  if(session.user.image) {
    image = session.user.image;
  }


  return (
    <div className="flex flex-row items-center w-full p-4 md:w-7/8 m-2">
      <ProfileAvatar
        src={image}
        href="/profile"
        alt="User Avatar Icon" />
      <div className="flex px-4">
        <ProfileBlock user={session.user.name} subtitle={session.user.email} />
      </div>
    </div>

  )
}