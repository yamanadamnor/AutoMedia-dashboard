import { authClient } from "@/lib/auth-client";
import { Button } from "@/ui/Button";

export const AuthButton = () => {
	const { data: session } = authClient.useSession();

	return (
		<>
			{session && (
				<Button onClick={() => authClient.signOut()}>Sign Out</Button>
			)}
			<Button
				onClick={() =>
					authClient.signIn.oauth2({
						providerId: "custom",
					})
				}
			>
				Sign In
			</Button>
		</>
	);
};
