"use client";
import * as React from "react";
import { useAtom } from "jotai";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
} from "@/ui/Dialog";
import { serviceModalAtom } from "@/components/states";
import { Button } from "@/ui/Button";
import { ServiceForm } from "@/components/ServiceShelf/ServiceForm";
import type { ServiceFormValues } from "@/components/ServiceShelf/ServiceForm";
import { poster } from "@/utils";

export const ServiceAddDialog = () => {
  const [open, setOpen] = useAtom(serviceModalAtom);

  const handleSubmit = async (values: ServiceFormValues) => {
    try {
      await poster("/api/services", values);
      setOpen(false);
      toast.success("Updated settings");
    } catch {
      toast.error("Could not update settings");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button">Add service</Button>
      </DialogTrigger>
      <DialogContent className="bg-service-card text-white backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>Service</DialogTitle>
        </DialogHeader>
        <ServiceForm onSubmit={handleSubmit} />
        <DialogFooter className="mt-5">
          <Button form="serviceForm" type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
ServiceAddDialog.displayName = "Dialog";
