#!/usr/bin/env bash
# Production deploy on the server (GitHub Actions or manual).
set -euo pipefail

: "${HOME:=$(getent passwd "$(id -un)" | cut -d: -f6)}"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "==> Deploying endedge-website in $ROOT"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck disable=SC1090
  . "$NVM_DIR/nvm.sh"
  nvm use 22 >/dev/null
else
  NODE_BIN="$HOME/.nvm/versions/node/v22.12.0/bin"
  if [ -x "$NODE_BIN/node" ]; then
    export PATH="$NODE_BIN:$PATH"
  else
    echo "Node 22 not found — run scripts/bootstrap-server.sh first."
    exit 1
  fi
fi

echo "==> Node $(node -v), npm $(npm -v)"

if [ "${SKIP_GIT_PULL:-0}" != "1" ]; then
  echo "==> Pull latest code (main)"
  git fetch origin main
  git checkout -B main origin/main
else
  echo "==> Skipping git pull (runner synced this commit)"
fi

echo "==> Installing dependencies"
npm ci --no-audit --no-fund

echo "==> Building Next.js app"
export NODE_ENV=production
npm run build

echo "==> Restarting PM2 process"
export PM2_HOME="${PM2_HOME:-$HOME/.pm2}"
pm2 delete endedge-website >/dev/null 2>&1 || true
pm2 start ecosystem.config.cjs
pm2 save
echo "==> Deploy complete"
