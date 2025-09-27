// Better-auth admin plugin: List users API
import { NextRequest } from "next/server";
import { auth, adminAPI, isAdmin } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    
    if (!session || !isAdmin(session.user)) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const users = await adminAPI.listUsers();

    return Response.json({ 
      users,
      total: users.length 
    });
  } catch (error) {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}