import { NextRequest, NextResponse } from "next/server";
import { auth, isAdmin } from "@/lib/auth";

export default async function middleware(req: NextRequest) {
  // No good way of matching methods, so this will have to do for now

  // Match both /api/service/[id] and /api/services
  if (
    req.nextUrl.pathname.startsWith("/api/service") &&
    ["POST", "PUT", "DELETE"].includes(req.method)
  ) {
    try {
      const session = await auth.api.getSession({
        headers: req.headers,
      });

      if (!session || !isAdmin(session.user)) {
        return NextResponse.json(
          { success: false, message: "Unauthorized user" },
          { status: 401 },
        );
      }
    } catch (error) {
      return NextResponse.json(
        { success: false, message: "Unauthorized user" },
        { status: 401 },
      );
    }
  }

  return NextResponse.next();
}
