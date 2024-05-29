/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import type { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Profile {
    id: string;
    name: string;
    email: string;
    email_verified: boolean;
    roles: string[];
  }

  interface Session {
    user: {
      roles: string[];
      isAdmin: boolean;
      email_verified: boolean;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    roles: string[];
    isAdmin: boolean;
  }
}
