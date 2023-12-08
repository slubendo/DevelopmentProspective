import GreetingBlock from "../molecules/greetingblock"
import ProfileAvatar from "../molecules/profileavatar"
import {auth} from "@/auth"

export default async function GreetingCard() {
  
  const session = await auth();

  if(session) {

    let image = "";
    let name = "";
      if(session.user.image && session.user.name) {
        image = session.user.image;
        name = session.user.name;
      }

    return (
        <div className="flex flex-row items-center w-full p-4 md:w-7/8 m-auto bg-white">
          <div className="flex px-5">
            <GreetingBlock greeting="Hello" user={name} subtitle="Welcome to Prospective!" />
          </div>
          <div className="ml-auto">
            <ProfileAvatar
              src={image}
              href="/profile"
              alt="User Avatar"
            />
          </div>
        </div>
  
    )
  } else {
    return (
      <div className="flex flex-row items-center w-full p-4 md:w-7/8 m-auto bg-white">
      <div className="flex px-2">
        <GreetingBlock greeting="Hello" user="" subtitle="Welcome to Prospective!" />
      </div>
    </div>
    )
  }
  
}