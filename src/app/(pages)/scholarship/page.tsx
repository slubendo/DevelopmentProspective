
import ScrollScholarshipcardSimple from '@/app/components/organisms/scrollscholarshipcardsimple'
import BlockHeader2 from '@/app/components/atoms/block/block-header-2'
import scholarshipData from '@/db/fake-schol.json';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

import { getFormResultsAndConvertToScholarshipArray } from './action';

export default async function Home() {

  const session = await auth();

  if(session) {
    const result = await getFormResultsAndConvertToScholarshipArray();

    const databaseList = result.map((item: { title: any; content: any; award: any; deadline: any; href: any; src: any; alt: any; }) => {
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
      <div className="md:mt-[100px]">
        <h1 className="text-4xl font-bold text-center text-blue-900 p-2">Scholarships</h1>
        <ScrollScholarshipcardSimple list={databaseList} />
      </div>
    )
  }
  
  const listTest = scholarshipData.map(item => {
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
    <div className="md:mt-[100px]">
      <h1 className="text-4xl font-bold text-center text-blue-900 p-2">Scholarships</h1>
      <ScrollScholarshipcardSimple list={listTest} />
    </div>
  )
}
