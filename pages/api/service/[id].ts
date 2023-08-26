import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../server/prisma";
import type { Prisma } from "@prisma/client";

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
          id: Array.isArray(id) ? parseInt(id[0]) : parseInt(id),
        },
      });
      return res.status(200).send(service);
    } catch (error) {
      return res.status(500).send("Could not delete service");
    }
    // Delete Service
  } else if (method === "DELETE") {
    try {
      await prisma.service.delete({
        where: {
          id: Array.isArray(id) ? parseInt(id[0]) : parseInt(id),
        },
      });
      return res.status(204);
    } catch (error) {
      return res.status(500).send("Could not delete service");
    }

    // Update Service
  } else if (method === "PUT") {
    try {
      const data = req.body as Prisma.ServiceCreateInput;
      const updatedUser = await prisma.service.update({
        data,
        where: {
          id: Array.isArray(id) ? parseInt(id[0]) : parseInt(id),
        },
      });
      return res.json(updatedUser);
    } catch (error) {
      return res.status(500).send("Could not edit service, try again");
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
