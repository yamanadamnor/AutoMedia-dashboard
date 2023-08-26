"use client";
import * as React from "react";
import { useAtom } from "jotai";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
} from "@/ui/Dialog";
import { AddServiceModalAtom } from "@/components/states";
import { Button } from "@/ui/Button";
import { ServiceForm } from "@/components/ServiceShelf/ServiceForm";
import type { ServiceFormValues } from "@/components/ServiceShelf/ServiceForm";

export const ServiceDialog = ({
  trigger,
  service,
}: {
  trigger?: React.ReactNode;
  service?: ServiceFormValues;
}) => {
  const [open, setOpen] = useAtom(AddServiceModalAtom);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ? trigger : <Button type="button">Add service</Button>}
      </DialogTrigger>
      <DialogContent className="bg-service-card text-white backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>Service</DialogTitle>
        </DialogHeader>
        <ServiceForm service={service} />
        <DialogFooter className="mt-5">
          <Button form="serviceForm" type="submit">
            {service ? "Update" : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
