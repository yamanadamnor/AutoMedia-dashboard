"use server";

import { prisma } from "@/server/prisma";
import type { Prisma } from "@prisma/client";
import {
  ServiceUpdateInputSchema,
  ServiceCreateInputSchema,
} from "@/data/zodSchemas";

export async function getService(id: number) {
  const service = await prisma.service.findUnique({
    where: { id },
  });
  return service;
}

export async function getServices() {
  const services = await prisma.service.findMany();

  return services;
}

export async function updateService(
  id: number,
  data: Prisma.ServiceUpdateInput,
) {
  const parsed = ServiceUpdateInputSchema.safeParse(data);

  if (!parsed.success) {
    return false;
  }

  await prisma.service.update({
    data,
    where: {
      id: id,
    },
  });
}

export async function addService(data: Prisma.ServiceCreateInput) {
  const parsed = ServiceCreateInputSchema.safeParse(data);

  if (!parsed.success) {
    return false;
  }

  await prisma.service.create({
    data,
  });
}
export async function deleteService(id: number) {
  await prisma.service.delete({
    where: {
      id: id,
    },
  });
}
