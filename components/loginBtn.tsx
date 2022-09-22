import { useSession, signIn, signOut, SignInResponse } from 'next-auth/react';

interface IBtnKind {
  type: 'signin' | 'signout';
  clickHandler: () => Promise<SignInResponse> | Promise<undefined>;
  message: string;
}

export default function LoginBtn() {
  const { data: session, status } = useSession();

  const Btn = (btnKind: IBtnKind) => {
    return (
      <button
        className={`box-border py-0 px-8 border-2 rounded-md hover:bg-white hover:text-black transition-all 
          duration-150 ease-in-out rounded" onClick={btnKind.clickHandler`}
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
      <Btn type="signin" message="Sign in" clickHandler={() => signIn()} />
    </>
  );
}
