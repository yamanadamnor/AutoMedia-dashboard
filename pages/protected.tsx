import { useSession } from 'next-auth/react';

function Protected() {
  const { status } = useSession();

  if (status === 'unauthenticated') {
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

export default Protected;

Protected.auth = true;
