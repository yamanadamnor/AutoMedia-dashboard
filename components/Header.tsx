import Image from "next/image";
import LoginBtn from "./loginBtn";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback } from "@/ui/Avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import {
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export const getInitials = (name: string, limit = 3) => {
  const initials = name
    .split(" ", limit)
    .map((el) => el[0])
    .join("");
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
          className="h-14 w-14 bg-[#2f2038]
          text-white 
          transition-all duration-200 ease-in-out hover:bg-gray-700"
        >
          <AvatarFallback>
            {getInitials(session?.user?.name ?? "AA")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          align="end"
          className="min-w-[220px] rounded-md bg-[#252634] p-[5px] text-white
          shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] 
          will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade 
          data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade 
          data-[side=top]:animate-slideDownAndFade"
        >
          <h2 className="py-5 text-center text-xl">{session?.user?.name}</h2>
          {/* TODO: Implement settings modal */}
          <DropdownMenuItem
            className="gap-x-4 hover:bg-[#2b2c3a]"
            disabled={true}
          >
            <Cog6ToothIcon className="h-5 w-5" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem
            className="gap-x-4 text-red-400 hover:bg-[#2b2c3a]"
            onClick={() => signOut()}
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
