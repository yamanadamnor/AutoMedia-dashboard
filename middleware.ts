import { withAuth } from 'next-auth/middleware';

export default withAuth({
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    authorized({ req, token }) {
      // No good way of matching methods, so this will have to do for now

      // Match both /api/service/[id] and /api/services
      if (
        req.nextUrl.pathname.startsWith('/api/service') &&
        ['POST', 'PUT', 'DELETE'].includes(req.method)
      ) {
        return !!token?.isAdmin;
      }

      return true;
    },
  },
});
