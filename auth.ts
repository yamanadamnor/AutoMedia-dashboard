import type { DefaultSession } from "next-auth";
import NextAuth from "next-auth";
import type { OIDCConfig } from "next-auth/providers";

declare module "next-auth" {
	interface User {
		email_verified: boolean;
		roles: string[];
	}

	interface Profile {
		roles: string[];
	}
	/**
	 * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			/** The user's postal address. */
			email_verified: boolean;
			roles: string[];
			isAdmin: boolean;
			/**
			 * By default, TypeScript merges new interface properties and overwrites existing ones.
			 * In this case, the default session user properties will be overwritten,
			 * with the new ones defined above. To keep the default session user properties,
			 * you need to add them back into the newly declared interface.
			 */
		} & DefaultSession["user"];
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		roles: string[];
		email_verified: boolean;
		isAdmin: boolean;
	}
}

interface CustomProfile {
	sub: string;
	name: string;
	email: string;
	email_verified: boolean;
	groups: string[];
}

const customProvider = {
	id: "custom", // signIn("custom") and will be part of the callback URL
	name: "ACS", // optional, used on the default login page as the button text.
	type: "oidc", // or "oauth" for OAuth 2 providers
	issuer: process.env.AUTH_ISSUER, // to infer the .well-known/openid-configuration URL
	clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
	clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
	authorization: { params: { scope: "openid profile groups email" } },
	checks: ["pkce", "state"],
	idToken: false,
	client: {
		token_endpoint_auth_method: "client_secret_post",
	},
	profile(profile) {
		return {
			id: profile.sub,
			name: profile.name,
			email: profile.email,
			email_verified: profile.email_verified,
			roles: profile.groups,
		};
	},
} satisfies OIDCConfig<CustomProfile>;

export const { auth, handlers, signIn, signOut } = NextAuth({
	providers: [customProvider],
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.name = user.name;
				token.email = user.email;
				token.email_verified = user.email_verified;
				token.roles = user.roles;
				token.isAdmin = user.roles.includes("admin");
			}
			return token;
		},
		session({ session, token }) {
			session.user.roles = token.roles;
			session.user.email_verified = token.email_verified;
			session.user.isAdmin = token.isAdmin;
			return session;
		},
	},
});
