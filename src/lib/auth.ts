// biome-ignore-all lint/style/noNonNullAssertion: environment variables are set
import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";

export const auth = betterAuth({
	secret: process.env.AUTH_SECRET || process.env.BETTER_AUTH_SECRET || "secret",
	baseURL:
		process.env.AUTH_URL ||
		process.env.BETTER_AUTH_URL ||
		"http://localhost:3344",
	advanced: {
		cookiePrefix: "automedia-dashboard",
	},
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 7 * 24 * 60 * 60, // 7 days cache duration
			strategy: "jwt", // can be "jwt" or "compact"
			refreshCache: true, // Enable stateless refresh
			version: "1", // Change the version to invalidate all sessions
		},
	},
	account: {
		storeStateStrategy: "cookie",
		storeAccountCookie: true, // Store account data after OAuth flow in a cookie (useful for database-less flows)
	},
	user: {
		additionalFields: {
			isAdmin: {
				type: "boolean",
				input: false,
			},
		},
	},
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: "custom",
					clientId: process.env.AUTH_CLIENT_ID!,
					clientSecret: process.env.AUTH_CLIENT_SECRET!,
					discoveryUrl: process.env.AUTH_ISSUER,
					pkce: true,
					scopes: ["openid", "profile", "groups", "email"],
					mapProfileToUser: async (profile) => {
						profile.isAdmin = profile.groups.includes("acs_admin") as boolean;
						return profile;
					},
				},
			],
		}),
	],
});
