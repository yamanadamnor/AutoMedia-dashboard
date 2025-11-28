"use client";
import type * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import { ServiceForm } from "@/components/ServiceShelf/ServiceForm";
import type { Service } from "@/generated/client";
import { Button } from "@/ui/Button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/ui/Dialog";

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
								<span className="rounded-sm bg-gray-700 p-0.5 px-2">
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
