import NextAuth, { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    {
      id: 'authelia',
      name: 'Authelia',
      clientId: process.env.AUTHELIA_OIDC_CLIENT_ID || '',
      clientSecret: process.env.AUTHELIA_OIDC_CLIENT_SECRET || '',
      type: 'oauth',
      wellKnown: 'https://auth.adamnor.com/.well-known/openid-configuration',
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
    async session({ session, token }) {
      session.user.isAdmin = token.isAdmin;
      return session;
    },
    async jwt({ token, profile }) {
      if (profile) {
        token.isAdmin = profile.groups.includes('admin');
      }

      return token;
    },
  },
};

export default NextAuth(authOptions);
