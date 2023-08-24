/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth';
import type { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Profile {
    groups: string[];
    email_verified: boolean;
  }

  interface Session {
    user: {
      isAdmin?: bool;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    isAdmin?: bool;
  }
}
