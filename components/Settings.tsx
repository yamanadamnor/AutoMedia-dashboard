"use client";
import * as React from "react";
import useSWR from "swr";

import { fetcher } from "@/utils";
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
import { Button } from "@/ui/Button";

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
            <Button className="mt-4" form="settingsForm" type="submit">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
