// Better-auth inspired admin API routes
import { NextRequest } from "next/server";
import { auth, adminAPI, isAdmin } from "@/lib/auth";

// POST /api/admin/set-role - Set user role (admin only)
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    
    if (!session || !isAdmin(session.user)) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { userId, role } = await req.json();
    
    if (!userId || !role) {
      return Response.json(
        { error: "Missing userId or role" },
        { status: 400 }
      );
    }

    // Call the admin API to set user role
    await adminAPI.setUserRole(userId, role);

    return Response.json({ 
      success: true,
      message: `User ${userId} role set to ${role}` 
    });
  } catch (error) {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}