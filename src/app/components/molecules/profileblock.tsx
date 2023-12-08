import GreetingHeaderSubtitle from "../atoms/greeting/greeting-header-subtitle";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function ProfileBlock(props: {
  user: string | undefined | null;
  subtitle: string | undefined | null;
}) {
  if (typeof props.user === "string" && typeof props.subtitle === "string") {
    return (
      <div>
        <p className="text-2xl">{props.user}</p>
        <GreetingHeaderSubtitle text={props.subtitle} />
        <Link href="/api/auth/signout?callbackUrl=/">
          <div className="text-center bg-azure-blue text-white text-xs py-1 w-40 rounded-full transition-transform ease-in-out duration-300 transform hover:scale-105">
            <GreetingHeaderSubtitle text="Sign Out" />
          </div>
        </Link>
      </div>
    );
  } else {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }
}