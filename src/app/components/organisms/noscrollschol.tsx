import React from 'react';
import scholarshipData from '@/db/fake-schol.json';
import ContainerFlex from '../atoms/container/container-flex';
import ScholarshipCardSimple from './scholarshipcardsimple';

export default function NoScroll() {

  const list = scholarshipData.map(item => {
    return {
      id: 1,
      title: item.title,
      content: item.content,
      award: item.award,
      deadline: item.deadline,
      href: item.href,
      src: item.src,
      alt: item.alt
    }
  }
)
  return (
    <div className="bg-gray-100 pt-5 mt-5 rounded-t-[80px] mb-12">
      <ContainerFlex>
        {/* Stack items vertically */}
        <div className="flex flex-col">
          {list.map((item, index) => (
            <div key={index} className=" flex justify-center">
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