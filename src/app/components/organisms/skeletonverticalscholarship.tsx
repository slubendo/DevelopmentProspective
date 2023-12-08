"use server"
import ScholarshipCardSimple from "./scholarshipcardsimple";
import ContainerFlex from "../atoms/container/container-flex";
import { SessionUserType, sessionUser } from "@/app/action";

export default async function SkeletonVerticalScholarship() {
    return (
        <div className="bg-slate-100 pb-5">
            <div className="flex justify-center">
                    <div className="flex justify-center bg-white w-[300px] h-[225px] rounded-lg ">
                        <div className="w-4/5 h-[175px] bg-gray-300 p-3 my-4 ml-4 mr-2 rounded animate-pulse">
                        </div>
                        <div className="w-1/6 h-[50px] bg-gray-300 p-3 my-4 mr-4 ml-2 rounded animate-pulse">
                        </div>      
                    </div>
            </div>
            <div  className="bg-slate-100 pb-5"></div>
            <div className="flex justify-center">
                    <div className="flex justify-center bg-white w-[300px] h-[225px] rounded-lg ">
                        <div className="w-4/5 h-[175px] bg-gray-300 p-3 my-4 ml-4 mr-2 rounded animate-pulse">
                        </div>
                        <div className="w-1/6 h-[50px] bg-gray-300 p-3 my-4 mr-4 ml-2 rounded animate-pulse">
                        </div>      
                    </div>
            </div>
        </div>
    )
}