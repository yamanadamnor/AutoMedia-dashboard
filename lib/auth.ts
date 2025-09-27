import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins/admin";
import { genericOAuth } from "better-auth/plugins/generic-oauth";

export const auth = betterAuth({
  database: {
    // Using the existing Prisma database setup
    provider: "prisma",
  },
  emailAndPassword: {
    enabled: false, // We don't use email/password auth
  },
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "custom",
          discoveryUrl: process.env.AUTH_ISSUER + "/.well-known/openid-configuration",
          clientId: process.env.AUTH_CLIENT_ID!,
          clientSecret: process.env.AUTH_CLIENT_SECRET!,
          scopes: ["openid", "profile", "groups", "email"],
          pkce: true,
        },
      ],
    }),
    admin({
      defaultRole: "user",
      adminRoles: ["admin"],
    }),
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
      },
    },
  },
  callbacks: {
    async signUp({ user, profile, provider }: any) {
      // Handle the OIDC profile mapping during sign up
      if (provider?.id === "custom" && profile) {
        const groups = profile.groups || [];
        const isAdmin = groups.includes("admin");
        
        return {
          user: {
            ...user,
            role: isAdmin ? "admin" : "user",
            emailVerified: profile.email_verified || false,
          },
        };
      }
      return { user };
    },
  },
});

// Helper function to check if user is admin
export const isAdmin = (user: { role?: string | null } | null | undefined): boolean => {
  return user?.role === "admin";
};

export type Session = typeof auth.$Infer.Session;