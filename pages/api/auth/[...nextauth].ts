// TODO: Fix profile type
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    {
      id: 'custom',
      name: 'custom',
      clientId: process.env.CUSTOM_OIDC_CLIENT_ID ?? '',
      clientSecret: process.env.CUSTOM_OIDC_CLIENT_SECRET ?? '',
      type: 'oauth',
      wellKnown: process.env.CUSTOM_OIDC_WELLKNOWN ?? '',
      idToken: true,
      authorization: { params: { scope: 'openid profile groups email' } },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          email_verified: profile.email_verified,
          groups: profile.groups,
        };
      },
    },
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/require-await
    async session({ session, token }) {
      session.user.isAdmin = token.isAdmin;
      return session;
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    async jwt({ token, profile }) {
      if (profile) {
        token.isAdmin = profile.groups.includes('admin');
      }

      return token;
    },
  },
};

export default NextAuth(authOptions);
