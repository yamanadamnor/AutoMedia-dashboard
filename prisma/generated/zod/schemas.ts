/**
 * Prisma Zod Generator - Single File (inlined)
 * Auto-generated. Do not edit.
 */

import * as z from 'zod';
import type { Prisma } from '../client';
// File: TransactionIsolationLevel.schema.ts

export const TransactionIsolationLevelSchema = z.enum(['Serializable'])

export type TransactionIsolationLevel = z.infer<typeof TransactionIsolationLevelSchema>;

// File: ServiceScalarFieldEnum.schema.ts

export const ServiceScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'image', 'href', 'createdAt'])

export type ServiceScalarFieldEnum = z.infer<typeof ServiceScalarFieldEnumSchema>;

// File: SettingScalarFieldEnum.schema.ts

export const SettingScalarFieldEnumSchema = z.enum(['key', 'value'])

export type SettingScalarFieldEnum = z.infer<typeof SettingScalarFieldEnumSchema>;

// File: SortOrder.schema.ts

export const SortOrderSchema = z.enum(['asc', 'desc'])

export type SortOrder = z.infer<typeof SortOrderSchema>;

// File: ServiceWhereInput.schema.ts

const servicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ServiceWhereInputObjectSchema), z.lazy(() => ServiceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServiceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServiceWhereInputObjectSchema), z.lazy(() => ServiceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  image: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  href: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ServiceWhereInputObjectSchema: z.ZodType<Prisma.ServiceWhereInput> = servicewhereinputSchema as unknown as z.ZodType<Prisma.ServiceWhereInput>;
export const ServiceWhereInputObjectZodSchema = servicewhereinputSchema;


// File: ServiceOrderByWithRelationInput.schema.ts
const __makeSchema_ServiceOrderByWithRelationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  href: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ServiceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ServiceOrderByWithRelationInput> = __makeSchema_ServiceOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.ServiceOrderByWithRelationInput>;
export const ServiceOrderByWithRelationInputObjectZodSchema = __makeSchema_ServiceOrderByWithRelationInput_schema();


// File: ServiceWhereUniqueInput.schema.ts
const __makeSchema_ServiceWhereUniqueInput_schema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ServiceWhereUniqueInputObjectSchema: z.ZodType<Prisma.ServiceWhereUniqueInput> = __makeSchema_ServiceWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.ServiceWhereUniqueInput>;
export const ServiceWhereUniqueInputObjectZodSchema = __makeSchema_ServiceWhereUniqueInput_schema();


// File: SettingWhereInput.schema.ts

const settingwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SettingWhereInputObjectSchema), z.lazy(() => SettingWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SettingWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettingWhereInputObjectSchema), z.lazy(() => SettingWhereInputObjectSchema).array()]).optional(),
  key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const SettingWhereInputObjectSchema: z.ZodType<Prisma.SettingWhereInput> = settingwhereinputSchema as unknown as z.ZodType<Prisma.SettingWhereInput>;
export const SettingWhereInputObjectZodSchema = settingwhereinputSchema;


// File: SettingOrderByWithRelationInput.schema.ts
const __makeSchema_SettingOrderByWithRelationInput_schema = () => z.object({
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional()
}).strict();
export const SettingOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SettingOrderByWithRelationInput> = __makeSchema_SettingOrderByWithRelationInput_schema() as unknown as z.ZodType<Prisma.SettingOrderByWithRelationInput>;
export const SettingOrderByWithRelationInputObjectZodSchema = __makeSchema_SettingOrderByWithRelationInput_schema();


// File: SettingWhereUniqueInput.schema.ts
const __makeSchema_SettingWhereUniqueInput_schema = () => z.object({
  key: z.string().optional()
}).strict();
export const SettingWhereUniqueInputObjectSchema: z.ZodType<Prisma.SettingWhereUniqueInput> = __makeSchema_SettingWhereUniqueInput_schema() as unknown as z.ZodType<Prisma.SettingWhereUniqueInput>;
export const SettingWhereUniqueInputObjectZodSchema = __makeSchema_SettingWhereUniqueInput_schema();


// File: ServiceUncheckedCreateInput.schema.ts
const __makeSchema_ServiceUncheckedCreateInput_schema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ServiceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ServiceUncheckedCreateInput> = __makeSchema_ServiceUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.ServiceUncheckedCreateInput>;
export const ServiceUncheckedCreateInputObjectZodSchema = __makeSchema_ServiceUncheckedCreateInput_schema();


// File: ServiceUpdateInput.schema.ts
const __makeSchema_ServiceUpdateInput_schema = () => z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  href: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ServiceUpdateInputObjectSchema: z.ZodType<Prisma.ServiceUpdateInput> = __makeSchema_ServiceUpdateInput_schema() as unknown as z.ZodType<Prisma.ServiceUpdateInput>;
export const ServiceUpdateInputObjectZodSchema = __makeSchema_ServiceUpdateInput_schema();


// File: ServiceUncheckedUpdateInput.schema.ts
const __makeSchema_ServiceUncheckedUpdateInput_schema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  href: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ServiceUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ServiceUncheckedUpdateInput> = __makeSchema_ServiceUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.ServiceUncheckedUpdateInput>;
export const ServiceUncheckedUpdateInputObjectZodSchema = __makeSchema_ServiceUncheckedUpdateInput_schema();


// File: ServiceCreateManyInput.schema.ts
const __makeSchema_ServiceCreateManyInput_schema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ServiceCreateManyInputObjectSchema: z.ZodType<Prisma.ServiceCreateManyInput> = __makeSchema_ServiceCreateManyInput_schema() as unknown as z.ZodType<Prisma.ServiceCreateManyInput>;
export const ServiceCreateManyInputObjectZodSchema = __makeSchema_ServiceCreateManyInput_schema();


// File: ServiceUncheckedUpdateManyInput.schema.ts
const __makeSchema_ServiceUncheckedUpdateManyInput_schema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  href: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ServiceUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.ServiceUncheckedUpdateManyInput> = __makeSchema_ServiceUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.ServiceUncheckedUpdateManyInput>;
export const ServiceUncheckedUpdateManyInputObjectZodSchema = __makeSchema_ServiceUncheckedUpdateManyInput_schema();


// File: SettingUncheckedCreateInput.schema.ts
const __makeSchema_SettingUncheckedCreateInput_schema = () => z.object({
  key: z.string(),
  value: z.string()
}).strict();
export const SettingUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SettingUncheckedCreateInput> = __makeSchema_SettingUncheckedCreateInput_schema() as unknown as z.ZodType<Prisma.SettingUncheckedCreateInput>;
export const SettingUncheckedCreateInputObjectZodSchema = __makeSchema_SettingUncheckedCreateInput_schema();


// File: SettingUpdateInput.schema.ts
const __makeSchema_SettingUpdateInput_schema = () => z.object({
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SettingUpdateInputObjectSchema: z.ZodType<Prisma.SettingUpdateInput> = __makeSchema_SettingUpdateInput_schema() as unknown as z.ZodType<Prisma.SettingUpdateInput>;
export const SettingUpdateInputObjectZodSchema = __makeSchema_SettingUpdateInput_schema();


// File: SettingUncheckedUpdateInput.schema.ts
const __makeSchema_SettingUncheckedUpdateInput_schema = () => z.object({
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SettingUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SettingUncheckedUpdateInput> = __makeSchema_SettingUncheckedUpdateInput_schema() as unknown as z.ZodType<Prisma.SettingUncheckedUpdateInput>;
export const SettingUncheckedUpdateInputObjectZodSchema = __makeSchema_SettingUncheckedUpdateInput_schema();


// File: SettingCreateManyInput.schema.ts
const __makeSchema_SettingCreateManyInput_schema = () => z.object({
  key: z.string(),
  value: z.string()
}).strict();
export const SettingCreateManyInputObjectSchema: z.ZodType<Prisma.SettingCreateManyInput> = __makeSchema_SettingCreateManyInput_schema() as unknown as z.ZodType<Prisma.SettingCreateManyInput>;
export const SettingCreateManyInputObjectZodSchema = __makeSchema_SettingCreateManyInput_schema();


// File: SettingUncheckedUpdateManyInput.schema.ts
const __makeSchema_SettingUncheckedUpdateManyInput_schema = () => z.object({
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SettingUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.SettingUncheckedUpdateManyInput> = __makeSchema_SettingUncheckedUpdateManyInput_schema() as unknown as z.ZodType<Prisma.SettingUncheckedUpdateManyInput>;
export const SettingUncheckedUpdateManyInputObjectZodSchema = __makeSchema_SettingUncheckedUpdateManyInput_schema();


// File: IntFilter.schema.ts
const __makeSchema_IntFilter_schema = () => z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict();
export const IntFilterObjectSchema: z.ZodType<Prisma.IntFilter> = __makeSchema_IntFilter_schema() as unknown as z.ZodType<Prisma.IntFilter>;
export const IntFilterObjectZodSchema = __makeSchema_IntFilter_schema();


// File: StringFilter.schema.ts
const __makeSchema_StringFilter_schema = () => z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)]).optional()
}).strict();
export const StringFilterObjectSchema: z.ZodType<Prisma.StringFilter> = __makeSchema_StringFilter_schema() as unknown as z.ZodType<Prisma.StringFilter>;
export const StringFilterObjectZodSchema = __makeSchema_StringFilter_schema();


// File: DateTimeFilter.schema.ts
const __makeSchema_DateTimeFilter_schema = () => z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional()
}).strict();
export const DateTimeFilterObjectSchema: z.ZodType<Prisma.DateTimeFilter> = __makeSchema_DateTimeFilter_schema() as unknown as z.ZodType<Prisma.DateTimeFilter>;
export const DateTimeFilterObjectZodSchema = __makeSchema_DateTimeFilter_schema();


// File: IntWithAggregatesFilter.schema.ts
const __makeSchema_IntWithAggregatesFilter_schema = () => z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntFilterObjectSchema).optional()
}).strict();
export const IntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = __makeSchema_IntWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.IntWithAggregatesFilter>;
export const IntWithAggregatesFilterObjectZodSchema = __makeSchema_IntWithAggregatesFilter_schema();


// File: StringWithAggregatesFilter.schema.ts
const __makeSchema_StringWithAggregatesFilter_schema = () => z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();
export const StringWithAggregatesFilterObjectSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = __makeSchema_StringWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.StringWithAggregatesFilter>;
export const StringWithAggregatesFilterObjectZodSchema = __makeSchema_StringWithAggregatesFilter_schema();


// File: DateTimeWithAggregatesFilter.schema.ts
const __makeSchema_DateTimeWithAggregatesFilter_schema = () => z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional()
}).strict();
export const DateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = __makeSchema_DateTimeWithAggregatesFilter_schema() as unknown as z.ZodType<Prisma.DateTimeWithAggregatesFilter>;
export const DateTimeWithAggregatesFilterObjectZodSchema = __makeSchema_DateTimeWithAggregatesFilter_schema();


// File: StringFieldUpdateOperationsInput.schema.ts
const __makeSchema_StringFieldUpdateOperationsInput_schema = () => z.object({
  set: z.string().optional()
}).strict();
export const StringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = __makeSchema_StringFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.StringFieldUpdateOperationsInput>;
export const StringFieldUpdateOperationsInputObjectZodSchema = __makeSchema_StringFieldUpdateOperationsInput_schema();


// File: DateTimeFieldUpdateOperationsInput.schema.ts
const __makeSchema_DateTimeFieldUpdateOperationsInput_schema = () => z.object({
  set: z.coerce.date().optional()
}).strict();
export const DateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = __makeSchema_DateTimeFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput>;
export const DateTimeFieldUpdateOperationsInputObjectZodSchema = __makeSchema_DateTimeFieldUpdateOperationsInput_schema();


// File: IntFieldUpdateOperationsInput.schema.ts
const __makeSchema_IntFieldUpdateOperationsInput_schema = () => z.object({
  set: z.number().int().optional(),
  increment: z.number().int().optional(),
  decrement: z.number().int().optional(),
  multiply: z.number().int().optional(),
  divide: z.number().int().optional()
}).strict();
export const IntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = __makeSchema_IntFieldUpdateOperationsInput_schema() as unknown as z.ZodType<Prisma.IntFieldUpdateOperationsInput>;
export const IntFieldUpdateOperationsInputObjectZodSchema = __makeSchema_IntFieldUpdateOperationsInput_schema();


// File: NestedIntFilter.schema.ts


const nestedintfilterSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntFilterObjectSchema)]).optional()
}).strict();
export const NestedIntFilterObjectSchema: z.ZodType<Prisma.NestedIntFilter> = nestedintfilterSchema as unknown as z.ZodType<Prisma.NestedIntFilter>;
export const NestedIntFilterObjectZodSchema = nestedintfilterSchema;


// File: NestedStringFilter.schema.ts


const nestedstringfilterSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterObjectSchema)]).optional()
}).strict();
export const NestedStringFilterObjectSchema: z.ZodType<Prisma.NestedStringFilter> = nestedstringfilterSchema as unknown as z.ZodType<Prisma.NestedStringFilter>;
export const NestedStringFilterObjectZodSchema = nestedstringfilterSchema;


// File: NestedDateTimeFilter.schema.ts


const nesteddatetimefilterSchema = z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterObjectSchema)]).optional()
}).strict();
export const NestedDateTimeFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeFilter> = nesteddatetimefilterSchema as unknown as z.ZodType<Prisma.NestedDateTimeFilter>;
export const NestedDateTimeFilterObjectZodSchema = nesteddatetimefilterSchema;


// File: NestedIntWithAggregatesFilter.schema.ts

const nestedintwithaggregatesfilterSchema = z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(() => NestedIntWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntFilterObjectSchema).optional()
}).strict();
export const NestedIntWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = nestedintwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedIntWithAggregatesFilter>;
export const NestedIntWithAggregatesFilterObjectZodSchema = nestedintwithaggregatesfilterSchema;


// File: NestedFloatFilter.schema.ts


const nestedfloatfilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatFilterObjectSchema)]).optional()
}).strict();
export const NestedFloatFilterObjectSchema: z.ZodType<Prisma.NestedFloatFilter> = nestedfloatfilterSchema as unknown as z.ZodType<Prisma.NestedFloatFilter>;
export const NestedFloatFilterObjectZodSchema = nestedfloatfilterSchema;


// File: NestedStringWithAggregatesFilter.schema.ts

const nestedstringwithaggregatesfilterSchema = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringFilterObjectSchema).optional()
}).strict();
export const NestedStringWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = nestedstringwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedStringWithAggregatesFilter>;
export const NestedStringWithAggregatesFilterObjectZodSchema = nestedstringwithaggregatesfilterSchema;


// File: NestedDateTimeWithAggregatesFilter.schema.ts

const nesteddatetimewithaggregatesfilterSchema = z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional()
}).strict();
export const NestedDateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = nesteddatetimewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter>;
export const NestedDateTimeWithAggregatesFilterObjectZodSchema = nesteddatetimewithaggregatesfilterSchema;


// File: findUniqueService.schema.ts

export const ServiceFindUniqueSchema: z.ZodType<Prisma.ServiceFindUniqueArgs> = z.object({   where: ServiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServiceFindUniqueArgs>;

export const ServiceFindUniqueZodSchema = z.object({   where: ServiceWhereUniqueInputObjectSchema }).strict();

// File: findFirstService.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceFindFirstSelectSchema__findFirstService_schema: z.ZodType<Prisma.ServiceSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    image: z.boolean().optional(),
    href: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ServiceSelect>;

export const ServiceFindFirstSelectZodSchema__findFirstService_schema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    image: z.boolean().optional(),
    href: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const ServiceFindFirstSchema: z.ZodType<Prisma.ServiceFindFirstArgs> = z.object({ select: ServiceFindFirstSelectSchema__findFirstService_schema.optional(),  orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServiceScalarFieldEnumSchema, ServiceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ServiceFindFirstArgs>;

export const ServiceFindFirstZodSchema = z.object({ select: ServiceFindFirstSelectSchema__findFirstService_schema.optional(),  orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServiceScalarFieldEnumSchema, ServiceScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManyService.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceFindManySelectSchema__findManyService_schema: z.ZodType<Prisma.ServiceSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    image: z.boolean().optional(),
    href: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ServiceSelect>;

export const ServiceFindManySelectZodSchema__findManyService_schema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    image: z.boolean().optional(),
    href: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const ServiceFindManySchema: z.ZodType<Prisma.ServiceFindManyArgs> = z.object({ select: ServiceFindManySelectSchema__findManyService_schema.optional(),  orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServiceScalarFieldEnumSchema, ServiceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ServiceFindManyArgs>;

export const ServiceFindManyZodSchema = z.object({ select: ServiceFindManySelectSchema__findManyService_schema.optional(),  orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServiceScalarFieldEnumSchema, ServiceScalarFieldEnumSchema.array()]).optional() }).strict();

// File: createOneService.schema.ts

export const ServiceCreateOneSchema: z.ZodType<Prisma.ServiceCreateArgs> = z.object({   data: ServiceUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServiceCreateArgs>;

export const ServiceCreateOneZodSchema = z.object({   data: ServiceUncheckedCreateInputObjectSchema }).strict();

// File: deleteOneService.schema.ts

export const ServiceDeleteOneSchema: z.ZodType<Prisma.ServiceDeleteArgs> = z.object({   where: ServiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServiceDeleteArgs>;

export const ServiceDeleteOneZodSchema = z.object({   where: ServiceWhereUniqueInputObjectSchema }).strict();

// File: updateOneService.schema.ts

export const ServiceUpdateOneSchema: z.ZodType<Prisma.ServiceUpdateArgs> = z.object({   data: z.union([ServiceUpdateInputObjectSchema, ServiceUncheckedUpdateInputObjectSchema]), where: ServiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServiceUpdateArgs>;

export const ServiceUpdateOneZodSchema = z.object({   data: z.union([ServiceUpdateInputObjectSchema, ServiceUncheckedUpdateInputObjectSchema]), where: ServiceWhereUniqueInputObjectSchema }).strict();

// File: findUniqueSetting.schema.ts

export const SettingFindUniqueSchema: z.ZodType<Prisma.SettingFindUniqueArgs> = z.object({   where: SettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingFindUniqueArgs>;

export const SettingFindUniqueZodSchema = z.object({   where: SettingWhereUniqueInputObjectSchema }).strict();

// File: findFirstSetting.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettingFindFirstSelectSchema__findFirstSetting_schema: z.ZodType<Prisma.SettingSelect> = z.object({
    key: z.boolean().optional(),
    value: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SettingSelect>;

export const SettingFindFirstSelectZodSchema__findFirstSetting_schema = z.object({
    key: z.boolean().optional(),
    value: z.boolean().optional()
  }).strict();

export const SettingFindFirstSchema: z.ZodType<Prisma.SettingFindFirstArgs> = z.object({ select: SettingFindFirstSelectSchema__findFirstSetting_schema.optional(),  orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettingScalarFieldEnumSchema, SettingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SettingFindFirstArgs>;

export const SettingFindFirstZodSchema = z.object({ select: SettingFindFirstSelectSchema__findFirstSetting_schema.optional(),  orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettingScalarFieldEnumSchema, SettingScalarFieldEnumSchema.array()]).optional() }).strict();

// File: findManySetting.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettingFindManySelectSchema__findManySetting_schema: z.ZodType<Prisma.SettingSelect> = z.object({
    key: z.boolean().optional(),
    value: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SettingSelect>;

export const SettingFindManySelectZodSchema__findManySetting_schema = z.object({
    key: z.boolean().optional(),
    value: z.boolean().optional()
  }).strict();

export const SettingFindManySchema: z.ZodType<Prisma.SettingFindManyArgs> = z.object({ select: SettingFindManySelectSchema__findManySetting_schema.optional(),  orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettingScalarFieldEnumSchema, SettingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SettingFindManyArgs>;

export const SettingFindManyZodSchema = z.object({ select: SettingFindManySelectSchema__findManySetting_schema.optional(),  orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettingScalarFieldEnumSchema, SettingScalarFieldEnumSchema.array()]).optional() }).strict();

// File: createOneSetting.schema.ts

export const SettingCreateOneSchema: z.ZodType<Prisma.SettingCreateArgs> = z.object({   data: SettingUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingCreateArgs>;

export const SettingCreateOneZodSchema = z.object({   data: SettingUncheckedCreateInputObjectSchema }).strict();

// File: deleteOneSetting.schema.ts

export const SettingDeleteOneSchema: z.ZodType<Prisma.SettingDeleteArgs> = z.object({   where: SettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingDeleteArgs>;

export const SettingDeleteOneZodSchema = z.object({   where: SettingWhereUniqueInputObjectSchema }).strict();

// File: updateOneSetting.schema.ts

export const SettingUpdateOneSchema: z.ZodType<Prisma.SettingUpdateArgs> = z.object({   data: z.union([SettingUpdateInputObjectSchema, SettingUncheckedUpdateInputObjectSchema]), where: SettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingUpdateArgs>;

export const SettingUpdateOneZodSchema = z.object({   data: z.union([SettingUpdateInputObjectSchema, SettingUncheckedUpdateInputObjectSchema]), where: SettingWhereUniqueInputObjectSchema }).strict();

// File: index.ts


// File: Service.schema.ts

export const ServiceSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.date(),
});

export type ServiceType = z.infer<typeof ServiceSchema>;


// File: Setting.schema.ts

export const SettingSchema = z.object({
  key: z.string(),
  value: z.string(),
});

export type SettingType = z.infer<typeof SettingSchema>;

