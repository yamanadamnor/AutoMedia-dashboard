import { createAuthClient } from "better-auth/react";
import type { Session } from "./auth";

export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : "",
});

export type { Session };

// Helper functions for client-side usage
export const signIn = () => {
  return authClient.signIn.social({ provider: "custom" });
};

export const signOut = () => {
  return authClient.signOut();
};

export const getSession = () => {
  return authClient.getSession();
};