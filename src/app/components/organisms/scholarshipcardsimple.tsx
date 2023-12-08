import TitleBlock from "../molecules/titleblock";
import ContainerCard from "../atoms/container/container-card";
import ValuesBlock from "../molecules/valuesblock";
import ButtonActionText from "../atoms/button/button-action-text";
import ScholarshipIconFrame from "../molecules/scholarshipiconframe";

export default function ScholarshipCardSimple(props: { title: string, content: string, award: number | string, deadline: string, href: string, src: string, alt: string }) {

  //we'll need a details button as well as the whole icon thingy too. This icon thing should have some sort of bookmark icon.

  //button action text atom should turn into a stylized div with text inside, and the whole div is linked to something.
  //image (for scholarship company icon square). This is set inside a frame that's gray, and also there's that bookmark symbol.
  //should have a flexrow or a flexcolumn set up that you can place all of these scholarship cards into.
  //navbar molecule should be adjusted. Right now, it clips shit up, which ain't great.
  //should get the svgs from the figma...somehow.
  let value;

  if (typeof props.award == "number") {
    value = "$" + String(props.award);
  } else {
    value = "$" + props.award;
  }

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

    </ContainerCard>
  )
}