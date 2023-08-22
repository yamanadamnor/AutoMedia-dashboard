import * as React from 'react';
import {
  CommandDialog,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandLoading,
} from '@/ui/Command';

import { fetcher } from './utils';
import type { Service } from '@prisma/client';
import useSWR from 'swr';
import Image from 'next/image';

export const CommandMenu = () => {
  const [open, setOpen] = React.useState(false);
  const { data, error, isLoading } = useSWR<Service[], Error>('/api/services', fetcher);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput className="text-white" placeholder="Search services" />
      <CommandList className="text-white">
        <CommandEmpty>No results found.</CommandEmpty>

        {error && <div>failed to load</div>}
        {isLoading && <CommandLoading>Hang on…</CommandLoading>}

        <CommandGroup heading="Services" className="">
          {data?.map((service) => (
            <CommandItem
              key={service.href}
              className="flex items-center gap-x-4  w-full"
              value={service.title}
              onSelect={() => runCommand(() => window.open(service.href, '_blank'))}
            >
              <Image src={service.image} height={25} width={25} alt="Service logo" />
              {service.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
