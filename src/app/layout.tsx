import "./global.css";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import {
	CalendarWidget,
	Footer,
	Header,
	Hero,
} from "@/components/ClientComponents";
import { TailwindBreakpointIndicator } from "@/components/TailwindBreakpointIndicator";
import { getServices } from "@/data/service";
import { cn } from "@/utils/cn";

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const services = await getServices();

	return (
		<html lang="en" className="bg-base h-full">
			<body className="relative">
				<TailwindBreakpointIndicator />
				<div className="pointer-events-none absolute inset-x-0 left-0 top-0 flex w-full select-none justify-center overflow-hidden h-1/3">
					<div className="flex w-432 flex-none justify-end">
						<Image src="/img/1-dark.png" fill alt="Background" />
					</div>
				</div>
				<SessionProvider>
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
							<Header services={services} />
						</div>

						<div className="lg:row-end-full col-start-2 -col-end-2 w-full lg:col-end-4 xl:col-end-3">
							<Hero />
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
							{children}
						</main>

						<div className="relative bottom-0 col-start-1 -col-end-1 grid w-full p-8">
							<div className="absolute bottom-0 left-0 w-full rounded-t-2xl bg-service-card"></div>
							<Footer />
						</div>
					</div>
				</SessionProvider>
			</body>
		</html>
	);
}
