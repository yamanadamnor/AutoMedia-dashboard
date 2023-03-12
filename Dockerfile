
# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
# https://github.dev/kachar/yadi

ARG BASE=node:18-alpine

#------ target dependencies

# Install dependencies only when needed
FROM ${BASE} AS dependencies

RUN apk update \
  && apk add --no-cache openssl curl libc6-compat \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /var/cache/apk/*

RUN openssl version && curl --version
RUN curl -sf https://gobinaries.com/tj/node-prune | sh

WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma

RUN npm  ci --production=true --frozen-lockfile --ignore-scripts \
  && npx prisma generate \
  && node-prune \
  && cp -R node_modules prod_node_modules \
  && npm ci --production=false --prefer-offline \
  && npx prisma generate \
  && rm -rf prisma

#------ target bulider

# Rebuild the source code only when needed
FROM ${BASE} AS builder
WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

ARG ARG_NEXT_PUBLIC_SECRET
ENV NEXT_PUBLIC_SECRET=$ARG_NEXT_PUBLIC_SECRET


# NEXTAUTH_URL required at build time for CustomHead SEO
ARG ARG_NEXTAUTH_URL
ENV NEXTAUTH_URL=$ARG_NEXTAUTH_URL

# debug
# RUN echo $DATABASE_URL=$DATABASE_URL
# RUN echo "NEXTAUTH_URL=$NEXTAUTH_URL"

# ENV DEBUG=*

# npx prisma migrate deploy && npx prisma db seed - not needed
# connect to existing db with data
# build reads DATABASE_URL env, and needs dev dependencies
RUN npm run build && rm -rf node_modules

#------ target production

# Production image, copy all the files and run next
FROM ${BASE} AS production
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=dependencies /app/prod_node_modules ./node_modules
COPY --from=builder --chown=node:node /app/.next ./.next
# use schema from container
COPY --from=builder /app/prisma ./prisma

RUN mkdir -p config

EXPOSE 3344

# only for SSG pages
ARG ARG_DATABASE_URL
ENV DATABASE_URL=$ARG_DATABASE_URL

ENV NEXT_TELEMETRY_DISABLED 1

# run migrate and seed here
CMD ["npm", "run", "start:migrate:prod"]
