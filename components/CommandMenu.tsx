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

import { fetcher } from "./utils";
import type { Service } from "@prisma/client";
import useSWR from "swr";
import Image from "next/image";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export const CommandMenu = () => {
  const [open, setOpen] = React.useState(false);
  const { data, error, isLoading } = useSWR<Service[], Error>(
    "/api/services",
    fetcher,
  );

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput className="py-7 text-white" placeholder="Search services" />
      <CommandList className="text-white">
        <CommandEmpty>No results found.</CommandEmpty>

        {error && <div>failed to load</div>}
        {isLoading && <CommandLoading>Hang on…</CommandLoading>}

        <CommandGroup heading="Services">
          {data?.map((service) => (
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
        </CommandGroup>
        <CommandGroup heading="Settings">
          <CommandItem className="group flex w-full justify-between rounded-xl">
            <div className="flex items-center gap-x-4 ">
              <Cog6ToothIcon className="text-gray-300" />
              Coming soon
            </div>
            <p className="text-gray-500">Setting</p>
          </CommandItem>
        </CommandGroup>
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

export const Kbd = ({ children }: { children: React.ReactNode }) => {
  return (
    <kbd className="flex h-5 w-5 items-center justify-center rounded bg-gray-700 px-3 py-3 text-gray-400">
      {children}
    </kbd>
  );
};
