import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { CalendarWidget } from "@/components/ClientComponents";
import { HeaderWrapper } from "@/components/header-wrapper";
import { ServiceCardSkeletons } from "@/components/ServiceShelf/ServiceCardSkeletons";
import { ServiceShelfWrapper } from "@/components/ServiceShelf/ServiceShelfWrapper";
import { cn } from "@/utils/cn";

export default function Page() {
	return (
		<div className="center justify-items-centerr relative z-auto mx-auto grid h-full min-h-screen max-w-8xl grid-cols-app grid-rows-app place-content-start gap-x-6 gap-y-8 text-white lg:gap-x-8">
			<Toaster
				position="top-right"
				toastOptions={{
					success: {
						style: {
							borderRadius: "10px",
							background: "#20202c",
							color: "#fff",
						},
					},
					error: {
						style: {
							borderRadius: "10px",
							background: "#20202c",
							color: "#fff",
						},
					},
				}}
			/>
			<div className="col-span-7 col-start-2 row-span-1 row-start-1 flex h-24 w-full items-center justify-between py-6">
				<HeaderWrapper />
			</div>

			<div className="lg:row-end-full col-start-2 -col-end-2 w-full lg:col-end-4 xl:col-end-3">
				<div className="w-full">
					<CalendarWidget />
				</div>
			</div>

			<main
				className={cn(
					"col-start-2 -col-end-2 flex w-full flex-col gap-y-10",
					"lg:col-span-5 lg:col-start-4 lg:row-start-2",
					"xl:col-span-6 xl:col-start-3",
				)}
			>
				<Suspense fallback={<ServiceCardSkeletons />}>
					<ServiceShelfWrapper />
				</Suspense>
			</main>
		</div>
	);
}
