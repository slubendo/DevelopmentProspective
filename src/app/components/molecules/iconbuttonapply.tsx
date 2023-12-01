import StarEmptyIcon from "../atoms/icon-components/star-empty-icon"
import StarFilledIcon from "../atoms/icon-components/star-filled-icon"


import { toggleScholarshipApplicationStatus } from "@/app/(pages)/profile/action"

export default function IconButtonApply(props: {id: number, isApplied: boolean}) {

    const handleClick = async() => {
        console.log("Triggered and awaiting.")
        await toggleScholarshipApplicationStatus(props.id);
        console.log("It should have worked.");
    }

    if(props.isApplied) {
        return (
            <button className="bg-blue-400" onClick={handleClick}>
                <StarFilledIcon />
            </button>
        )
    } else {
        return (
                <button onClick={handleClick}>
                    <StarEmptyIcon />
                </button>
        )
    }
    
}