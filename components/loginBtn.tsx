import { useSession, signIn, signOut } from 'next-auth/react';

import type { IBtnKind } from './interfaces';

export default function LoginBtn() {
  const { data: session, status } = useSession();

  const Btn = (btnKind: IBtnKind) => {
    return (
      <button
        className={`box-border py-0 px-8 border-2 h-12 rounded-md hover:bg-white hover:text-black transition-all 
          duration-150 ease-in-out`}
        onClick={btnKind.clickHandler}
      >
        {btnKind.message}
      </button>
    );
  };

  if (session && status === 'authenticated') {
    return (
      <>
        <Btn type="signout" message="Sign out" clickHandler={() => signOut()} />
      </>
    );
  }
  return (
    <>
      <Btn type="signin" message="Sign in" clickHandler={() => signIn("authelia")} />
    </>
  );
}
