import * as React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Cog6ToothIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

import {
  CommandDialog,
  CommandList,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "@/ui/Command";
import { cn } from "@/utils/cn";
import { Button } from "@/ui/Button";
import type { Service } from "@prisma/client";
import { ServiceAddDialog, SettingsDialog } from "./ClientComponents";

export const CommandMenu = ({ services }: { services: Service[] }) => {
  const { data: session } = useSession();
  const [open, setOpen] = React.useState(false);
  const [addServiceOpen, setAddServiceOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [pages, setPages] = React.useState<string[]>([]);
  const page = pages[pages.length - 1];

  // Toggle the menu when ⌘K or ctrl+k is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }
        e.preventDefault();
        setOpen((open) => !open);
      } else if (e.key === "Escape" || (e.key === "Backspace" && !search)) {
        // Escape goes to previous page
        // Backspace goes to previous page when search is empty
        setPages((pages) => pages.slice(0, -1));
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [search]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  // TODO: Implement nested pages
  // const addPage = React.useCallback(
  //   (page: string) => {
  //     setPages([...pages, page]);
  //     setSearch("");
  //   },
  //   [pages],
  // );
  //
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="ml-auto mr-10 hidden gap-x-2 bg-service-card px-5 py-2 text-zinc-500 md:flex md:items-center"
      >
        Press <Kbd className="bg-zinc-700">⌘</Kbd>
        <Kbd className="bg-zinc-700">K</Kbd> to search
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          className="py-7 text-white"
          placeholder="Search services"
          value={search}
          onValueChange={setSearch}
        />
        <CommandList className="text-white">
          {/* <CommandEmpty>No results found.</CommandEmpty> */}

          {/* {isLoading && <CommandLoading>Hang on…</CommandLoading>} */}

          {!page && (
            <>
              <CommandGroup heading="Services">
                {services?.map((service) => (
                  <CommandItem
                    key={service.id}
                    className="group flex w-full justify-between rounded-md"
                    value={service.title}
                    onSelect={() =>
                      runCommand(() => window.open(service.href, "_blank"))
                    }
                  >
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={service.image}
                        height={18}
                        width={18}
                        className="grayscale group-aria-[selected=true]:grayscale-0"
                        alt="Service logo"
                      />
                      {service.title}
                    </div>
                    <p className="text-gray-500">Service</p>
                  </CommandItem>
                ))}

                {/* FIX: Nested dialogs */}
                {/* {session?.user.isAdmin && ( */}
                {/*   <CommandItem */}
                {/*     className="group flex w-full justify-between rounded-md" */}
                {/*     onSelect={() => runCommand(() => setAddServiceOpen(true))} */}
                {/*   > */}
                {/*     <ServiceAddDialog */}
                {/*       open={addServiceOpen} */}
                {/*       onOpenChange={setAddServiceOpen} */}
                {/*     > */}
                {/*       <Button className="flex items-center gap-x-4 border-none p-0"> */}
                {/*         <PlusCircleIcon className="text-gray-300" /> */}
                {/*         Add Service */}
                {/*       </Button> */}
                {/*     </ServiceAddDialog> */}
                {/*     <p className="text-gray-500">Service</p> */}
                {/*   </CommandItem> */}
                {/* )} */}
              </CommandGroup>

              {/* <CommandSeparator className="bg-zinc-700" /> */}

              {/* TODO: Implement theme support */}
              {/* <CommandGroup heading="Theme"> */}
              {/*   <CommandItem */}
              {/*     className="group flex w-full justify-between rounded-md" */}
              {/*     onSelect={() => runCommand()} */}
              {/*   > */}
              {/*     <div className="flex items-center gap-x-4"> */}
              {/*       <MoonIcon className="text-gray-300" /> */}
              {/*       Dark */}
              {/*     </div> */}
              {/*     <p className="text-gray-500">Theme</p> */}
              {/*   </CommandItem> */}
              {/**/}
              {/*   <CommandItem */}
              {/*     className="group flex w-full justify-between rounded-md" */}
              {/*     onSelect={() => runCommand()} */}
              {/*   > */}
              {/*     <div className="flex items-center gap-x-4"> */}
              {/*       <SunIcon className="text-gray-300" /> */}
              {/*       Light */}
              {/*     </div> */}
              {/*     <p className="text-gray-500">Theme</p> */}
              {/*   </CommandItem> */}
              {/* </CommandGroup> */}

              {/* {session?.user.isAdmin && ( */}
              {/*   <> */}
              {/*     <CommandSeparator className="bg-zinc-700" /> */}
              {/*     <CommandGroup heading="Settings"> */}
              {/*       <CommandItem */}
              {/*         className="group flex w-full justify-between rounded-md" */}
              {/*         asChild */}
              {/*       > */}
              {/*         <div> */}
              {/*           <SettingsDialog */}
              {/*             open={settingsOpen} */}
              {/*             onOpenChange={setSettingsOpen} */}
              {/*           > */}
              {/*             <Button */}
              {/*               className="flex items-center gap-x-4 border-none p-0" */}
              {/*               onKeyDown={(e) => */}
              {/*                 e.key === "Enter" */}
              {/*                   ? runCommand(() => setSettingsOpen(true)) */}
              {/*                   : "" */}
              {/*               } */}
              {/*               // onSelect={() => */}
              {/*               //   runCommand(() => setSettingsOpen(true)) */}
              {/*               // } */}
              {/*               // onClick={(e) => e.preventDefault()} */}
              {/*             > */}
              {/*               <Cog6ToothIcon className="text-gray-300" /> */}
              {/*               Settings */}
              {/*             </Button> */}
              {/*           </SettingsDialog> */}
              {/*           <p className="text-gray-500">Setting</p> */}
              {/*         </div> */}
              {/*       </CommandItem> */}
              {/*     </CommandGroup> */}
              {/*   </> */}
              {/* )} */}
            </>
          )}
        </CommandList>
        <div className="mt-4 flex justify-between border-t border-t-zinc-700 px-3 py-4">
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
    </>
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
