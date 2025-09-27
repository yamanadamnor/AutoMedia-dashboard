// Simplified better-auth configuration to avoid dependency conflicts
import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins/admin";

export const auth = betterAuth({
  database: {
    provider: "sqlite",
    url: ":memory:",
  },
  emailAndPassword: {
    enabled: false,
  },
  plugins: [
    admin({
      defaultRole: "user",
      adminRoles: ["admin"],
    }),
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
  },
  // Simplified configuration without complex OAuth setup for now
});

// Helper function to check if user is admin
export const isAdmin = (user: any): boolean => {
  return user?.role === "admin";
};

// Basic types
export interface Session {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
  };
}