import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/ui/Button";

export const AuthButton = () => {
	const { data: session } = useSession();

	return (
		<>
			{session && <Button onClick={() => signOut()}>Sign Out</Button>}
			<Button onClick={() => signIn("custom")}>Sign In</Button>
		</>
	);
};
