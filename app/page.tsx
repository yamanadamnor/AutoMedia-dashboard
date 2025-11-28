import { Suspense } from "react";
import { auth } from "@/auth";
import { ServiceAddDialog } from "@/components/ClientComponents";
import { ServiceCardSkeletons } from "@/components/ServiceShelf/ServiceCardSkeletons";
import { ServiceShelfWrapper } from "@/components/ServiceShelf/ServiceShelfWrapper";
import { Button } from "@/ui/Button";

export default async function Page() {
	const session = await auth();

	return (
		<>
			<div className="flex items-center">
				{session?.user.isAdmin && (
					<div className="text-white">
						<ServiceAddDialog>
							<Button>Add Service</Button>
						</ServiceAddDialog>
					</div>
				)}
			</div>
			<Suspense fallback={<ServiceCardSkeletons />}>
				<ServiceShelfWrapper />
			</Suspense>
		</>
	);
}
