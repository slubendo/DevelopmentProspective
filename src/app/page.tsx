import React from 'react';
import ScrollScholarshipCardSimple from './components/organisms/scrollscholarshipcardsimple';
import ScrollScholarshipcardResult from './components/organisms/scrollscholarshipcardresult';
import BlockHeader2 from './components/atoms/block/block-header-2';
import GreetingCard from './components/organisms/greetingcard';
import scholarshipData from '@/db/fake-schol.json';
import ButtonActionText from './components/atoms/button/button-action-text';
import AddCategoryIcon from './components/atoms/add-category';

import Link from 'next/link';

import { auth } from '@/auth';
import { db } from '@/db';
import { ai } from './aiFunction';
import { getNonProfileScholarships } from './(pages)/profile/action';


export default async function Home() {

  const session = await auth();

  const exploreList = await getNonProfileScholarships();

  let exploreCards;

  if(session) {
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
      <button button className='text-center p-2 bg-azure-blue text-white text-xs font-medium py-2.5 px-6 rounded-full transition-transform ease-in-out duration-300 transform hover:scale-105 mt-7 ml-10'>
        <Link href="/form">
          Find Your Scholarships
        </Link>

      </button>
      {/* Scholarship header */}
      <div className="flex justify-center mx-auto w-full pt-4 bg-slate-100 rounded-t-full">
      <BlockHeader2 header="Popular Scholarships" className="font-normal text-xl w-full ml-10 mt-4"/>

      </div>
      <ScrollScholarshipCardSimple list={listTest} />

      {/* Explore scholarship header */}
      <div className="flex justify-center mx-auto w-full bg-slate-100">
        <BlockHeader2 header="Explore" className="font-normal text-xl w-full ml-10 mt-4" />
      </div>
      <div>
        <div className="flex justify-center mx-auto pb-2 w-full bg-slate-100">
          <ButtonActionText href="/" text="Athletics" />
          <span className="px-2"></span>
          <ButtonActionText href="/" text="Ethnicity" />
          <span className="px-12"></span>
          <button className="bg-blue-600 px-2 rounded-full">
            <AddCategoryIcon />
          </button>
        </div>
      </div>
      <div className="bg-gray-100">
        {exploreCards}
      </div>
    </div>
  );
}
