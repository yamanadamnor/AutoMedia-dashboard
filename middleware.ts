import { auth, isAdmin } from "@/lib/auth";

export default auth(function middleware(req) {
  // No good way of matching methods, so this will have to do for now

  // Match both /api/service/[id] and /api/services
  if (
    req.nextUrl.pathname.startsWith("/api/service") &&
    ["POST", "PUT", "DELETE"].includes(req.method) &&
    !isAdmin(req.auth?.user)
  ) {
    return Response.json(
      { success: false, message: "Unauthorized user" },
      { status: 401 },
    );
  }
});
