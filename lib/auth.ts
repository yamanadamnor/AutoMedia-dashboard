// Better-auth inspired implementation with admin plugin patterns
// This preserves the NextAuth.js functionality while implementing better-auth style admin management

import NextAuth from "next-auth";
import type { OIDCConfig } from "next-auth/providers";
import type { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

// Admin plugin inspired interface
interface AdminUser {
  id: string;
  name: string;
  email: string;
  email_verified: boolean;
  role: string;
  isAdmin: boolean;
  banned?: boolean;
  banReason?: string;
  banExpires?: Date;
}

interface AdminSession extends DefaultSession {
  user: AdminUser & DefaultSession["user"];
}

// Better-auth style admin configuration
interface AdminConfig {
  defaultRole: string;
  adminRoles: string[];
  adminUserIds?: string[];
}

const adminConfig: AdminConfig = {
  defaultRole: "user",
  adminRoles: ["admin"],
};

// Better-auth style admin helpers
export const adminHelpers = {
  isAdmin: (user: { role?: string | null } | null | undefined): boolean => {
    if (!user?.role) return false;
    return adminConfig.adminRoles.includes(user.role);
  },
  
  hasPermission: (user: AdminUser | null, permission: string): boolean => {
    if (!user) return false;
    if (adminHelpers.isAdmin(user)) return true;
    // Add more granular permission logic here if needed
    return false;
  },

  setRole: (userId: string, role: string) => {
    // This would interact with your user management system
    // For now, it's a placeholder for the admin plugin functionality
    console.log(`Setting user ${userId} role to ${role}`);
  },

  banUser: (userId: string, reason?: string, expiresIn?: number) => {
    // Admin plugin style user banning
    console.log(`Banning user ${userId}: ${reason}`);
  },

  unbanUser: (userId: string) => {
    // Admin plugin style user unbanning
    console.log(`Unbanning user ${userId}`);
  }
};

// Custom profile interface matching the OIDC provider
interface CustomProfile {
  sub: string;
  name: string;
  email: string;
  email_verified: boolean;
  groups: string[];
}

const customProvider = {
  id: "custom",
  name: "ACS",
  type: "oidc",
  issuer: process.env.AUTH_ISSUER!,
  clientId: process.env.AUTH_CLIENT_ID!,
  clientSecret: process.env.AUTH_CLIENT_SECRET!,
  authorization: { params: { scope: "openid profile groups email" } },
  checks: ["pkce", "state"],
  idToken: false,
  client: {
    token_endpoint_auth_method: "client_secret_post",
  },
  profile(profile: CustomProfile) {
    const groups = profile.groups || [];
    const role = groups.includes("admin") ? "admin" : adminConfig.defaultRole;
    
    return {
      id: profile.sub,
      name: profile.name,
      email: profile.email,
      email_verified: profile.email_verified,
      role,
      isAdmin: adminConfig.adminRoles.includes(role),
      banned: false, // Default values for admin plugin fields
      banReason: null,
      banExpires: null,
    };
  },
} satisfies OIDCConfig<CustomProfile>;

// Enhanced NextAuth configuration with better-auth admin patterns
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [customProvider],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.email_verified = user.email_verified;
        token.role = user.role;
        token.isAdmin = adminHelpers.isAdmin(user as AdminUser);
        token.banned = (user as AdminUser).banned;
        token.banReason = (user as AdminUser).banReason;
        token.banExpires = (user as AdminUser).banExpires;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email_verified = token.email_verified as boolean;
      session.user.role = token.role as string;
      session.user.isAdmin = token.isAdmin as boolean;
      session.user.banned = token.banned as boolean;
      session.user.banReason = token.banReason as string;
      session.user.banExpires = token.banExpires as Date;
      return session;
    },
  },
  pages: {
    error: '/auth/error',
  },
});

// Type declarations for better-auth style admin functionality
declare module "next-auth" {
  interface User extends AdminUser {}
  
  interface Profile {
    groups: string[];
  }
  
  interface Session extends AdminSession {}
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    email_verified: boolean;
    isAdmin: boolean;
    banned?: boolean;
    banReason?: string;
    banExpires?: Date;
  }
}

// Better-auth style admin API (can be extended to match better-auth admin plugin API)
export const adminAPI = {
  async setUserRole(userId: string, role: string) {
    // Implementation for setting user roles
    return adminHelpers.setRole(userId, role);
  },
  
  async banUser(userId: string, reason?: string, expiresIn?: number) {
    // Implementation for banning users
    return adminHelpers.banUser(userId, reason, expiresIn);
  },
  
  async unbanUser(userId: string) {
    // Implementation for unbanning users
    return adminHelpers.unbanUser(userId);
  },
  
  async listUsers() {
    // Implementation for listing users (would integrate with your user store)
    return [];
  }
};

// Export admin helpers for use throughout the application
export { adminHelpers as admin };
export const isAdmin = adminHelpers.isAdmin;