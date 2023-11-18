import BlockHeader2 from "../atoms/block/block-header-2";
import GreetingHeaderSubtitle from "../atoms/greeting/greeting-header-subtitle";
import {redirect} from "next/navigation"
import Link from "next/link";

export default function ProfileBlock (props: {user: string | undefined | null, subtitle: string | undefined | null}) {

    if(typeof props.user == "string" && typeof props.subtitle == "string") {
        return (
            <div>
                <BlockHeader2 header={props.user} />
                <GreetingHeaderSubtitle text={props.subtitle} />
                <Link href="/api/auth/signout?callbackUrl=/">
                    <GreetingHeaderSubtitle text="Sign Out" />
                </Link>
            </div>
        )
    } else {
        redirect("/api/auth/signin?callbackUrl=/profile")
    }
}