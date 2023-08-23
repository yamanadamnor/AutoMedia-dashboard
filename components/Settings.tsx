"use client";
import * as React from "react";
import useSWR from "swr";

import { fetcher } from "./utils";
import { SettingsForm } from "@/components/SettingsForm";
import type { SettingsFormValues } from "@/components/SettingsForm";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/ui/Dialog";
import { useAtom } from "jotai";
import { settingsModalAtom } from "./states";

export const Settings = () => {
  const [open, setOpen] = useAtom(settingsModalAtom);
  const { data, error, isLoading } = useSWR<SettingsFormValues, Error>(
    "/api/settings",
    fetcher,
  );

  return (
    <>
      {error && <h3 className="text-white">Error fetching settings</h3>}
      {isLoading && <h3 className="text-white">Loading...</h3>}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-service-card text-white backdrop-blur-lg">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Here you can edit all the settings :D
            </DialogDescription>
          </DialogHeader>
          <SettingsForm settings={data} />
          <DialogFooter>
            <button
              form="settingsForm"
              className="mt-5 box-border rounded-md border-2 px-6 py-1 text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black"
              type="submit"
            >
              Submit
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
