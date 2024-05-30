import { auth } from "@/auth";

export default async function Protected() {
  const session = await auth();

  if (!session) {
    return (
      <div>
        <h1 className="text-6xl text-white">Not authorized</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-6xl text-white">Authorized</h1>
    </div>
  );
}
