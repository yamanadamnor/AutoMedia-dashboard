"use client";
import * as React from "react";

import { SettingsForm } from "@/components/SettingsForm";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/ui/Dialog";
import { Button } from "@/ui/Button";
import type * as DialogPrimitive from "@radix-ui/react-dialog";
import { useSettings } from "@/utils/useSettings";

type SettingsDialogProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;
export const SettingsDialog = ({ children, ...props }: SettingsDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const { data, error } = useSettings();

  return (
    <>
      {error && <h3 className="text-white">Error fetching settings</h3>}
      <Dialog open={open} onOpenChange={setOpen} {...props}>
        <DialogTrigger asChild>{children}</DialogTrigger>
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
