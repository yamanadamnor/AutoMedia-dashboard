import NextAuth from 'next-auth';

export default NextAuth({
  secret: process.env.SECRET,
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
});
