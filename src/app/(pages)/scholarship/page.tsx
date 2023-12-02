import ScrollScholarshipcardResult from '@/app/components/organisms/scrollscholarshipcardresult';
import ScrollScholarshipcardSimple from '@/app/components/organisms/scrollscholarshipcardsimple'
import BlockHeader2 from '@/app/components/atoms/block/block-header-2'
import scholarshipData from '@/db/fake-schol.json';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

import Link from 'next/link';

import { getFormResultsAndConvertToScholarshipArray } from './action';
import { getNonProfileScholarships } from '../profile/action';

import { Scholarship } from '@/app/components/organisms/scrollscholarshipcardsimple';

export default async function Home() {

  const session = await auth();

  const exploreList = await getNonProfileScholarships();
  
  if (session) {
    const result = await getFormResultsAndConvertToScholarshipArray();
    
    const databaseList = result.map((item: { title: any; description: any; amount: any; deadline: any; siteURL: any; src: any; shortDescription: any; }) => {
      const baseUrlMatch = item.siteURL.match(/^(https?:\/\/[^/]+)/);
      const baseUrl = baseUrlMatch ? baseUrlMatch[0] : '';
      const faviconResponse = (baseUrl + "/favicon.ico");
      return {
        id: 1,
        title: item.title,
        content: item.description,
        award: item.amount,
        deadline: item.deadline,
        href: item.siteURL,
        src: faviconResponse,
        alt: item.shortDescription
      }
    }
    )

    return (
      <div className="md:mt-[100px]">
        <h1 className="text-4xl font-bold text-center text-blue-900 p-2">Scholarships</h1>
        <Link href="/form">
          <p>Generate New Scholarships</p>
        </Link>
        <ScrollScholarshipcardResult list={databaseList} />
        <BlockHeader2 header="Explore Scholarships" />
        <ScrollScholarshipcardResult list={exploreList} />
      </div>
    )
  }

  return (
    <div className="md:mt-[100px]">
      <h1 className="text-4xl font-bold text-center text-blue-900 p-2">Scholarships</h1>
      <Link href="/form">
        <p>Generate New Scholarships</p>
      </Link>
      <BlockHeader2 header="Explore Scholarships" />
      <ScrollScholarshipcardSimple list={exploreList} />
    </div>
  )
}
