"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { service } from "@/db/schema";
import {
	type ServiceInsert,
	type ServiceUpdate,
	serviceUpdateSchema,
} from "@/db/zod-schemas";

export async function getService(id: number) {
	const result = await db.select().from(service).where(eq(service.id, id));
	return result[0];
}

export async function getServices() {
	return await db.select().from(service);
}

export async function updateService(id: number, data: ServiceUpdate) {
	const parsed = serviceUpdateSchema.safeParse(data);
	if (!parsed) {
		return false;
	}
	await db.update(service).set(data).where(eq(service.id, id));
}

export async function addService(data: ServiceInsert) {
	const parsed = serviceUpdateSchema.safeParse(data);
	if (!parsed) {
		return false;
	}

	await db.insert(service).values(data);
}
export async function deleteService(id: number) {
	await db.delete(service).where(eq(service.id, id));
}
