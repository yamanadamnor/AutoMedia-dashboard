import { getServices } from "@/data/service";
import { Header } from "./Header";

export async function HeaderWrapper() {
	const services = await getServices();
	return <Header services={services} />;
}
