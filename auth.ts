import NextAuth from "next-auth";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    {
      id: "custom", // signIn("custom") and will be part of the callback URL
      name: "ACS", // optional, used on the default login page as the button text.
      type: "oidc", // or "oauth" for OAuth 2 providers
      issuer: process.env.AUTH_ISSUER, // to infer the .well-known/openid-configuration URL
      clientId: process.env.AUTH_CLIENT_ID, // from the provider's dashboard
      clientSecret: process.env.AUTH_CLIENT_SECRET, // from the provider's dashboard
      authorization: { params: { scope: "openid profile groups email" } },
      checks: ["pkce", "state"],
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          email_verified: profile.email_verified,
          roles: profile.groups,
        };
      },
    },
  ],
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
