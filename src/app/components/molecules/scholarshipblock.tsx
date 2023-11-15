import Link from "next/link";
//import { scholarships } from "@/db/schema/scholarship";

// need to create acceptable type for scholarship
// In progess Gary & Stephane
export default function ScholarshipBlock(scholarship:any){

    const scholName = String(scholarship.Name);
    const scholLink = String(scholarship.Link);

    return (
        <div key={scholarship.id} className="p-2 m-auto w-2/5">
            <h2 className="text-2xl font-bold">{scholName}</h2>
            <div className="w-auto h-auto max-h-20 overflow-y-auto border-solid border-2 border-black rounded-2xl">
                <p className="m-2">{scholarship.Description}</p>
            </div>
            <p>Amount Awarded: ${scholarship.Amount}</p>
            <p className="text-blue-400"><Link href={scholLink}>Link</Link></p>
        </div>
    )
}