import ScholarshipCardSimple from "./scholarshipcardsimple";
import ContainerFlex from "../atoms/container/container-flex";

export type Scholarship = { title: string, content: string, award: number | string, deadline: string, href: string, src: string, alt: string }

export default function ScrollScholarshipcardSimple(props: { list: Scholarship[] }) {

  const list = props.list;
  let x = 0;

  return (
    <div>

      {/* Using fake data */}
      <ContainerFlex>
        
        {list.map(item =>
          <div key={x++}>
            <ScholarshipCardSimple
              title={item.title}
              content={item.content}
              award={item.award}
              deadline={item.deadline}
              href={item.href}
              src={item.src}
              alt={item.alt}
            />
          </div>)}

      </ContainerFlex>
    </div>

  )
}