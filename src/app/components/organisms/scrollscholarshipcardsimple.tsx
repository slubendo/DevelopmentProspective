"use server"
import ScholarshipCardSimple from "./scholarshipcardsimple";
import ContainerFlex from "../atoms/container/container-flex";
import { SessionUserType, sessionUser } from "@/app/action";

export type Scholarship = { id: number, title: string, content: string, award: number | string, deadline: string, href: string, src: string, alt: string }

export default async function ScrollScholarshipcardSimple(props: { list: Scholarship[]}) {
  const user = sessionUser()

  const list = props.list;
  let x = 0;

  //alright, so for this in particular, I would need to create a separate component for when this scholarshipcardsimple
  //exists inside the tabs of the profile. When it does, it will have two extra buttons, alongside details.
  //one button allows for the toggling of the isApplied state.
  //the other allows for the deletion of the scholarship.
  //these should be form buttons that trigger a handlesubmit that triggers an action inside action.ts

  return (
    <div className="bg-gray-100">

      {/* Using fake data */}
      <ContainerFlex>

        <div className="flex overflow-x-auto snap-x snap-mandatory" style={{ scrollSnapType: 'x mandatory', scrollPadding: '0 5%' }}>
          {list.map((item, index) => (
            <div key={index} className="snap-center shrink-0 mx-2 first:ml-[5%] last:mr-[5%]" style={{ width: '90vw', maxWidth: '90vw' }}>
              <ScholarshipCardSimple
                title={item.title}
                content={item.content}
                award={item.award}
                deadline={item.deadline}
                href={item.href}
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </ContainerFlex>
    </div>

  )
}