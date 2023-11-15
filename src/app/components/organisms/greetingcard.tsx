import GreetingBlock from "../molecules/greetingblock"
import ProfileAvatar from "../molecules/profileavatar"

export default function GreetingCard() {
  
  return (

    <div className="flex flex-row items-center w-full p-4 md:w-7/8 m-auto">
      <ProfileAvatar
        src="https://upload.wikimedia.org/wikipedia/commons/3/32/A_photograph_of_an_astronaut_riding_a_horse_2022-08-28.png"
        href="http://www.google.ca"
        alt="Horse Icon" />
      <div className="flex px-4">
        <GreetingBlock greeting="Hello" user="Gary" subtitle="Welcome To Prospective" />
      </div>
    </div>

  )
}