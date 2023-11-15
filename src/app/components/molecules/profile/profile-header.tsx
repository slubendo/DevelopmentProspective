import Link from "next/link";
import Image from "next/image"
//import { scholarship } from "@/db/schema/scholarship";
// import scholarship as scholarshipTable from  "@/db";


// const username = session.username

export default function ProfileHeader() {

    // const user = db.select().from(user).where(eq(user.username, username))

    return (
        <div className="p-2 m-auto w-2/5">
            {/* <UserProfileImage></UserProfileImage>
            <ProfileSettingsIcon></ProfileSettingsIcon>
            <h2 className="text-2xl font-bold">Hello {user.name} </h2>
            <div>
                <p>Student at <Link>{user.school}</Link></p>
                <Link>
                <SchoolMapIcon></SchoolMapIcon>
                </Link>
            </div> */}

        </div>
    )
}