FROM node:24-alpine3.22 AS base
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN pnpm install tsx -g

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml* .npmrc* .gitignore ./
RUN pnpm install --frozen-lockfile;

# Rebuild the source code only when needed
FROM base AS builder

ARG DB_FILE_NAME=./config/dashboard.db

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN mkdir -p config
RUN pnpm run migrate:prod && pnpm run build;

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/run.sh .

RUN mkdir -p config

USER nextjs

ENV DB_FILE_NAME=./config/dashboard.db
ENV HOSTNAME 0.0.0.0
ENV PORT=3344
EXPOSE $PORT

# run migrate and seed here
CMD ["sh", "run.sh"]
