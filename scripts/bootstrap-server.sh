#!/usr/bin/env bash
# One-time bootstrap for endedge@161.97.146.222 (run as endedge via sudo -u endedge).
set -euo pipefail

export HOME="${HOME:-$(getent passwd "$(id -un)" | cut -d: -f6)}"
DEPLOY_DIR="${DEPLOY_DIR:-$HOME/htdocs/endedge.co/app}"
PM2_APP="endedge-website"
PORT=5533

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
fi
# shellcheck disable=SC1090
. "$NVM_DIR/nvm.sh"

nvm install 22
nvm use 22

if ! command -v pm2 >/dev/null 2>&1; then
  npm install -g pm2
fi

mkdir -p "$DEPLOY_DIR"
echo "Bootstrap ready. Deploy path: $DEPLOY_DIR (port $PORT)"
