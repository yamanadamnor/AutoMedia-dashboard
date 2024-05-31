import { auth } from "@/auth";
import { ServiceShelf, ServiceAddDialog } from "@/components/ClientComponents";
export default async function BetaPage() {
  const session = await auth();
  return (
    <>
      <div className="flex-gap-48 flex items-center">
        {session?.user.isAdmin && (
          <div className="my-4 text-white">
            <ServiceAddDialog />
          </div>
        )}
      </div>
      <ServiceShelf />
    </>
  );
}
