import type { Service } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Prisma } from "@prisma/client";

import { prisma } from "@/server/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const serviceData = req.body as Prisma.ServiceCreateInput;

    const savedService = await prisma.service.create({
      data: serviceData,
    });

    return res.json(savedService);
  } else if (req.method === "GET") {
    const services: Service[] = await prisma.service.findMany();

    res.json(services);
  } else {
    res.status(405).send({ message: "Method not allowed" });
  }
}
