/**
 * Prisma Zod Generator - Single File (inlined)
 * Auto-generated. Do not edit.
 */

import * as z from 'zod';
import type { Prisma } from '../../prisma/generated/client';
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


// File: ServiceOrderByWithAggregationInput.schema.ts
const __makeSchema_ServiceOrderByWithAggregationInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  href: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ServiceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ServiceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ServiceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ServiceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ServiceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ServiceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ServiceOrderByWithAggregationInput> = __makeSchema_ServiceOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.ServiceOrderByWithAggregationInput>;
export const ServiceOrderByWithAggregationInputObjectZodSchema = __makeSchema_ServiceOrderByWithAggregationInput_schema();


// File: ServiceScalarWhereWithAggregatesInput.schema.ts

const servicescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ServiceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ServiceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServiceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServiceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ServiceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  image: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  href: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ServiceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ServiceScalarWhereWithAggregatesInput> = servicescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ServiceScalarWhereWithAggregatesInput>;
export const ServiceScalarWhereWithAggregatesInputObjectZodSchema = servicescalarwherewithaggregatesinputSchema;


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


// File: SettingOrderByWithAggregationInput.schema.ts
const __makeSchema_SettingOrderByWithAggregationInput_schema = () => z.object({
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  _count: z.lazy(() => SettingCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SettingMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SettingMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SettingOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SettingOrderByWithAggregationInput> = __makeSchema_SettingOrderByWithAggregationInput_schema() as unknown as z.ZodType<Prisma.SettingOrderByWithAggregationInput>;
export const SettingOrderByWithAggregationInputObjectZodSchema = __makeSchema_SettingOrderByWithAggregationInput_schema();


// File: SettingScalarWhereWithAggregatesInput.schema.ts

const settingscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SettingScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SettingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SettingScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettingScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SettingScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const SettingScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SettingScalarWhereWithAggregatesInput> = settingscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SettingScalarWhereWithAggregatesInput>;
export const SettingScalarWhereWithAggregatesInputObjectZodSchema = settingscalarwherewithaggregatesinputSchema;


// File: ServiceCreateInput.schema.ts
const __makeSchema_ServiceCreateInput_schema = () => z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ServiceCreateInputObjectSchema: z.ZodType<Prisma.ServiceCreateInput> = __makeSchema_ServiceCreateInput_schema() as unknown as z.ZodType<Prisma.ServiceCreateInput>;
export const ServiceCreateInputObjectZodSchema = __makeSchema_ServiceCreateInput_schema();


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


// File: ServiceUpdateManyMutationInput.schema.ts
const __makeSchema_ServiceUpdateManyMutationInput_schema = () => z.object({
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  image: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  href: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ServiceUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ServiceUpdateManyMutationInput> = __makeSchema_ServiceUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.ServiceUpdateManyMutationInput>;
export const ServiceUpdateManyMutationInputObjectZodSchema = __makeSchema_ServiceUpdateManyMutationInput_schema();


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


// File: SettingCreateInput.schema.ts
const __makeSchema_SettingCreateInput_schema = () => z.object({
  key: z.string(),
  value: z.string()
}).strict();
export const SettingCreateInputObjectSchema: z.ZodType<Prisma.SettingCreateInput> = __makeSchema_SettingCreateInput_schema() as unknown as z.ZodType<Prisma.SettingCreateInput>;
export const SettingCreateInputObjectZodSchema = __makeSchema_SettingCreateInput_schema();


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


// File: SettingUpdateManyMutationInput.schema.ts
const __makeSchema_SettingUpdateManyMutationInput_schema = () => z.object({
  key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SettingUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.SettingUpdateManyMutationInput> = __makeSchema_SettingUpdateManyMutationInput_schema() as unknown as z.ZodType<Prisma.SettingUpdateManyMutationInput>;
export const SettingUpdateManyMutationInputObjectZodSchema = __makeSchema_SettingUpdateManyMutationInput_schema();


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


// File: ServiceCountOrderByAggregateInput.schema.ts
const __makeSchema_ServiceCountOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  href: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ServiceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCountOrderByAggregateInput> = __makeSchema_ServiceCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ServiceCountOrderByAggregateInput>;
export const ServiceCountOrderByAggregateInputObjectZodSchema = __makeSchema_ServiceCountOrderByAggregateInput_schema();


// File: ServiceAvgOrderByAggregateInput.schema.ts
const __makeSchema_ServiceAvgOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const ServiceAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceAvgOrderByAggregateInput> = __makeSchema_ServiceAvgOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ServiceAvgOrderByAggregateInput>;
export const ServiceAvgOrderByAggregateInputObjectZodSchema = __makeSchema_ServiceAvgOrderByAggregateInput_schema();


// File: ServiceMaxOrderByAggregateInput.schema.ts
const __makeSchema_ServiceMaxOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  href: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ServiceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceMaxOrderByAggregateInput> = __makeSchema_ServiceMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ServiceMaxOrderByAggregateInput>;
export const ServiceMaxOrderByAggregateInputObjectZodSchema = __makeSchema_ServiceMaxOrderByAggregateInput_schema();


// File: ServiceMinOrderByAggregateInput.schema.ts
const __makeSchema_ServiceMinOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  href: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const ServiceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceMinOrderByAggregateInput> = __makeSchema_ServiceMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ServiceMinOrderByAggregateInput>;
export const ServiceMinOrderByAggregateInputObjectZodSchema = __makeSchema_ServiceMinOrderByAggregateInput_schema();


// File: ServiceSumOrderByAggregateInput.schema.ts
const __makeSchema_ServiceSumOrderByAggregateInput_schema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const ServiceSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServiceSumOrderByAggregateInput> = __makeSchema_ServiceSumOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.ServiceSumOrderByAggregateInput>;
export const ServiceSumOrderByAggregateInputObjectZodSchema = __makeSchema_ServiceSumOrderByAggregateInput_schema();


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


// File: SettingCountOrderByAggregateInput.schema.ts
const __makeSchema_SettingCountOrderByAggregateInput_schema = () => z.object({
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional()
}).strict();
export const SettingCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SettingCountOrderByAggregateInput> = __makeSchema_SettingCountOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SettingCountOrderByAggregateInput>;
export const SettingCountOrderByAggregateInputObjectZodSchema = __makeSchema_SettingCountOrderByAggregateInput_schema();


// File: SettingMaxOrderByAggregateInput.schema.ts
const __makeSchema_SettingMaxOrderByAggregateInput_schema = () => z.object({
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional()
}).strict();
export const SettingMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SettingMaxOrderByAggregateInput> = __makeSchema_SettingMaxOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SettingMaxOrderByAggregateInput>;
export const SettingMaxOrderByAggregateInputObjectZodSchema = __makeSchema_SettingMaxOrderByAggregateInput_schema();


// File: SettingMinOrderByAggregateInput.schema.ts
const __makeSchema_SettingMinOrderByAggregateInput_schema = () => z.object({
  key: SortOrderSchema.optional(),
  value: SortOrderSchema.optional()
}).strict();
export const SettingMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SettingMinOrderByAggregateInput> = __makeSchema_SettingMinOrderByAggregateInput_schema() as unknown as z.ZodType<Prisma.SettingMinOrderByAggregateInput>;
export const SettingMinOrderByAggregateInputObjectZodSchema = __makeSchema_SettingMinOrderByAggregateInput_schema();


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


// File: ServiceCountAggregateInput.schema.ts
const __makeSchema_ServiceCountAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  image: z.literal(true).optional(),
  href: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ServiceCountAggregateInputObjectSchema: z.ZodType<Prisma.ServiceCountAggregateInputType> = __makeSchema_ServiceCountAggregateInput_schema() as unknown as z.ZodType<Prisma.ServiceCountAggregateInputType>;
export const ServiceCountAggregateInputObjectZodSchema = __makeSchema_ServiceCountAggregateInput_schema();


// File: ServiceAvgAggregateInput.schema.ts
const __makeSchema_ServiceAvgAggregateInput_schema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const ServiceAvgAggregateInputObjectSchema: z.ZodType<Prisma.ServiceAvgAggregateInputType> = __makeSchema_ServiceAvgAggregateInput_schema() as unknown as z.ZodType<Prisma.ServiceAvgAggregateInputType>;
export const ServiceAvgAggregateInputObjectZodSchema = __makeSchema_ServiceAvgAggregateInput_schema();


// File: ServiceSumAggregateInput.schema.ts
const __makeSchema_ServiceSumAggregateInput_schema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const ServiceSumAggregateInputObjectSchema: z.ZodType<Prisma.ServiceSumAggregateInputType> = __makeSchema_ServiceSumAggregateInput_schema() as unknown as z.ZodType<Prisma.ServiceSumAggregateInputType>;
export const ServiceSumAggregateInputObjectZodSchema = __makeSchema_ServiceSumAggregateInput_schema();


// File: ServiceMinAggregateInput.schema.ts
const __makeSchema_ServiceMinAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  image: z.literal(true).optional(),
  href: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ServiceMinAggregateInputObjectSchema: z.ZodType<Prisma.ServiceMinAggregateInputType> = __makeSchema_ServiceMinAggregateInput_schema() as unknown as z.ZodType<Prisma.ServiceMinAggregateInputType>;
export const ServiceMinAggregateInputObjectZodSchema = __makeSchema_ServiceMinAggregateInput_schema();


// File: ServiceMaxAggregateInput.schema.ts
const __makeSchema_ServiceMaxAggregateInput_schema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  image: z.literal(true).optional(),
  href: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const ServiceMaxAggregateInputObjectSchema: z.ZodType<Prisma.ServiceMaxAggregateInputType> = __makeSchema_ServiceMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.ServiceMaxAggregateInputType>;
export const ServiceMaxAggregateInputObjectZodSchema = __makeSchema_ServiceMaxAggregateInput_schema();


// File: SettingCountAggregateInput.schema.ts
const __makeSchema_SettingCountAggregateInput_schema = () => z.object({
  key: z.literal(true).optional(),
  value: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SettingCountAggregateInputObjectSchema: z.ZodType<Prisma.SettingCountAggregateInputType> = __makeSchema_SettingCountAggregateInput_schema() as unknown as z.ZodType<Prisma.SettingCountAggregateInputType>;
export const SettingCountAggregateInputObjectZodSchema = __makeSchema_SettingCountAggregateInput_schema();


// File: SettingMinAggregateInput.schema.ts
const __makeSchema_SettingMinAggregateInput_schema = () => z.object({
  key: z.literal(true).optional(),
  value: z.literal(true).optional()
}).strict();
export const SettingMinAggregateInputObjectSchema: z.ZodType<Prisma.SettingMinAggregateInputType> = __makeSchema_SettingMinAggregateInput_schema() as unknown as z.ZodType<Prisma.SettingMinAggregateInputType>;
export const SettingMinAggregateInputObjectZodSchema = __makeSchema_SettingMinAggregateInput_schema();


// File: SettingMaxAggregateInput.schema.ts
const __makeSchema_SettingMaxAggregateInput_schema = () => z.object({
  key: z.literal(true).optional(),
  value: z.literal(true).optional()
}).strict();
export const SettingMaxAggregateInputObjectSchema: z.ZodType<Prisma.SettingMaxAggregateInputType> = __makeSchema_SettingMaxAggregateInput_schema() as unknown as z.ZodType<Prisma.SettingMaxAggregateInputType>;
export const SettingMaxAggregateInputObjectZodSchema = __makeSchema_SettingMaxAggregateInput_schema();


// File: ServiceSelect.schema.ts
const __makeSchema_ServiceSelect_schema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  image: z.boolean().optional(),
  href: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const ServiceSelectObjectSchema: z.ZodType<Prisma.ServiceSelect> = __makeSchema_ServiceSelect_schema() as unknown as z.ZodType<Prisma.ServiceSelect>;
export const ServiceSelectObjectZodSchema = __makeSchema_ServiceSelect_schema();


// File: SettingSelect.schema.ts
const __makeSchema_SettingSelect_schema = () => z.object({
  key: z.boolean().optional(),
  value: z.boolean().optional()
}).strict();
export const SettingSelectObjectSchema: z.ZodType<Prisma.SettingSelect> = __makeSchema_SettingSelect_schema() as unknown as z.ZodType<Prisma.SettingSelect>;
export const SettingSelectObjectZodSchema = __makeSchema_SettingSelect_schema();


// File: ServiceArgs.schema.ts
const __makeSchema_ServiceArgs_schema = () => z.object({
  select: z.lazy(() => ServiceSelectObjectSchema).optional()
}).strict();
export const ServiceArgsObjectSchema = __makeSchema_ServiceArgs_schema();
export const ServiceArgsObjectZodSchema = __makeSchema_ServiceArgs_schema();


// File: SettingArgs.schema.ts
const __makeSchema_SettingArgs_schema = () => z.object({
  select: z.lazy(() => SettingSelectObjectSchema).optional()
}).strict();
export const SettingArgsObjectSchema = __makeSchema_SettingArgs_schema();
export const SettingArgsObjectZodSchema = __makeSchema_SettingArgs_schema();


// File: findUniqueService.schema.ts

export const ServiceFindUniqueSchema: z.ZodType<Prisma.ServiceFindUniqueArgs> = z.object({ select: ServiceSelectObjectSchema.optional(),  where: ServiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServiceFindUniqueArgs>;

export const ServiceFindUniqueZodSchema = z.object({ select: ServiceSelectObjectSchema.optional(),  where: ServiceWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowService.schema.ts

export const ServiceFindUniqueOrThrowSchema: z.ZodType<Prisma.ServiceFindUniqueOrThrowArgs> = z.object({ select: ServiceSelectObjectSchema.optional(),  where: ServiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServiceFindUniqueOrThrowArgs>;

export const ServiceFindUniqueOrThrowZodSchema = z.object({ select: ServiceSelectObjectSchema.optional(),  where: ServiceWhereUniqueInputObjectSchema }).strict();

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

// File: findFirstOrThrowService.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServiceFindFirstOrThrowSelectSchema__findFirstOrThrowService_schema: z.ZodType<Prisma.ServiceSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    image: z.boolean().optional(),
    href: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ServiceSelect>;

export const ServiceFindFirstOrThrowSelectZodSchema__findFirstOrThrowService_schema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    image: z.boolean().optional(),
    href: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const ServiceFindFirstOrThrowSchema: z.ZodType<Prisma.ServiceFindFirstOrThrowArgs> = z.object({ select: ServiceFindFirstOrThrowSelectSchema__findFirstOrThrowService_schema.optional(),  orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServiceScalarFieldEnumSchema, ServiceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ServiceFindFirstOrThrowArgs>;

export const ServiceFindFirstOrThrowZodSchema = z.object({ select: ServiceFindFirstOrThrowSelectSchema__findFirstOrThrowService_schema.optional(),  orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServiceScalarFieldEnumSchema, ServiceScalarFieldEnumSchema.array()]).optional() }).strict();

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

// File: countService.schema.ts

export const ServiceCountSchema: z.ZodType<Prisma.ServiceCountArgs> = z.object({ orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ServiceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ServiceCountArgs>;

export const ServiceCountZodSchema = z.object({ orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ServiceCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneService.schema.ts

export const ServiceCreateOneSchema: z.ZodType<Prisma.ServiceCreateArgs> = z.object({ select: ServiceSelectObjectSchema.optional(),  data: z.union([ServiceCreateInputObjectSchema, ServiceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ServiceCreateArgs>;

export const ServiceCreateOneZodSchema = z.object({ select: ServiceSelectObjectSchema.optional(),  data: z.union([ServiceCreateInputObjectSchema, ServiceUncheckedCreateInputObjectSchema]) }).strict();

// File: createManyService.schema.ts

export const ServiceCreateManySchema: z.ZodType<Prisma.ServiceCreateManyArgs> = z.object({ data: z.union([ ServiceCreateManyInputObjectSchema, z.array(ServiceCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ServiceCreateManyArgs>;

export const ServiceCreateManyZodSchema = z.object({ data: z.union([ ServiceCreateManyInputObjectSchema, z.array(ServiceCreateManyInputObjectSchema) ]),  }).strict();

// File: deleteOneService.schema.ts

export const ServiceDeleteOneSchema: z.ZodType<Prisma.ServiceDeleteArgs> = z.object({ select: ServiceSelectObjectSchema.optional(),  where: ServiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServiceDeleteArgs>;

export const ServiceDeleteOneZodSchema = z.object({ select: ServiceSelectObjectSchema.optional(),  where: ServiceWhereUniqueInputObjectSchema }).strict();

// File: deleteManyService.schema.ts

export const ServiceDeleteManySchema: z.ZodType<Prisma.ServiceDeleteManyArgs> = z.object({ where: ServiceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServiceDeleteManyArgs>;

export const ServiceDeleteManyZodSchema = z.object({ where: ServiceWhereInputObjectSchema.optional() }).strict();

// File: updateOneService.schema.ts

export const ServiceUpdateOneSchema: z.ZodType<Prisma.ServiceUpdateArgs> = z.object({ select: ServiceSelectObjectSchema.optional(),  data: z.union([ServiceUpdateInputObjectSchema, ServiceUncheckedUpdateInputObjectSchema]), where: ServiceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ServiceUpdateArgs>;

export const ServiceUpdateOneZodSchema = z.object({ select: ServiceSelectObjectSchema.optional(),  data: z.union([ServiceUpdateInputObjectSchema, ServiceUncheckedUpdateInputObjectSchema]), where: ServiceWhereUniqueInputObjectSchema }).strict();

// File: updateManyService.schema.ts

export const ServiceUpdateManySchema: z.ZodType<Prisma.ServiceUpdateManyArgs> = z.object({ data: ServiceUpdateManyMutationInputObjectSchema, where: ServiceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServiceUpdateManyArgs>;

export const ServiceUpdateManyZodSchema = z.object({ data: ServiceUpdateManyMutationInputObjectSchema, where: ServiceWhereInputObjectSchema.optional() }).strict();

// File: upsertOneService.schema.ts

export const ServiceUpsertOneSchema: z.ZodType<Prisma.ServiceUpsertArgs> = z.object({ select: ServiceSelectObjectSchema.optional(),  where: ServiceWhereUniqueInputObjectSchema, create: z.union([ ServiceCreateInputObjectSchema, ServiceUncheckedCreateInputObjectSchema ]), update: z.union([ ServiceUpdateInputObjectSchema, ServiceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ServiceUpsertArgs>;

export const ServiceUpsertOneZodSchema = z.object({ select: ServiceSelectObjectSchema.optional(),  where: ServiceWhereUniqueInputObjectSchema, create: z.union([ ServiceCreateInputObjectSchema, ServiceUncheckedCreateInputObjectSchema ]), update: z.union([ ServiceUpdateInputObjectSchema, ServiceUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateService.schema.ts

export const ServiceAggregateSchema: z.ZodType<Prisma.ServiceAggregateArgs> = z.object({ orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ServiceCountAggregateInputObjectSchema ]).optional(), _min: ServiceMinAggregateInputObjectSchema.optional(), _max: ServiceMaxAggregateInputObjectSchema.optional(), _avg: ServiceAvgAggregateInputObjectSchema.optional(), _sum: ServiceSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServiceAggregateArgs>;

export const ServiceAggregateZodSchema = z.object({ orderBy: z.union([ServiceOrderByWithRelationInputObjectSchema, ServiceOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServiceWhereInputObjectSchema.optional(), cursor: ServiceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ServiceCountAggregateInputObjectSchema ]).optional(), _min: ServiceMinAggregateInputObjectSchema.optional(), _max: ServiceMaxAggregateInputObjectSchema.optional(), _avg: ServiceAvgAggregateInputObjectSchema.optional(), _sum: ServiceSumAggregateInputObjectSchema.optional() }).strict();

// File: groupByService.schema.ts

export const ServiceGroupBySchema: z.ZodType<Prisma.ServiceGroupByArgs> = z.object({ where: ServiceWhereInputObjectSchema.optional(), orderBy: z.union([ServiceOrderByWithAggregationInputObjectSchema, ServiceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ServiceScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ServiceScalarFieldEnumSchema), _count: z.union([ z.literal(true), ServiceCountAggregateInputObjectSchema ]).optional(), _min: ServiceMinAggregateInputObjectSchema.optional(), _max: ServiceMaxAggregateInputObjectSchema.optional(), _avg: ServiceAvgAggregateInputObjectSchema.optional(), _sum: ServiceSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ServiceGroupByArgs>;

export const ServiceGroupByZodSchema = z.object({ where: ServiceWhereInputObjectSchema.optional(), orderBy: z.union([ServiceOrderByWithAggregationInputObjectSchema, ServiceOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ServiceScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ServiceScalarFieldEnumSchema), _count: z.union([ z.literal(true), ServiceCountAggregateInputObjectSchema ]).optional(), _min: ServiceMinAggregateInputObjectSchema.optional(), _max: ServiceMaxAggregateInputObjectSchema.optional(), _avg: ServiceAvgAggregateInputObjectSchema.optional(), _sum: ServiceSumAggregateInputObjectSchema.optional() }).strict();

// File: findUniqueSetting.schema.ts

export const SettingFindUniqueSchema: z.ZodType<Prisma.SettingFindUniqueArgs> = z.object({ select: SettingSelectObjectSchema.optional(),  where: SettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingFindUniqueArgs>;

export const SettingFindUniqueZodSchema = z.object({ select: SettingSelectObjectSchema.optional(),  where: SettingWhereUniqueInputObjectSchema }).strict();

// File: findUniqueOrThrowSetting.schema.ts

export const SettingFindUniqueOrThrowSchema: z.ZodType<Prisma.SettingFindUniqueOrThrowArgs> = z.object({ select: SettingSelectObjectSchema.optional(),  where: SettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingFindUniqueOrThrowArgs>;

export const SettingFindUniqueOrThrowZodSchema = z.object({ select: SettingSelectObjectSchema.optional(),  where: SettingWhereUniqueInputObjectSchema }).strict();

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

// File: findFirstOrThrowSetting.schema.ts

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettingFindFirstOrThrowSelectSchema__findFirstOrThrowSetting_schema: z.ZodType<Prisma.SettingSelect> = z.object({
    key: z.boolean().optional(),
    value: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SettingSelect>;

export const SettingFindFirstOrThrowSelectZodSchema__findFirstOrThrowSetting_schema = z.object({
    key: z.boolean().optional(),
    value: z.boolean().optional()
  }).strict();

export const SettingFindFirstOrThrowSchema: z.ZodType<Prisma.SettingFindFirstOrThrowArgs> = z.object({ select: SettingFindFirstOrThrowSelectSchema__findFirstOrThrowSetting_schema.optional(),  orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettingScalarFieldEnumSchema, SettingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SettingFindFirstOrThrowArgs>;

export const SettingFindFirstOrThrowZodSchema = z.object({ select: SettingFindFirstOrThrowSelectSchema__findFirstOrThrowSetting_schema.optional(),  orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettingScalarFieldEnumSchema, SettingScalarFieldEnumSchema.array()]).optional() }).strict();

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

// File: countSetting.schema.ts

export const SettingCountSchema: z.ZodType<Prisma.SettingCountArgs> = z.object({ orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SettingCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SettingCountArgs>;

export const SettingCountZodSchema = z.object({ orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SettingCountAggregateInputObjectSchema ]).optional() }).strict();

// File: createOneSetting.schema.ts

export const SettingCreateOneSchema: z.ZodType<Prisma.SettingCreateArgs> = z.object({ select: SettingSelectObjectSchema.optional(),  data: z.union([SettingCreateInputObjectSchema, SettingUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SettingCreateArgs>;

export const SettingCreateOneZodSchema = z.object({ select: SettingSelectObjectSchema.optional(),  data: z.union([SettingCreateInputObjectSchema, SettingUncheckedCreateInputObjectSchema]) }).strict();

// File: createManySetting.schema.ts

export const SettingCreateManySchema: z.ZodType<Prisma.SettingCreateManyArgs> = z.object({ data: z.union([ SettingCreateManyInputObjectSchema, z.array(SettingCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.SettingCreateManyArgs>;

export const SettingCreateManyZodSchema = z.object({ data: z.union([ SettingCreateManyInputObjectSchema, z.array(SettingCreateManyInputObjectSchema) ]),  }).strict();

// File: deleteOneSetting.schema.ts

export const SettingDeleteOneSchema: z.ZodType<Prisma.SettingDeleteArgs> = z.object({ select: SettingSelectObjectSchema.optional(),  where: SettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingDeleteArgs>;

export const SettingDeleteOneZodSchema = z.object({ select: SettingSelectObjectSchema.optional(),  where: SettingWhereUniqueInputObjectSchema }).strict();

// File: deleteManySetting.schema.ts

export const SettingDeleteManySchema: z.ZodType<Prisma.SettingDeleteManyArgs> = z.object({ where: SettingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SettingDeleteManyArgs>;

export const SettingDeleteManyZodSchema = z.object({ where: SettingWhereInputObjectSchema.optional() }).strict();

// File: updateOneSetting.schema.ts

export const SettingUpdateOneSchema: z.ZodType<Prisma.SettingUpdateArgs> = z.object({ select: SettingSelectObjectSchema.optional(),  data: z.union([SettingUpdateInputObjectSchema, SettingUncheckedUpdateInputObjectSchema]), where: SettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingUpdateArgs>;

export const SettingUpdateOneZodSchema = z.object({ select: SettingSelectObjectSchema.optional(),  data: z.union([SettingUpdateInputObjectSchema, SettingUncheckedUpdateInputObjectSchema]), where: SettingWhereUniqueInputObjectSchema }).strict();

// File: updateManySetting.schema.ts

export const SettingUpdateManySchema: z.ZodType<Prisma.SettingUpdateManyArgs> = z.object({ data: SettingUpdateManyMutationInputObjectSchema, where: SettingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SettingUpdateManyArgs>;

export const SettingUpdateManyZodSchema = z.object({ data: SettingUpdateManyMutationInputObjectSchema, where: SettingWhereInputObjectSchema.optional() }).strict();

// File: upsertOneSetting.schema.ts

export const SettingUpsertOneSchema: z.ZodType<Prisma.SettingUpsertArgs> = z.object({ select: SettingSelectObjectSchema.optional(),  where: SettingWhereUniqueInputObjectSchema, create: z.union([ SettingCreateInputObjectSchema, SettingUncheckedCreateInputObjectSchema ]), update: z.union([ SettingUpdateInputObjectSchema, SettingUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SettingUpsertArgs>;

export const SettingUpsertOneZodSchema = z.object({ select: SettingSelectObjectSchema.optional(),  where: SettingWhereUniqueInputObjectSchema, create: z.union([ SettingCreateInputObjectSchema, SettingUncheckedCreateInputObjectSchema ]), update: z.union([ SettingUpdateInputObjectSchema, SettingUncheckedUpdateInputObjectSchema ]) }).strict();

// File: aggregateSetting.schema.ts

export const SettingAggregateSchema: z.ZodType<Prisma.SettingAggregateArgs> = z.object({ orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SettingCountAggregateInputObjectSchema ]).optional(), _min: SettingMinAggregateInputObjectSchema.optional(), _max: SettingMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SettingAggregateArgs>;

export const SettingAggregateZodSchema = z.object({ orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), SettingCountAggregateInputObjectSchema ]).optional(), _min: SettingMinAggregateInputObjectSchema.optional(), _max: SettingMaxAggregateInputObjectSchema.optional() }).strict();

// File: groupBySetting.schema.ts

export const SettingGroupBySchema: z.ZodType<Prisma.SettingGroupByArgs> = z.object({ where: SettingWhereInputObjectSchema.optional(), orderBy: z.union([SettingOrderByWithAggregationInputObjectSchema, SettingOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SettingScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SettingScalarFieldEnumSchema), _count: z.union([ z.literal(true), SettingCountAggregateInputObjectSchema ]).optional(), _min: SettingMinAggregateInputObjectSchema.optional(), _max: SettingMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SettingGroupByArgs>;

export const SettingGroupByZodSchema = z.object({ where: SettingWhereInputObjectSchema.optional(), orderBy: z.union([SettingOrderByWithAggregationInputObjectSchema, SettingOrderByWithAggregationInputObjectSchema.array()]).optional(), having: SettingScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(SettingScalarFieldEnumSchema), _count: z.union([ z.literal(true), SettingCountAggregateInputObjectSchema ]).optional(), _min: SettingMinAggregateInputObjectSchema.optional(), _max: SettingMaxAggregateInputObjectSchema.optional() }).strict();

// File: ServiceFindUniqueResult.schema.ts
export const ServiceFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.date()
}));

// File: ServiceFindFirstResult.schema.ts
export const ServiceFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.date()
}));

// File: ServiceFindManyResult.schema.ts
export const ServiceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});

// File: ServiceCreateResult.schema.ts
export const ServiceCreateResultSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.date()
});

// File: ServiceCreateManyResult.schema.ts
export const ServiceCreateManyResultSchema = z.object({
  count: z.number()
});

// File: ServiceUpdateResult.schema.ts
export const ServiceUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.date()
}));

// File: ServiceUpdateManyResult.schema.ts
export const ServiceUpdateManyResultSchema = z.object({
  count: z.number()
});

// File: ServiceUpsertResult.schema.ts
export const ServiceUpsertResultSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.date()
});

// File: ServiceDeleteResult.schema.ts
export const ServiceDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.date()
}));

// File: ServiceDeleteManyResult.schema.ts
export const ServiceDeleteManyResultSchema = z.object({
  count: z.number()
});

// File: ServiceAggregateResult.schema.ts
export const ServiceAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    image: z.number(),
    href: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    image: z.string().nullable(),
    href: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    image: z.string().nullable(),
    href: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});

// File: ServiceGroupByResult.schema.ts
export const ServiceGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  href: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    image: z.number(),
    href: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    image: z.string().nullable(),
    href: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    image: z.string().nullable(),
    href: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));

// File: ServiceCountResult.schema.ts
export const ServiceCountResultSchema = z.number();

// File: SettingFindUniqueResult.schema.ts
export const SettingFindUniqueResultSchema = z.nullable(z.object({
  key: z.string(),
  value: z.string()
}));

// File: SettingFindFirstResult.schema.ts
export const SettingFindFirstResultSchema = z.nullable(z.object({
  key: z.string(),
  value: z.string()
}));

// File: SettingFindManyResult.schema.ts
export const SettingFindManyResultSchema = z.object({
  data: z.array(z.object({
  key: z.string(),
  value: z.string()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});

// File: SettingCreateResult.schema.ts
export const SettingCreateResultSchema = z.object({
  key: z.string(),
  value: z.string()
});

// File: SettingCreateManyResult.schema.ts
export const SettingCreateManyResultSchema = z.object({
  count: z.number()
});

// File: SettingUpdateResult.schema.ts
export const SettingUpdateResultSchema = z.nullable(z.object({
  key: z.string(),
  value: z.string()
}));

// File: SettingUpdateManyResult.schema.ts
export const SettingUpdateManyResultSchema = z.object({
  count: z.number()
});

// File: SettingUpsertResult.schema.ts
export const SettingUpsertResultSchema = z.object({
  key: z.string(),
  value: z.string()
});

// File: SettingDeleteResult.schema.ts
export const SettingDeleteResultSchema = z.nullable(z.object({
  key: z.string(),
  value: z.string()
}));

// File: SettingDeleteManyResult.schema.ts
export const SettingDeleteManyResultSchema = z.object({
  count: z.number()
});

// File: SettingAggregateResult.schema.ts
export const SettingAggregateResultSchema = z.object({  _count: z.object({
    key: z.number(),
    value: z.number()
  }).optional(),
  _min: z.object({
    key: z.string().nullable(),
    value: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    key: z.string().nullable(),
    value: z.string().nullable()
  }).nullable().optional()});

// File: SettingGroupByResult.schema.ts
export const SettingGroupByResultSchema = z.array(z.object({
  key: z.string(),
  value: z.string(),
  _count: z.object({
    key: z.number(),
    value: z.number()
  }).optional(),
  _min: z.object({
    key: z.string().nullable(),
    value: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    key: z.string().nullable(),
    value: z.string().nullable()
  }).nullable().optional()
}));

// File: SettingCountResult.schema.ts
export const SettingCountResultSchema = z.number();

// File: index.ts


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

