import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
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

import { Avatar, AvatarFallback } from "@/ui/Avatar";
import { AuthButton } from "@/components/AuthButton";
import { commandMenuAtom, settingsModalAtom } from "@/components/states";
import { Kbd } from "@/components/CommandMenu";
import { Button } from "@/ui/Button";

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
      <Image
        src="/img/logo-white.svg"
        className="select-none opacity-80"
        width={35}
        height={35}
        alt="logo"
      />
      <Button
        className="ml-auto mr-10 hidden gap-x-2 bg-service-card px-5 py-2 text-zinc-500 md:flex md:items-center"
        onClick={() => setCommandMenuModal(true)}
      >
        Press <Kbd className="bg-zinc-700">⌘</Kbd>
        <Kbd className="bg-zinc-700">K</Kbd> to search
      </Button>
      {session?.user ? <ProfileButton /> : <AuthButton />}
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
          className="h-12 w-12 bg-[#2f2038]
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
            className="gap-x-4 text-red-300 hover:bg-[#2b2c3a]"
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
