import React, { Suspense } from 'react';
import ScrollScholarshipCardSimple from './components/organisms/scrollscholarshipcardsimple';
import ScrollScholarshipcardResult from './components/organisms/scrollscholarshipcardresult';
import BlockHeader2 from './components/atoms/block/block-header-2';
import GreetingCard from './components/organisms/greetingcard';
import scholarshipData from '@/db/fake-schol.json';

import Link from 'next/link';

import { auth } from '@/auth';
import { getNonProfileScholarships } from './(pages)/profile/action';
import SkeletonHorizontalScholarship from './components/organisms/skeletonhorizontalschorlarship';

export default async function Home() {

  const session = await auth();

  const exploreList = await getNonProfileScholarships();

  let exploreCards;

  if (session) {
    exploreCards = (<ScrollScholarshipcardResult list={exploreList} />)
  } else {
    exploreCards = (<ScrollScholarshipCardSimple list={exploreList} />)
  }

  const listTest = scholarshipData.map(item => {
    return {
      id: 2,
      title: item.title,
      content: item.content,
      award: item.award,
      deadline: item.deadline,
      href: item.details,
      src: item.src,
      alt: item.alt
    };
  });

  return (
    <div>
      <GreetingCard />
      <div className="flex justify-center">
        <button className='text-center p-2 bg-azure-blue text-white text-xs font-medium py-2.5 px-6 mx-auto rounded-full transition-transform ease-in-out duration-300 transform hover:scale-105 mb-5'>
          <Link href="/form">
            Find Your Scholarships
          </Link>
        </button>
      </div>

      {/* Scholarship header */}
      <div className="flex justify-center mx-auto w-full pt-4 bg-gray-100 rounded-t-full">
        <BlockHeader2 header="Popular" className="font-normal text-xl w-full ml-10 mt-2" />

      </div>
      <Suspense fallback={<SkeletonHorizontalScholarship />}>
        <ScrollScholarshipCardSimple list={listTest} />
      </Suspense>

      {/* Explore scholarship header */}
      <div className="flex justify-center mx-auto w-full bg-gray-100">
        <BlockHeader2 header="Explore" className="font-normal text-xl w-full ml-10" />
      </div>

      {/* Sorting for explore */}

      {/* <div>
        <div className="flex justify-center mx-auto pb-2 w-full bg-gray-100">
          <ButtonActionText href="/" text="Athletics" />
          <span className="px-2"></span>
          <ButtonActionText href="/" text="Ethnicity" />
          <span className="px-12"></span>
          <button className="bg-blue-600 px-2 rounded-full">
            <AddCategoryIcon />
          </button>
        </div>
      </div> */}

      <div className="bg-gray-100 mb-12">
        {exploreCards}
      </div>
    </div>
  );
}
