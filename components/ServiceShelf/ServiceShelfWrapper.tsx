import { getServices } from "@/data/service";
import { ServiceShelf } from "@/components/ServiceShelf/ServiceShelf";

export async function ServiceShelfWrapper() {
  const services = await getServices();
  return <ServiceShelf services={services} />;
}
