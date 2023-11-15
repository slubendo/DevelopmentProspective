import Link from "next/link";
import Image from "next/image"
//import { scholarship } from "@/db/schema/scholarship";
//import HomeTitle from "../../atoms/home/home-tittle";

// import scholarship as scholarshipTable from  "@/db";


// const username = session.username

export default function HomeHeader() {

    // const user = db.select().from(user).where(eq(user.username, username))

    return (
        <div className="p-2 m-auto w-2/5">

            {/* <HomeTitle></HomeTitle> */}
            <p>Good Morning</p>
            <div>
                {/* <Link href={`/profile/${user.id}`}> */}
                {/* error occurs because since user is not found the default type is any, once we have db setup error will go away */}
                    {/* <UserProfileImage id={user.id}></UserProfileImage> */}
                {/* </Link> */}
            </div>

        </div>
    )
}