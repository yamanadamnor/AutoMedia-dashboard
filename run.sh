#!/bin/bash

# Source - https://stackoverflow.com/a/78034830
set -e

# Running database migrations
pnpm run migrate:prod & PID=$!
# Wait for migration to finish
wait $PID

# Running database seed
pnpm run seed:prod & PID=$!
# Wait for seed to finish
wait $PID

echo "Starting production server..."
node server.js & PID=$!
wait $PID
