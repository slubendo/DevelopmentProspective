import ScholarshipCardResult from "./scholarshipcardresult";
import ContainerFlex from "../atoms/container/container-flex";

export type Scholarship = { id: number, title: string, content: string, award: number | string, deadline: string, href: string, src: string, alt: string }

export default function ScrollScholarshipcardResult(props: { list: Scholarship[] }) {

  const list = props.list;
  let x = 0;

  //alright, so for this in particular, I would need to create a separate component for when this scholarshipcardsimple
  //exists inside the tabs of the profile. When it does, it will have two extra buttons, alongside details.
  //one button allows for the toggling of the isApplied state.
  //the other allows for the deletion of the scholarship.
  //these should be form buttons that trigger a handlesubmit that triggers an action inside action.ts

  //so right now, what we need is an action that saves, to the use, the scholarship data.
  //how would we manage that????
  //can we make this a button??

  const result = list.map((item, index) => {

    return (
        <div key={index} className="snap-center shrink-0 mx-2 first:ml-[5%] last:mr-[5%]" style={{ width: '90vw', maxWidth: '90vw' }}>
      <ScholarshipCardResult
        title={item.title}
        content={item.content}
        award={item.award}
        deadline={item.deadline}
        href={item.href}
        src={item.src}
        alt={item.alt}
      />
    </div>
    )
  })

  return (
    <div className="bg-gray-100">

      {/* Using fake data */}
      <ContainerFlex>
        <div className="flex overflow-x-auto snap-x snap-mandatory" style={{ scrollSnapType: 'x mandatory', scrollPadding: '0 5%' }}>
          {result}
        </div>
      </ContainerFlex>
    </div>

  )
}