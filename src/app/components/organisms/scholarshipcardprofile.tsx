import TitleBlock from "../molecules/titleblock";
import ContainerCard from "../atoms/container/container-card";
import ValuesBlock from "../molecules/valuesblock";
import ButtonActionText from "../atoms/button/button-action-text";
import IconButtonDelete from "../molecules/iconbuttondelete";
import IconButtonApply from "../molecules/iconbuttonapply";

export default function ScholarshipCardProfile(props: { id: number, title: string, content: string, award: number | string, deadline: string, href: string, isApplied: boolean }) {

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
      <div className="flex p-2">
        <div className="p-2 w-3/4">
          {/* Scholarship title */}
          <TitleBlock header={props.title} />
          <div className="flex p-4 h-28 overflow-hidden">
            {props.content}
          </div>
        </div>

        <div className="w-1/5">
          <IconButtonApply id={props.id} isApplied={props.isApplied} />
          <IconButtonDelete id={props.id} />
        </div>
      </div>

      <div className="flex justify-between items-center p-4">
        <ValuesBlock header="Award" value={value} />
        <ValuesBlock header="Deadline" value={props.deadline} />
        <ButtonActionText href={props.href} text="Details" />
      </div>

    </ContainerCard>
  )
}