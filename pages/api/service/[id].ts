import type { NextApiRequest, NextApiResponse } from "next";
import type { Prisma } from "@/prisma/generated/client";
import { prisma } from "../../../server/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const {
		query: { id },
		method,
	} = req;

	if (!id) return;

	// Get Service
	if (method === "GET") {
		try {
			const service = await prisma.service.findFirst({
				where: {
					id: Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10),
				},
			});
			return res.status(200).send(service);
		} catch {
			return res.status(500).send("Could not delete service");
		}
		// Delete Service
	} else if (method === "DELETE") {
		try {
			await prisma.service.delete({
				where: {
					id: Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10),
				},
			});
			return res.status(204).end();
		} catch {
			return res.status(500).send("Could not delete service");
		}

		// Update Service
	} else if (method === "PUT") {
		try {
			const data = req.body as Prisma.ServiceCreateInput;
			const updatedUser = await prisma.service.update({
				data,
				where: {
					id: Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10),
				},
			});
			return res.json(updatedUser);
		} catch {
			return res.status(500).send("Could not edit service, try again");
		}
	}

	res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
	res.status(405).end(`Method ${method} Not Allowed`);
}
