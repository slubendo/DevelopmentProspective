import React from 'react';
import ScrollScholarshipCardSimple from './components/organisms/scrollscholarshipcardsimple';
import BlockHeader2 from './components/atoms/block/block-header-2';
import GreetingCard from './components/organisms/greetingcard';
import scholarshipData from '@/db/fake-schol.json';
import ButtonActionText from './components/atoms/button/button-action-text';

export default function Home() {
  
  // Process the data as per requirements
  const listTest = scholarshipData.map(item => {
    return {
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
    <div className="md:mt-[80px]">
      <GreetingCard />

      {/* Scholarship header */}
      <div className="flex justify-center mx-auto w-[90%]">
        <BlockHeader2 header="Scholarships For You" />
        <ButtonActionText href="/form" text="Search" />
      </div>

      <ScrollScholarshipCardSimple list={listTest} />
    </div>
  );
}
