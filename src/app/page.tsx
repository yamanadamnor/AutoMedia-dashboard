import { headers } from "next/headers";
import { Suspense } from "react";
import { ServiceAddDialog } from "@/components/ClientComponents";
import { ServiceCardSkeletons } from "@/components/ServiceShelf/ServiceCardSkeletons";
import { ServiceShelfWrapper } from "@/components/ServiceShelf/ServiceShelfWrapper";
import { auth } from "@/lib/auth";
import { Button } from "@/ui/Button";

export default async function Page() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return "Unauthorized";
	}

	return (
		<>
			<div className="flex items-center">
				<div className="text-white">
					<ServiceAddDialog>
						<Button>Add Service</Button>
					</ServiceAddDialog>
				</div>
			</div>
			<Suspense fallback={<ServiceCardSkeletons />}>
				<ServiceShelfWrapper />
			</Suspense>
		</>
	);
}
