import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-zod";
import type z from "zod";
import { service, setting } from "./schema";

export const serviceSelectSchema = createSelectSchema(service);
export const serviceInsertSchema = createInsertSchema(service);
export const serviceUpdateSchema = createUpdateSchema(service);
export type ServiceSelect = z.infer<typeof serviceSelectSchema>;
export type ServiceInsert = z.infer<typeof serviceInsertSchema>;
export type ServiceUpdate = z.infer<typeof serviceUpdateSchema>;

export const settingSelectSchema = createSelectSchema(setting);
export const settingInsertSchema = createInsertSchema(setting);
export const settingUpdateSchema = createUpdateSchema(setting);
export type SettingSelect = z.infer<typeof settingSelectSchema>;
export type SettingInsert = z.infer<typeof settingInsertSchema>;
export type SettingUpdate = z.infer<typeof settingUpdateSchema>;
