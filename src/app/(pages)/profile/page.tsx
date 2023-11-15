import ProfileUserCard from '@/app/components/organisms/profileusercard'
import ScrollScholarshipcardSimple from '@/app/components/organisms/scrollscholarshipcardsimple'
import BlockHeader2 from '@/app/components/atoms/block/block-header-2'
import TabsScholarshipCardSimple from '@/app/components/organisms/tabsscholarshipcardsimple'
import scholarshipList from '@/db/fake-schol.json'

export default function ProfilePage() {

  const listTest = scholarshipList.map(item => {
    return {
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

  const listTest1 = [listTest[0], listTest[1]]

  const listTest2 = [listTest[2], listTest[3], listTest[4]]

  return (
    <div className="flex flex-col rounded-xl mx-auto w-full 
    overflow-scroll md:flex-row md:overflow-x-auto md:w-5/6 md:mt-[100px] md:h-auto">
      <div>
        <ProfileUserCard />
      </div>
      <div>
        <TabsScholarshipCardSimple listSaved={listTest1} listApplied={listTest2} />
      </div>
    </div>
  )
}
