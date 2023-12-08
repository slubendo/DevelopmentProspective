import ProfileBlock from "../molecules/profileblock";
import ProfileAvatar from "../molecules/profileavatar";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";

export default async function ProfileUserCard() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }

  let image = "";
  if (session.user.image) {
    image = session.user.image;
  }

  return (
    <div className="flex items-start w-full px-4 md:w-7/8 m-2">
      <div className="flex flex-col items-start">
        <ProfileAvatar src={image} href="/profile" alt="User Avatar Icon" />
        <div className="flex flex-col items-start mt-2">
          <ProfileBlock user={session.user.name} subtitle={session.user.email} />
        </div>
      </div>
    </div>
  );
}