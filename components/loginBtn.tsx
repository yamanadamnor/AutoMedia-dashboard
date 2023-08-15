import { useSession, signIn, signOut } from 'next-auth/react';
import type { IBtnKind } from './interfaces';

export default function LoginBtn() {
  const { data: session, status } = useSession();

  const Btn = ({ message, onClick }: IBtnKind) => {
    return (
      <button
        className="box-border py-0 px-8 border-2 h-12 rounded-md hover:bg-white hover:text-black transition-all text-white duration-150 ease-in-out"
        onClick={onClick}
      >
        {message}
      </button>
    );
  };

  if (session && status === 'authenticated') {
    return (
      <>
        <Btn message="Sign out" onClick={() => signOut()} />
      </>
    );
  }
  return (
    <>
      <Btn message="Sign in" onClick={() => signIn('authelia')} />
    </>
  );
}
