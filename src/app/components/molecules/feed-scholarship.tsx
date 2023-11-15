// import Link from "next/link";
// import { scholarship } from "@/db/schema/scholarship";
// import scholarship as scholarshipTable from  "@/db";
// import PostScholarship from "./post-scholarship";

// interface FeedScholarshipProps {
//     scholarshipArr: scholarship[]
// }


// export default function FeedScholarship({ scholarshipArr }: FeedScholarshipProps) {

//     // const scholarship = db.select().from(scholarshipTable).where(eq(scholarshipTable.id, id))
//     const feed = scholarshipArr.map(scholarship =>
//         <PostScholarship key={scholarship.id} id={scholarship.id}></PostScholarship>
//     )

//     return (
//         <div>
//             {feed}
//         </div>
//     )
// }