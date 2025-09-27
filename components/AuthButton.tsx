import { Button } from "@/ui/Button";
import { useSession, signIn, signOut } from "@/lib/auth-client";

export const AuthButton = () => {
  const { data: session } = useSession();

  const handleSignIn = () => {
    signIn({ provider: "custom" });
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      {session && <Button onClick={handleSignOut}>Sign Out</Button>}
      <Button onClick={handleSignIn}>Sign In</Button>
    </>
  );
};
