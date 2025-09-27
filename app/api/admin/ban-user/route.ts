// Better-auth admin plugin: Ban user API
import { NextRequest } from "next/server";
import { auth, adminAPI, isAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    
    if (!session || !isAdmin(session.user)) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { userId, reason } = await req.json();
    
    if (!userId) {
      return Response.json(
        { error: "Missing userId" },
        { status: 400 }
      );
    }

    await adminAPI.banUser(userId, reason);

    return Response.json({ 
      success: true,
      message: `User ${userId} has been banned` 
    });
  } catch (error) {
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}