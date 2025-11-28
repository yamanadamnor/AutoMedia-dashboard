import {
	EllipsisVerticalIcon,
	PencilIcon,
	TrashIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import * as React from "react";
import toast from "react-hot-toast";
import { deleteService } from "@/data/service";
import type { Service } from "@/prisma/generated/client";
import { Button } from "@/ui/Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import { ServiceAddDialog } from "./ServiceAddDialog";

type ServiceCardProps = {
	service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
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
			className="group relative flex select-none flex-col items-start justify-between rounded-xl border border-gray-700 bg-service-card px-5 py-2 text-white backdrop-blur-xs transition duration-300 ease-in-out hover:shadow-service"
			href={service.href}
		>
			<div className="flex w-full items-center">
				<div className="flex w-full items-center justify-start">
					<div className="mr-4 flex w-7 p-0 grayscale transition duration-300 ease-in-out group-hover:grayscale-0">
						<Image
							width={200}
							height={200}
							className="object-contain"
							src={service.image}
							alt=""
						/>
					</div>
					<h2 className="my-4 overflow-x-hidden truncate text-xl font-bold text-service-desc-light">
						{service.title}
					</h2>
				</div>
				{session?.user.isAdmin && <EditDropdown service={service} />}
			</div>

			<p className="my-3 text-service-desc-dark transition duration-300 ease-in-out group-hover:text-service-desc-light">
				{service.description}
			</p>
		</motion.a>
	);
};

export default ServiceCard;
export type EditDropdownProps = Pick<
	Service,
	"id" | "title" | "description" | "image" | "href"
>;

function EditDropdown({ service }: ServiceCardProps) {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();

	const handleDelete = async (e: React.MouseEvent) => {
		e.preventDefault();
		await deleteService(service.id);
		setOpen(false);
		router.refresh();
		toast.success(`${service.title} was deleted`);
	};

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger className="group absolute right-0 top-0 mr-3 mt-3 rounded-lg border border-transparent py-2 transition-all ease-in-out hover:border-zinc-700 hover:bg-[#2b2c3a] hover:shadow-lg">
				<EllipsisVerticalIcon className="w-7 text-zinc-500 group-hover:text-gray-200" />
			</DropdownMenuTrigger>

			<DropdownMenuPortal>
				<DropdownMenuContent
					align="end"
					className="bg-service-card-solid text-white"
				>
					<ServiceAddDialog service={service}>
						<DropdownMenuItem
							className="w-full p-0"
							onSelect={(e) => {
								e.preventDefault();
							}}
						>
							<Button className="flex w-full items-center gap-x-2 rounded-xs border-none px-2 py-1.5">
								<PencilIcon className="h-3 w-3" />
								Edit
							</Button>
						</DropdownMenuItem>
					</ServiceAddDialog>

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
