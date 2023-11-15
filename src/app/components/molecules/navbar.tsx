import Link from 'next/link';
import DashboardIcon from '../atoms/navbar/nav-dashboard-icon';
// import ChatIcon from '../atoms/navbar/nav-chat-icon';
import ProfileIcon from '../atoms/navbar/nav-profile-icon';
import SeeScholarshipsIcon from '../atoms/navbar/nav-scholarships-icon';

export default function Navbar() {
  return (
    <div className="fixed bottom-0 md:top-0 h-[80px] items-center w-full bg-white shadow-lg">
      <ul className="flex items-center p-4 justify-evenly">

        {/* Dashboard */}
        <Link href="/">
          <li>
            <DashboardIcon />
          </li>
        </Link>

        {/* Chat
        <Link href="/chat">
          <li>
            <ChatIcon />
          </li>
        </Link> */}

        {/* Reviews */}
        <Link href="/scholarship">
          <li>
            <SeeScholarshipsIcon />
          </li>
        </Link>

        {/* Profile */}
        <Link href="/profile">
          <li>
            <ProfileIcon />
          </li>
        </Link>
      </ul>
    </div>
  );
}
