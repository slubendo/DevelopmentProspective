
// import { scholarship } from "@/db/schema/scholarship";
// import scholarship as scholarshipTable from  "@/db";



export default function ScholarshipHeader(id: number) {

    // const scholarship = db.select().from(scholarshipTable).where(eq(scholarshipTable.id, id))

    return (
        <div className="">
            {/* <BackIcon></BackIcon>
            <ScholarshipTitle></ScholarshipTitle>
            <h3>{scholarship.source}</h3>
            {/* what is scholarship available???? */}
            {/*<h4>Available: {scholarship.available}</h4> */}
        </div>
    )
}