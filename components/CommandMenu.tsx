import * as React from "react";
import {
  CommandDialog,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandLoading,
} from "@/ui/Command";

import type { Service } from "@prisma/client";
import useSWR from "swr";
import Image from "next/image";
import { Cog6ToothIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  serviceModalAtom,
  commandMenuAtom,
  settingsModalAtom,
import { useAtom, useSetAtom } from "jotai";
import { useSession } from "next-auth/react";
} from "@/components/states";
import { cn, fetcher } from "@/utils";

export const CommandMenu = () => {
  const { data: session } = useSession();
  const [commandMenuOpen, setCommandMenuOpen] = useAtom(commandMenuAtom);
  const setSettingsModalOpen = useSetAtom(settingsModalAtom);
  const setAddServiceModal = useSetAtom(AddServiceModalAtom);
  const {
    data: services,
    error: servicesError,
    isLoading: isServicesLoading,
  } = useSWR<Service[], Error>("/api/services", fetcher);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandMenuOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setCommandMenuOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={commandMenuOpen} onOpenChange={setCommandMenuOpen}>
      <CommandInput className="py-7 text-white" placeholder="Search services" />
      <CommandList className="text-white">
        <CommandEmpty>No results found.</CommandEmpty>

        {servicesError && <div>failed to load</div>}
        {isServicesLoading && <CommandLoading>Hang on…</CommandLoading>}

        <CommandGroup heading="Services">
          {services?.map((service) => (
            <CommandItem
              key={service.href}
              className="group flex w-full justify-between rounded-xl"
              value={service.title}
              onSelect={() =>
                runCommand(() => window.open(service.href, "_blank"))
              }
            >
              <div className="flex items-center gap-x-4 ">
                <Image
                  src={service.image}
                  height={18}
                  width={18}
                  className="grayscale group-aria-[selected]:grayscale-0"
                  alt="Service logo"
                />
                {service.title}
              </div>
              <p className="text-gray-500">Service</p>
            </CommandItem>
          ))}
          {session?.user.isAdmin && (
            <CommandItem
              className="group flex w-full justify-between rounded-xl"
              onSelect={() => runCommand(() => setAddServiceModal(true))}
            >
              <div className="flex items-center gap-x-4 ">
                <PlusCircleIcon className="text-gray-300" />
                Add Service
              </div>
              <p className="text-gray-500">Service</p>
            </CommandItem>
          )}
        </CommandGroup>

        {session?.user.isAdmin && (
          <CommandGroup heading="Settings">
            <CommandItem
              className="group flex w-full justify-between rounded-xl"
              onSelect={() => runCommand(() => setSettingsModalOpen(true))}
            >
              <div className="flex items-center gap-x-4 ">
                <Cog6ToothIcon className="text-gray-300" />
                Settings
              </div>
              <p className="text-gray-500">Setting</p>
            </CommandItem>
          </CommandGroup>
        )}
      </CommandList>
      <div className="mt-4 flex justify-between border-t border-t-gray-700 px-3 py-4">
        <div className="flex items-center gap-x-5">
          <Image
            src="/img/logo-white.svg"
            className="opacity-60"
            height={15}
            width={15}
            alt="Logo"
          />
        </div>
        <span className="flex items-center gap-x-3 text-sm text-gray-400">
          Open in new tab
          <Kbd>↵</Kbd>
        </span>
      </div>
    </CommandDialog>
  );
};

export const Kbd = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <kbd
      className={cn(
        "flex h-5 w-5 items-center justify-center rounded bg-gray-700 px-3 py-3 text-gray-400",
        className,
      )}
    >
      {children}
    </kbd>
  );
};
