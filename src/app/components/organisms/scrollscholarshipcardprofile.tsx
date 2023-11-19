import ScholarshipCardSimple from "./scholarshipcardsimple";
import ScholarshipCardProfile from "./scholarshipcardprofile";
import ContainerFlex from "../atoms/container/container-flex";

export type Scholarship = { id: number, title: string, content: string, award: number | string, deadline: string, href: string, src: string, alt: string }

export default function ScrollScholarshipcardProfile(props: { list: Scholarship[] }) {

  const list = props.list;
  let x = 0;
  
  //alright, so for this in particular, I would need to create a separate component for when this scholarshipcardsimple
  //exists inside the tabs of the profile. When it does, it will have two extra buttons, alongside details.
  //one button allows for the toggling of the isApplied state.
  //the other allows for the deletion of the scholarship.
  //these should be form buttons that trigger a handlesubmit that triggers an action inside action.ts

  return (
    <div>

      {/* Using fake data */}
      <ContainerFlex>
        
        {list.map(item =>
          <div key={x++}>
            <ScholarshipCardProfile
              id={item.id}
              title={item.title}
              content={item.content}
              award={item.award}
              deadline={item.deadline}
              href={item.href}
            />
          </div>)}

      </ContainerFlex>
    </div>

  )
}