import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import type { IServiceCard } from "@/components/interfaces";
import type { Service } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/ui/DropdownMenu";
import { Button } from "@/ui/Button";
import { deleter, putter } from "@/utils";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/Dialog";
import { ServiceForm } from "@/components/ServiceShelf/ServiceForm";
import type { ServiceFormValues } from "@/components/ServiceShelf/ServiceForm";
import toast from "react-hot-toast";

const ServiceCard = ({ id, title, image, href, description }: IServiceCard) => {
  const { data: session } = useSession();

  const initial = { opacity: 0, y: -40 };

  const animate = {
    opacity: 1,
    y: 0,
    height: "auto",
  };

  const whileHover = {
    y: 0,
    transition: { duration: 0.05 },
  };

  const whileTap = {
    boxShadow: "none",
    transition: { duration: 0.05 },
  };

  const exit = {
    opacity: 0,
    y: -40,
    transition: { duration: 0.01 },
  };

  return (
    <motion.a
      initial={initial}
      animate={animate}
      exit={exit}
      whileTap={whileTap}
      whileHover={whileHover}
      className="group relative flex select-none flex-col items-start justify-between rounded-xl border
        border-gray-700 bg-service-card px-5 py-2 text-white backdrop-blur-sm transition duration-300 ease-in-out hover:shadow-service"
      href={href}
    >
      <div className="flex w-full items-center">
        <div className="flex w-full items-center justify-start">
          <div className="mr-4 flex w-7 p-0 grayscale transition duration-300 ease-in-out group-hover:grayscale-0">
            <Image
              width={200}
              height={200}
              className="object-contain"
              src={image}
              alt=""
            />
          </div>
          <h2 className="my-4 overflow-x-hidden truncate text-xl font-bold text-service-desc-light">
            {title}
          </h2>
        </div>
        {session?.user.isAdmin && (
          <EditDropdown
            id={id}
            title={title}
            description={description}
            image={image}
            href={href}
          />
        )}
      </div>

      <p
        className="my-3 text-service-desc-dark transition duration-300 ease-in-out
        group-hover:text-service-desc-light"
      >
        {description}
      </p>
    </motion.a>
  );
};

export default ServiceCard;
export type EditDropdownProps = Pick<
  Service,
  "id" | "title" | "description" | "image" | "href"
>;

function EditDropdown({
  id,
  title,
  description,
  image,
  href,
}: EditDropdownProps) {
  const [open, setOpen] = React.useState(false);

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    await deleter(`/api/service/${id}`);
    setOpen(false);
    toast.success(`${title} was deleted`);
    toast.success("Deleted");
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="group absolute right-0 top-0 mr-3 mt-3 rounded-lg border border-transparent py-2 transition-all ease-in-out hover:border-zinc-700 hover:border-zinc-700 hover:bg-[#2b2c3a] hover:shadow-lg">
        <EllipsisVerticalIcon className="w-7 text-zinc-500 group-hover:text-gray-200" />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          className="bg-service-card-solid text-white"
        >
          <DropdownMenuItem asChild>
            <ServiceUpdateDialog
              service={{
                id,
                title,
                description,
                image,
                href,
              }}
            />
          </DropdownMenuItem>

          <DropdownMenuItem
            className="flex items-center gap-x-2 text-red-300 hover:bg-[#2b2c3a]"
            onClick={handleDelete}
          >
            <TrashIcon className="h-3 w-3" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}

const ServiceUpdateDialog = ({
  service,
}: {
  service: ServiceFormValues & { id: number };
}) => {
  const handleSubmit = async (values: ServiceFormValues) => {
    try {
      await putter(`/api/service/${service.id}`, values);
      toast.success("Updated settings");
    } catch {
      toast.error("Could not update settings");
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="flex w-full items-center gap-x-2 px-2 py-1 hover:bg-[#2b2c3a]">
        <PencilIcon className="h-3 w-3" />
        Edit
      </DialogTrigger>
      <DialogContent className="bg-service-card text-white backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle>Service</DialogTitle>
        </DialogHeader>
        <ServiceForm service={service} onSubmit={handleSubmit} />
        <DialogFooter className="mt-5">
          <Button form="serviceForm" type="submit">
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
