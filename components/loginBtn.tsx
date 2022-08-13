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
      <button className="bg-gray-700 px-4 py-2 rounded-lg" onClick={btnKind.clickHandler}>
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
