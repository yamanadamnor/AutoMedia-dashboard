"use client";
import * as React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogDescription,
} from "@/ui/Dialog";
import { Button } from "@/ui/Button";
import { ServiceForm } from "@/components/ServiceShelf/ServiceForm";
import type { Service } from "@prisma/client";
import type * as DialogPrimitive from "@radix-ui/react-dialog";

type ServiceAddDialogProps = {
  service?: Service;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

export const ServiceAddDialog = ({
  service,
  children,
  ...props
}: ServiceAddDialogProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-service-card text-white backdrop-blur-lg">
        <DialogHeader className="flex flex-col gap-y-1">
          <DialogTitle className="text-xl">Service</DialogTitle>
          <DialogDescription>
            {service ? (
              <>
                Update{" "}
                <span className="rounded bg-gray-700 p-0.5 px-2">
                  {service.title}
                </span>
              </>
            ) : (
              "Add new service"
            )}
          </DialogDescription>
        </DialogHeader>
        <ServiceForm service={service} onSubmitCommand={() => setOpen(false)} />
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
