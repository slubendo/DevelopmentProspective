import ProfileBlock from "../molecules/profileblock"
import ProfileAvatar from "../molecules/profileavatar"

export default function ProfileUserCard() {

  return (
    <div className="flex flex-row items-center w-full p-4 md:w-7/8 m-2">
      <ProfileAvatar
        src="https://upload.wikimedia.org/wikipedia/commons/3/32/A_photograph_of_an_astronaut_riding_a_horse_2022-08-28.png"
        href="http://www.google.ca"
        alt="Horse Icon" />
      <div className="flex px-4">
        <ProfileBlock user="Gary" subtitle="Student at BCIT" />
      </div>
    </div>

  )
}