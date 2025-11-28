import { auth } from "@/auth";

export default auth(function middleware(req) {
	// No good way of matching methods, so this will have to do for now

	// Match both /api/service/[id] and /api/services
	if (
		req.nextUrl.pathname.startsWith("/api/service") &&
		["POST", "PUT", "DELETE"].includes(req.method) &&
		!req.auth?.user.isAdmin
	) {
		return Response.json(
			{ success: false, message: "Unauthorized user" },
			{ status: 401 },
		);
	}
});
