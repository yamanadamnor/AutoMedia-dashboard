/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';
/* eslint-enable @typescript-eslint/no-unused-vars */

declare module 'next-auth' {
  interface Profile {
    groups: string[];
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
