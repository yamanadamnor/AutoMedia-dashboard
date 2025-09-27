// Better-auth inspired client implementation using NextAuth.js
import { useSession as useNextAuthSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";

// Better-auth style client interface
export const authClient = {
  useSession: () => {
    const { data: session, status } = useNextAuthSession();
    return {
      data: session,
      isPending: status === "loading",
      error: null,
    };
  },
  
  signIn: {
    social: ({ provider }: { provider: string }) => {
      return nextAuthSignIn(provider);
    },
  },
  
  signOut: () => {
    return nextAuthSignOut();
  },
  
  getSession: async () => {
    const { data } = useNextAuthSession();
    return data;
  },
  
  // Better-auth style admin methods (client-side)
  admin: {
    async setRole(userId: string, role: string) {
      const response = await fetch('/api/admin/set-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, role }),
      });
      return response.json();
    },
    
    async banUser(userId: string, reason?: string) {
      const response = await fetch('/api/admin/ban-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, reason }),
      });
      return response.json();
    },
    
    async listUsers() {
      const response = await fetch('/api/admin/list-users');
      return response.json();
    },
  },
};

// Export individual functions for compatibility
export const useSession = authClient.useSession;
export const signIn = authClient.signIn.social;
export const signOut = authClient.signOut;