"use client"

import TitleBlock from "../molecules/titleblock";
import ContainerCard from "../atoms/container/container-card";
import ValuesBlock from "../molecules/valuesblock";
import ButtonActionText from "../atoms/button/button-action-text";
import ScholarshipIconFrame from "../molecules/scholarshipiconframe";

import { useState } from "react";

import { saveScholarshipToUser } from "@/app/(pages)/scholarship/action";

export default function ScholarshipCardResult(props: { title: string, content: string, award: number | string, deadline: string, href: string, src: string, alt: string }) {

  let value;

  if (typeof props.award == "number") {
    value = "$" + String(props.award);
  } else {
    value = "$" + props.award;
  }

  const [index, setIndex] = useState(0);
  const [buttonToggle, setButtonToggle] = useState(false);

  const messageArray = ["Save to Profile", "Saving to Profile", "Saved to Profile"]

  const jsonData = JSON.stringify(props)

  const handleClick = async () => {

    setIndex(1);
    await saveScholarshipToUser(jsonData);
    setButtonToggle(true);
    setIndex(2);

  };


  return (
    <ContainerCard>

      {/* Scholarship block container */}
      <div className="flex pl-2">
        <div className=" w-3/4">
          {/* Scholarship title */}
          <TitleBlock header={props.title} />
          <div className="flex h-16 overflow-y-auto text-xs text-dark-gray">
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
      <button onClick={handleClick} disabled={buttonToggle} aria-disabled={buttonToggle}>{messageArray[index]}</button>

    </ContainerCard>
  )
}