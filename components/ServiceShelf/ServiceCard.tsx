import Image from "next/image";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import type { IServiceCard } from "@/components/interfaces";
import { ServiceDialog } from "@/components/ServiceShelf/ServiceDialog";
import type { Service } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/ui/DropdownMenu";
import { Button } from "@/ui/Button";

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
  const { mutate } = useSWRConfig();

  const handleDelete = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/service/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        void mutate("/api/services");
        toast.success(`${title} was deleted`);
      }
    } catch (error) {
      toast.error("Could not delete service");
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const handleEdit = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group absolute right-0 top-0 mr-3 mt-3 rounded-lg border border-transparent py-2 transition-all ease-in-out hover:border-zinc-700 hover:border-zinc-700 hover:bg-[#2b2c3a] hover:shadow-lg">
        <EllipsisVerticalIcon className="w-7 text-zinc-500 group-hover:text-gray-200" />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          className="bg-service-card-solid text-white"
        >
          <DropdownMenuItem onClick={handleEdit} asChild>
            <ServiceDialog
              trigger={
                <Button className="flex w-full items-center gap-x-2 rounded-none border-none p-0 px-2 py-1">
                  <PencilIcon className="h-3 w-3" />
                  Edit
                </Button>
              }
              service={{
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
