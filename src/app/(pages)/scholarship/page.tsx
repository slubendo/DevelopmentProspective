import ScrollScholarshipcardResult from '@/app/components/organisms/scrollscholarshipcardresult';
import ScrollScholarshipcardSimple from '@/app/components/organisms/scrollscholarshipcardsimple'
import BlockHeader2 from '@/app/components/atoms/block/block-header-2'
import scholarshipData from '@/db/fake-schol.json';
import NoScroll from '@/app/components/organisms/noscrollschol'

import { auth } from '@/auth';
import { redirect } from 'next/navigation';

import Link from 'next/link';

import { getFormResultsAndConvertToScholarshipArray } from './action';
import { getNonProfileScholarships } from '../profile/action';

import { Scholarship } from '@/app/components/organisms/scrollscholarshipcardsimple';
import { Suspense } from 'react';
import NoScrollScholarshipcardSimple from '@/app/components/organisms/noscrollscholarshipcardsimple';
import NoScrollScholarshipcardResult from '@/app/components/organisms/noscrollscholarshipcardresult';
import SkeletonVerticalScholarship from '@/app/components/organisms/skeletonverticalscholarship';
import SkeletonHorizontalScholarship from '@/app/components/organisms/skeletonhorizontalschorlarship';

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
          <h1 className="text-4xl font-medium text-center text-azure-blue p-2 my-2">Scholarships</h1>
          <button className='flex justify-center text-center p-2 bg-azure-blue text-white text-xs font-medium py-2.5 px-6 mb-8 rounded-full transition-transform ease-in-out duration-300 transform hover:scale-105 mx-auto'>
            <Link  href="/form">
              Generate New Scholarships
            </Link>
          </button>
          <div className="justify-center mx-auto w-full pt-4 bg-gray-100 rounded-t-[80px]">

          <ScrollScholarshipcardResult list={databaseList} />
          <BlockHeader2 header="Explore Scholarships" />
          <Suspense fallback={<SkeletonHorizontalScholarship />}>
            <NoScrollScholarshipcardResult list={exploreList} />
          </Suspense>
        </div>
      </div>
    )
  }

  return (
    <div className="md:mt-[100px]">
        <h1 className="text-4xl font-medium text-center text-azure-blue p-2 my-2">Scholarships</h1>
        <button className='flex justify-center text-center p-2 bg-azure-blue text-white text-xs font-medium py-2.5 px-6 mb-8 rounded-full transition-transform ease-in-out duration-300 transform hover:scale-105 mx-auto'>
          <Link href="/form">
            Generate New Scholarships
          </Link>
        </button>
        <div className="justify-center mx-auto w-full pt-4 bg-gray-100 rounded-t-[80px]">
        <BlockHeader2 header="Explore Scholarships" />
        <Suspense fallback={<SkeletonHorizontalScholarship />}>
          <NoScrollScholarshipcardSimple list={exploreList} />
        </Suspense>
      </div>
    </div>
  )
}
