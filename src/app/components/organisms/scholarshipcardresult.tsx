"use client"

import TitleBlock from "../molecules/titleblock";
import ContainerCard from "../atoms/container/container-card";
import ValuesBlock from "../molecules/valuesblock";
import ButtonActionText from "../atoms/button/button-action-text";
import ScholarshipIconFrame from "../molecules/scholarshipiconframe";

export default function ScholarshipCardResult(props: { title: string, content: string, award: number | string, deadline: string, href: string, src: string, alt: string }) {

  let value;

  if (typeof props.award == "number") {
    value = "$" + String(props.award);
  } else {
    value = "$" + props.award;
  }

  const jsonData = JSON.stringify(props)

  const handleClick = async () => {

    console.log("triggered onClick")
    
  };


  return (
    <ContainerCard>

      {/* Scholarship block container */}
      <div className="flex pl-2">
        <div className=" w-3/4">
          {/* Scholarship title */}
          <TitleBlock header={props.title} />
          <div className="flex h-16 overflow-y-auto text-xs text-gray-500">
            {props.content}
          </div>
        </div>

        <div className="w-1/5 ml-2">
          <ScholarshipIconFrame
            src={props.src}
            alt={props.alt}
          />
        </div>
      </div>

      <div className="flex justify-between items-center p-2">
        <ValuesBlock header="Award" value={value} />
        <ValuesBlock header="Deadline" value={props.deadline} />
        <ButtonActionText href={props.href} text="Details" />
      </div>
      <button onClick={handleClick}>Save to Profile</button>

    </ContainerCard>
  )
}