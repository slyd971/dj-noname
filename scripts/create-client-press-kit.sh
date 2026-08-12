#!/usr/bin/env bash

set -euo pipefail

export LC_ALL="C"
export LANG="C"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BASE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

usage() {
  cat <<'EOF'
Usage:
  ./scripts/create-client-press-kit.sh <template> <client-name> [destination] [options]

Templates:
  impact
  interactive
  showcase

Examples:
  ./scripts/create-client-press-kit.sh impact "DJ Nova"
  ./scripts/create-client-press-kit.sh interactive "Aya Nakamura" --email "booking@aya.com" --instagram "ayanakamura_officiel"
  ./scripts/create-client-press-kit.sh showcase "KAYTRANADA" ../kaytranada-press-kit --theme sapphire --accent "#3B82F6"

Behavior:
  - duplicates the chosen template
  - generates a destination folder automatically if omitted
  - pre-fills data/config.ts with the client name and metadata
  - updates package.json name

Options:
  --email <value>
  --phone <value>
  --instagram <handle-or-url>
  --soundcloud <handle-or-url>
  --theme <red|blue|green|orange|violet|monochrome>
  --accent <#RRGGBB>

Environment:
  The generated project is always created from this repo's shared base.
EOF
}

if [[ $# -lt 2 ]]; then
  usage
  exit 1
fi

TEMPLATE_NAME="$1"
CLIENT_NAME="$2"
shift 2

DEST_INPUT=""
EMAIL=""
PHONE=""
INSTAGRAM=""
SOUNDCLOUD=""
THEME=""
ACCENT=""

slugify() {
  printf '%s' "$1" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E "s/[^a-z0-9]+/-/g; s/^-+//; s/-+$//; s/-+/-/g"
}

escape_replacement() {
  printf '%s' "$1" | sed -e 's/[\/&]/\\&/g'
}

normalize_instagram_handle() {
  local input="$1"
  input="${input#https://instagram.com/}"
  input="${input#http://instagram.com/}"
  input="${input#https://www.instagram.com/}"
  input="${input#http://www.instagram.com/}"
  input="${input#@}"
  input="${input%%/*}"
  printf '%s' "$input"
}

normalize_soundcloud_handle() {
  local input="$1"
  input="${input#https://soundcloud.com/}"
  input="${input#http://soundcloud.com/}"
  input="${input#https://www.soundcloud.com/}"
  input="${input#http://www.soundcloud.com/}"
  input="${input%%/*}"
  printf '%s' "$input"
}

hex_to_rgb_triplet() {
  local hex="${1#\#}"

  if [[ ! "$hex" =~ ^[0-9A-Fa-f]{6}$ ]]; then
    echo "Invalid accent color: $1. Expected format #RRGGBB" >&2
    exit 1
  fi

  printf '%d %d %d' "0x${hex:0:2}" "0x${hex:2:2}" "0x${hex:4:2}"
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --email)
      EMAIL="${2:-}"
      shift 2
      ;;
    --phone)
      PHONE="${2:-}"
      shift 2
      ;;
    --instagram)
      INSTAGRAM="${2:-}"
      shift 2
      ;;
    --soundcloud)
      SOUNDCLOUD="${2:-}"
      shift 2
      ;;
    --theme)
      THEME="${2:-}"
      shift 2
      ;;
    --accent)
      ACCENT="${2:-}"
      shift 2
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    *)
      if [[ -z "$DEST_INPUT" && "$1" != --* ]]; then
        DEST_INPUT="$1"
        shift
      else
        echo "Unknown argument: $1" >&2
        usage
        exit 1
      fi
      ;;
  esac
done

CLIENT_SLUG="$(slugify "$CLIENT_NAME")"

if [[ -z "$CLIENT_SLUG" ]]; then
  echo "Unable to derive a valid slug from client name: $CLIENT_NAME" >&2
  exit 1
fi

if [[ -z "$DEST_INPUT" ]]; then
  DEST_INPUT="../${CLIENT_SLUG}-press-kit"
fi

bash "$SCRIPT_DIR/create-press-kit.sh" "$TEMPLATE_NAME" "$DEST_INPUT"

if [[ "$DEST_INPUT" = /* ]]; then
  DEST_DIR="$DEST_INPUT"
else
  DEST_DIR="$(cd "$BASE_DIR" && cd "$(dirname "$DEST_INPUT")" && pwd)/$(basename "$DEST_INPUT")"
fi

CONFIG_FILE="$DEST_DIR/data/config.ts"
PACKAGE_FILE="$DEST_DIR/package.json"

if [[ ! -f "$CONFIG_FILE" ]]; then
  echo "Missing config file in generated project: $CONFIG_FILE" >&2
  exit 1
fi

if [[ ! -f "$PACKAGE_FILE" ]]; then
  echo "Missing package.json in generated project: $PACKAGE_FILE" >&2
  exit 1
fi

CLIENT_NAME_ESCAPED="$(escape_replacement "$CLIENT_NAME")"
CLIENT_SLUG_ESCAPED="$(escape_replacement "$CLIENT_SLUG")"

perl -0pi -e 's/title: "SLY'\''D Press Kit"/title: "'"$CLIENT_NAME_ESCAPED"' Press Kit"/g' "$CONFIG_FILE"
perl -0pi -e 's/Press kit template for DJ SLY'\''D with configurable content, branding and booking information\./Press kit template for '"$CLIENT_NAME_ESCAPED"' with configurable content, branding and booking information./g' "$CONFIG_FILE"
perl -0pi -e 's/name: "DJ SLY'\''D"/name: "'"$CLIENT_NAME_ESCAPED"'"/g' "$CONFIG_FILE"
perl -0pi -e 's/title: "DJ SLY'\''D"/title: "'"$CLIENT_NAME_ESCAPED"'"/g' "$CONFIG_FILE"
perl -0pi -e 's/alt: "Sly'\''D logo"/alt: "'"$CLIENT_NAME_ESCAPED"' logo"/g' "$CONFIG_FILE"
perl -0pi -e 's/alt: "Sly'\''D hero visual"/alt: "'"$CLIENT_NAME_ESCAPED"' hero visual"/g' "$CONFIG_FILE"
perl -0pi -e 's/"name": "slyd-press-kit"/"name": "'"$CLIENT_SLUG_ESCAPED"'-press-kit"/g' "$PACKAGE_FILE"

if [[ -n "$EMAIL" ]]; then
  EMAIL_ESCAPED="$(escape_replacement "$EMAIL")"
  perl -0pi -e 's/dj-slyd@hotmail\.com/'"$EMAIL_ESCAPED"'/g' "$CONFIG_FILE"
fi

if [[ -n "$PHONE" ]]; then
  PHONE_ESCAPED="$(escape_replacement "$PHONE")"
  PHONE_TEL="$(printf '%s' "$PHONE" | tr -cd '0-9+')"
  PHONE_TEL_ESCAPED="$(escape_replacement "$PHONE_TEL")"
  perl -0pi -e 's/\+33 6 63 90 78 88/'"$PHONE_ESCAPED"'/g' "$CONFIG_FILE"
  perl -0pi -e 's/tel:\+33663907888/tel:'"$PHONE_TEL_ESCAPED"'/g' "$CONFIG_FILE"
fi

if [[ -n "$INSTAGRAM" ]]; then
  INSTAGRAM_HANDLE="$(normalize_instagram_handle "$INSTAGRAM")"
  INSTAGRAM_HANDLE_ESCAPED="$(escape_replacement "$INSTAGRAM_HANDLE")"
  perl -0pi -e 's/\@djslyd/\@'"$INSTAGRAM_HANDLE_ESCAPED"'/g' "$CONFIG_FILE"
  perl -0pi -e 's#https://instagram\.com/djslyd#https://instagram.com/'"$INSTAGRAM_HANDLE_ESCAPED"'#g' "$CONFIG_FILE"
fi

if [[ -n "$SOUNDCLOUD" ]]; then
  SOUNDCLOUD_HANDLE="$(normalize_soundcloud_handle "$SOUNDCLOUD")"
  SOUNDCLOUD_HANDLE_ESCAPED="$(escape_replacement "$SOUNDCLOUD_HANDLE")"
  SOUNDCLOUD_URL="https://soundcloud.com/$SOUNDCLOUD_HANDLE"
  SOUNDCLOUD_URL_ESCAPED="$(escape_replacement "$SOUNDCLOUD_URL")"
  SOUNDCLOUD_EMBED_URL="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/$SOUNDCLOUD_HANDLE&color=%23b51f24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
  SOUNDCLOUD_EMBED_URL_ESCAPED="$(escape_replacement "$SOUNDCLOUD_EMBED_URL")"

  perl -0pi -e 's#https://soundcloud\.com/dj-slyd#'"$SOUNDCLOUD_URL_ESCAPED"'#g' "$CONFIG_FILE"
  perl -0pi -e 's/value: "dj-slyd"/value: "'"$SOUNDCLOUD_HANDLE_ESCAPED"'"/g' "$CONFIG_FILE"
  perl -0pi -e 's#https://w\.soundcloud\.com/player/\?url=https%3A//soundcloud\.com/dj-slyd&color=%23b51f24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true#'"$SOUNDCLOUD_EMBED_URL_ESCAPED"'#g' "$CONFIG_FILE"
fi

TEMPLATES_FILE="$DEST_DIR/data/templates.ts"

if [[ -n "$THEME" ]]; then
  case "$THEME" in
    red|blue|green|orange|violet|monochrome|midnight|ember|sapphire)
      THEME_ESCAPED="$(escape_replacement "$THEME")"
      perl -0pi -e 's/export const defaultTemplateId: TemplateId = ".*?";/export const defaultTemplateId: TemplateId = "'"$THEME_ESCAPED"'";/g' "$TEMPLATES_FILE"
      ;;
    *)
      echo "Invalid theme: $THEME. Expected red, blue, green, orange, violet or monochrome." >&2
      exit 1
      ;;
  esac
fi

if [[ -n "$ACCENT" ]]; then
  ACCENT_ESCAPED="$(escape_replacement "$ACCENT")"
  ACCENT_RGB="$(hex_to_rgb_triplet "$ACCENT")"
  ACCENT_RGB_ESCAPED="$(escape_replacement "$ACCENT_RGB")"
  perl -0pi -e 's/accent: "#D9252A"/accent: "'"$ACCENT_ESCAPED"'"/g' "$TEMPLATES_FILE"
  perl -0pi -e 's/accentStrong: "#E32D32"/accentStrong: "'"$ACCENT_ESCAPED"'"/g' "$TEMPLATES_FILE"
  perl -0pi -e 's/accentSoft: "#FF7A7E"/accentSoft: "'"$ACCENT_ESCAPED"'"/g' "$TEMPLATES_FILE"
  perl -0pi -e 's/accentRgb: "217 37 42"/accentRgb: "'"$ACCENT_RGB_ESCAPED"'"/g' "$TEMPLATES_FILE"
  perl -0pi -e 's/color=%23b51f24/color=%23'"${ACCENT#\#}"'/g' "$CONFIG_FILE"
fi

cat <<EOF

Client preset applied successfully.

Client:      $CLIENT_NAME
Slug:        $CLIENT_SLUG
Project:     $DEST_DIR

Prefilled:
  - data/config.ts artist name
  - data/config.ts metadata title
  - data/config.ts metadata description
  - package.json name
  - optional contact fields
  - optional default theme
  - optional accent color

Remaining manual edits:
  - bio and section copy in data/config.ts
  - assets in public/
  - extra theme presets in data/templates.ts if needed
EOF
