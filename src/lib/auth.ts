import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";

export const auth = betterAuth({
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: "custom",
					clientId: process.env.AUTH_CLIENT_ID!,
					clientSecret: process.env.AUTH_CLIENT_SECRET!,
					discoveryUrl: `${process.env.AUTH_ISSUER!}/.well-known/openid-configuration`,
					pkce: true,
					scopes: ["openid", "profile", "groups", "email"],
				},
			],
		}),
	],
});
