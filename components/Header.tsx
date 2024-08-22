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
  ArrowLeftEndOnRectangleIcon,
  ArrowPathIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import { Avatar, AvatarFallback } from "@/ui/Avatar";
import { AuthButton } from "@/components/AuthButton";
import type { Service } from "@prisma/client";
import { SettingsDialog } from "./SettingsDialog";
import { Button } from "@/ui/Button";
import { CommandMenu } from "./CommandMenu";

export const getInitials = (name: string, limit = 3) => {
  const initials = name
    .split(" ", limit)
    .map((el) => el[0])
    .join("");
  return initials;
};

type HeaderProps = {
  services: Service[];
};
export function Header({ services }: HeaderProps) {
  const { data: session, status } = useSession();
  return (
    <nav className="flex w-full items-center justify-between">
      <Image
        src="/img/logo-white.svg"
        className="select-none opacity-80"
        width={35}
        height={35}
        alt="logo"
      />
      <CommandMenu services={services} />
      {session?.user ? (
        <ProfileButton />
      ) : (
        <>
          {status === "loading" ? (
            <Avatar className="h-12 w-12 bg-[#2f2038] text-white">
              <AvatarFallback>
                <ArrowPathIcon className="size-5 animate-spin" />
              </AvatarFallback>
            </Avatar>
          ) : (
            <AuthButton />
          )}
        </>
      )}
    </nav>
  );
}

const ProfileButton = () => {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-12 w-12 bg-[#2f2038] text-white transition-all duration-200 ease-in-out hover:bg-gray-700">
          <AvatarFallback>
            {getInitials(session?.user?.name ?? "AA")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          align="end"
          className="min-w-[220px] rounded-md bg-[#252634] p-[5px] text-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
        >
          <h2 className="py-5 text-center text-xl">{session?.user?.name}</h2>
          {session?.user?.isAdmin && (
            <SettingsDialog>
              <DropdownMenuItem
                className="p-0"
                onSelect={(e) => e.preventDefault()}
              >
                <Button className="flex w-full gap-x-4 border-none px-2 py-1.5">
                  <Cog6ToothIcon className="h-5 w-5" />
                  Settings
                </Button>
              </DropdownMenuItem>
            </SettingsDialog>
          )}
          <DropdownMenuItem
            className="gap-x-4 text-red-300 hover:bg-[#2b2c3a]"
            onClick={() => signOut()}
          >
            <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
