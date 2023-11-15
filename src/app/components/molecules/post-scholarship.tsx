import Link from "next/link";
import Image from "next/image"
//import { scholarship } from "@/db/schema/scholarship";
// import scholarship as scholarshipTable from  "@/db";



export default function PostScholarship(id: number) {

    // const scholarship = db.select().from(scholarshipTable).where(eq(scholarshipTable.id, id))

    return (
        <div className="p-2 m-auto w-2/5">
            {/* <Link href={`/scholarship/${scholarship.id}`}>
                <h2 className="text-2xl font-bold">{scholarship.name}</h2>
            </Link>
            <div className="w-auto h-auto max-h-20 overflow-y-auto border-solid border-2 border-black rounded-2xl">
                <p className="m-2">{scholarship.description}</p>
                <div>
                    <Image src={scholarship.media.url} alt="scholarship image"></Image>
                    <svg className="save "></svg>
                </div>
            </div>
            <p>Amount Awarded: ${scholarship.amount}</p>
            <p>Deadline : ${scholarship.deadline}</p>
            <Link href={`/scholarship/${scholarship.id}`}>
                <p className="text-blue-400">Details</p>
            </Link> */}
        </div>
    )
}