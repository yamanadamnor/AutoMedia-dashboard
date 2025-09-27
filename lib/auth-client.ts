// Simplified client-side auth for better-auth
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : "",
});

// Basic mock session interface
export interface Session {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

// Mock session hook for development
export const useSession = () => {
  return {
    data: null,
    isPending: false,
  };
};