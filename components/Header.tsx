import Image from 'next/image';
import LoginBtn from './loginBtn';
import { signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback } from '@/ui/Avatar';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/ui/DropdownMenu';
import { ArrowLeftOnRectangleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export const getInitials = (name: string, limit = 3) => {
  const initials = name
    .split(' ', limit)
    .map((el) => el[0])
    .join('');
  return initials;
};

export const Header = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="w-12">
        <Image src="/img/logo-white.svg" width={400} height={400} alt="logo" />
      </div>
      {session?.user ? <ProfileButton /> : <LoginBtn />}
    </>
  );
};

const ProfileButton = () => {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar
          className="w-14 h-14 text-white
          hover:bg-gray-700 
          transition-all duration-200 ease-in-out bg-[#2f2038]"
        >
          <AvatarFallback>{getInitials(session?.user?.name ?? 'AA')}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          align="end"
          className="min-w-[220px] bg-[#252634] rounded-md p-[5px] text-white
          shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] 
          will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade 
          data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade 
          data-[side=left]:animate-slideRightAndFade"
        >
          <h2 className="text-xl text-center py-5">{session?.user?.name}</h2>
          {/* TODO: Implement settings modal */}
          <DropdownMenuItem className="hover:bg-[#2b2c3a] gap-x-4" disabled={true}>
            <Cog6ToothIcon className="w-5 h-5" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:bg-[#2b2c3a] gap-x-4 text-red-400"
            onClick={() => signOut()}
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
