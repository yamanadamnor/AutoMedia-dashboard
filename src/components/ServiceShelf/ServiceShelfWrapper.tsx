import { ServiceShelf } from "@/components/ServiceShelf/ServiceShelf";
import { getServices } from "@/data/service";

export async function ServiceShelfWrapper() {
	const services = await getServices();
	return <ServiceShelf services={services} />;
}
