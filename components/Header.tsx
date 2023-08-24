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
import { useSetAtom } from "jotai";
import { commandMenuAtom, settingsModalAtom } from "./states";
import { Kbd } from "@/components/CommandMenu";

export const getInitials = (name: string, limit = 3) => {
  const initials = name
    .split(" ", limit)
    .map((el) => el[0])
    .join("");
  return initials;
};

export const Header = () => {
  const { data: session } = useSession();
  const setCommandMenuModal = useSetAtom(commandMenuAtom);
  return (
    <nav className="flex w-full items-center justify-between">
      <div className="w-12">
        <Image src="/img/logo-white.svg" width={400} height={400} alt="logo" />
      </div>
      <button
        className="ml-auto mr-10 hidden items-center gap-x-2 rounded-full border border-zinc-700 bg-service-card
          px-5 py-2  text-zinc-500 transition-all duration-200
          ease-in-out hover:border-gray-500 hover:text-gray-200 md:flex"
        onClick={() => setCommandMenuModal(true)}
      >
        Press <Kbd className="bg-zinc-700">⌘</Kbd>
        <Kbd className="bg-zinc-700">K</Kbd> to search
      </button>
      {session?.user ? <ProfileButton /> : <LoginBtn />}
    </nav>
  );
};

const ProfileButton = () => {
  const { data: session } = useSession();
  const setSettingsModalOpen = useSetAtom(settingsModalAtom);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar
          className="h-14 w-14 bg-[#2f2038]
            text-white transition-all duration-200 ease-in-out hover:bg-gray-700"
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
          <DropdownMenuItem
            className="gap-x-4 hover:bg-[#2b2c3a]"
            onSelect={() => setSettingsModalOpen(true)}
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
