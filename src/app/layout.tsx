import "./global.css";
import Image from "next/image";
import { Footer } from "@/components/ClientComponents";
import { TailwindBreakpointIndicator } from "@/components/TailwindBreakpointIndicator";

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-base h-full">
			<body className="relative">
				<TailwindBreakpointIndicator />
				<div className="pointer-events-none absolute inset-x-0 left-0 top-0 flex w-full select-none justify-center overflow-hidden h-1/3">
					<div className="flex w-432 flex-none justify-end">
						<Image src="/img/1-dark.png" fill alt="Background" />
					</div>
				</div>

				{children}
				<div className="relative bottom-0 col-start-1 -col-end-1 grid w-full p-8">
					<div className="absolute bottom-0 left-0 w-full rounded-t-2xl bg-service-card"></div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
