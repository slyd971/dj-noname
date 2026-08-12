#!/usr/bin/env bash

set -euo pipefail

export LC_ALL="C"
export LANG="C"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BASE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

usage() {
  cat <<'EOF'
Usage:
  ./scripts/create-press-kit.sh <template> <destination>

Templates:
  impact
  interactive
  showcase

Examples:
  ./scripts/create-press-kit.sh impact ../client-press-kit
  ./scripts/create-press-kit.sh showcase ../dj-nova-press-kit

What gets copied:
  - app
  - components
  - data
  - public
  - package.json
  - package-lock.json
  - tsconfig.json
  - next-env.d.ts
  - postcss.config.js
  - tailwind.config.js
  - .gitignore

What is excluded:
  - .git
  - node_modules
  - .next
  - .env.local
EOF
}

if [[ $# -ne 2 ]]; then
  usage
  exit 1
fi

TEMPLATE_NAME="$1"
DEST_INPUT="$2"

case "$TEMPLATE_NAME" in
  impact|interactive|showcase)
    SOURCE_DIR="$BASE_DIR"
    ;;
  *)
    echo "Unknown template: $TEMPLATE_NAME" >&2
    usage
    exit 1
    ;;
esac

if [[ "$DEST_INPUT" = /* ]]; then
  DEST_DIR="$DEST_INPUT"
else
  DEST_DIR="$(cd "$BASE_DIR" && cd "$(dirname "$DEST_INPUT")" && pwd)/$(basename "$DEST_INPUT")"
fi

if [[ -e "$DEST_DIR" ]]; then
  echo "Destination already exists: $DEST_DIR" >&2
  exit 1
fi

mkdir -p "$DEST_DIR"

copy_item() {
  local item="$1"

  if [[ -e "$SOURCE_DIR/$item" ]]; then
    rsync -a \
      --exclude .git \
      --exclude node_modules \
      --exclude .next \
      --exclude .env.local \
      "$SOURCE_DIR/$item" \
      "$DEST_DIR/"
  fi
}

copy_item "app"
copy_item "components"
copy_item "data"
copy_item "public"
copy_item "package.json"
copy_item "package-lock.json"
copy_item "tsconfig.json"
copy_item "next-env.d.ts"
copy_item "postcss.config.js"
copy_item "tailwind.config.js"
copy_item ".gitignore"

TEMPLATES_FILE="$DEST_DIR/data/templates.ts"

if [[ -f "$TEMPLATES_FILE" ]]; then
  perl -0pi -e 's/export const defaultTemplateVariantId: TemplateVariantId = ".*?";/export const defaultTemplateVariantId: TemplateVariantId = "'"$TEMPLATE_NAME"'";/g' "$TEMPLATES_FILE"
fi

cat <<EOF
New press kit created successfully.

Hero:        $TEMPLATE_NAME
Source:      $SOURCE_DIR
Destination: $DEST_DIR

Next steps:
  1. cd "$DEST_DIR"
  2. npm install
  3. Edit data/config.ts
  4. Adjust data/templates.ts if you want different theme presets
  5. npm run dev
EOF
