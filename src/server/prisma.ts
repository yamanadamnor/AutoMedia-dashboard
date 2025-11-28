import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/client";

const globalForPrisma = global as unknown as {
	prisma: PrismaClient;
};

const adapter = new PrismaBetterSqlite3({
	url: "file:../config/dashboard.db",
});

const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		adapter,
	});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma };
