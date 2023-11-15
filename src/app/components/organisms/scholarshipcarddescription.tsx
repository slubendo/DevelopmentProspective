import ContentBlock from "../molecules/contentblock";
import ValuesBlock from "../molecules/valuesblock";
import ButtonActionText from "../atoms/button/button-action-text";

import ScholarshipIconFrame from "../molecules/scholarshipiconframe";

export default function ScholarshipCardDescription (props: {title: string, content: string, award: number | string, deadline: string, src: string, alt: string, href: string}) {

    let value;

    if (typeof props.award == "number") {
        value = "$" + String(props.award);
    } else {
        value = "$" + props.award;
    }

    return (
        <div className="rounded-xl m-4 w-5/6 h-1/4 shadow-2xl p-4 md:h-auto">
            <div className="flex flex-wrap">
                <div className="w-3/4 h-48 overflow-y-auto">
                    <ContentBlock header="Description" content={props.content} />
                </div>
                <div className="w-1/4">
                    <ScholarshipIconFrame 
                        src={props.src}
                        alt={props.alt}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/4">
                    <ValuesBlock header="Award" value={value} />
                </div>
                <div className="w-2/4">
                    <ValuesBlock header="Deadline" value={props.deadline} />
                </div>
                <div className="w-1/4">
                    <ButtonActionText href={props.href} text="Apply" />
                </div>
            </div>
        </div>
    )
}