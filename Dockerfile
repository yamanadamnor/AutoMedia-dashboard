FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY prisma ./prisma
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi \
  && npx prisma generate \
  && rm -rf prisma

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG ARG_NEXT_PUBLIC_SECRET
ENV NEXT_PUBLIC_SECRET=$ARG_NEXT_PUBLIC_SECRET


# NEXTAUTH_URL required at build time for CustomHead SEO
ARG ARG_NEXTAUTH_URL
ENV NEXTAUTH_URL=$ARG_NEXTAUTH_URL

RUN npm run build

# If using npm comment out above and use below instead
# RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma

RUN mkdir -p config

EXPOSE 3344

# only for SSG pages
ARG ARG_DATABASE_URL
ENV DATABASE_URL=$ARG_DATABASE_URL

ENV NEXT_TELEMETRY_DISABLED 1

# run migrate and seed here
CMD ["npm", "run", "start:migrate:prod"]
