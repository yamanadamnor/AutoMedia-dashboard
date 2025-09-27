import { Button } from "@/ui/Button";
import { authClient } from "@/lib/auth-client";

export const AuthButton = () => {
  const { data: session } = authClient.useSession();

  const handleSignIn = () => {
    authClient.signIn.social({ provider: "custom" });
  };

  const handleSignOut = () => {
    authClient.signOut();
  };

  return (
    <>
      {session && <Button onClick={handleSignOut}>Sign Out</Button>}
      <Button onClick={handleSignIn}>Sign In</Button>
    </>
  );
};
