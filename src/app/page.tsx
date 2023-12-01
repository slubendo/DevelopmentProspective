import React from 'react';
import ScrollScholarshipCardSimple from './components/organisms/scrollscholarshipcardsimple';
import BlockHeader2 from './components/atoms/block/block-header-2';
import GreetingCard from './components/organisms/greetingcard';
import scholarshipData from '@/db/fake-schol.json';
import ButtonActionText from './components/atoms/button/button-action-text';
import AddCategoryIcon from './components/atoms/add-category';

import Link from 'next/link';

import { auth } from '@/auth';
import { db } from '@/db';
import { aiFunction } from './aiFunction';
import { sessionUser } from './action';


export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  console.log(searchParams)
  const scholarshipArray = aiFunction("chat-agents", false, JSON.stringify(searchParams))
  const formResults = searchParams
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
      <Link href="/form">
        Find Your Scholarships
      </Link>
      {/* Scholarship header */}
      <div className="flex justify-center mx-auto w-full pt-4 bg-slate-100 rounded-t-full">
        <BlockHeader2 header="Popular Scholarships" />
      </div>
      <ScrollScholarshipCardSimple list={listTest} formData={searchParams} />

      {/* Explore scholarship header */}
      <div className="flex justify-center mx-auto w-full bg-slate-100">
        <BlockHeader2 header="Explore" />
      </div>
      <div>
        <div className="flex justify-center mx-auto pb-2 w-full bg-slate-100">
          <ButtonActionText href="/" text="Athletics" />
          <span className="px-2"></span>
          <ButtonActionText href="/" text="Ethnicity" />
          <span className="px-2"></span>
          <button className="bg-blue-600 px-2 rounded-full">
            <AddCategoryIcon />
          </button>
        </div>
      </div>
      <div className="bg-gray-100">
        <ScrollScholarshipCardSimple list={listTest} formData={searchParams} />
      </div>
    </div>
  );
}
