import { useSession, signIn, signOut } from "next-auth/react";
import type { IBtnKind } from "./interfaces";

export default function LoginBtn() {
  const { data: session, status } = useSession();

  const Btn = ({ message, onClick }: IBtnKind) => {
    return (
      <button
        className="box-border rounded-md border-2 px-6 py-1 text-white 
          transition-all duration-150 ease-in-out hover:bg-white hover:text-black"
        onClick={onClick}
      >
        {message}
      </button>
    );
  };

  if (session && status === "authenticated") {
    return (
      <>
        <Btn message="Sign out" onClick={() => signOut()} />
      </>
    );
  }
  return (
    <>
      <Btn message="Sign in" onClick={() => signIn("custom")} />
    </>
  );
}
