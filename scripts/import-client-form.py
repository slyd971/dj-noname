#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path


SCRIPT_DIR = Path(__file__).resolve().parent
REPO_DIR = SCRIPT_DIR.parent
CONFIG_TS_PATH = REPO_DIR / "data" / "config.ts"

NS = {"main": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}


HEADER_MAP = {
    "Horodateur": "timestamp",
    "Nom d’artiste / DJ Name ": "artist_name",
    "Nom d'artiste / DJ Name ": "artist_name",
    "Nom d'artiste": "artist_name",
    "Email ": "email",
    "Email principal": "email",
    "Téléphone ": "phone",
    "Telephone": "phone",
    "Choix du template ": "template_choice",
    "Template souhaite": "template_choice",
    "Couleur principale du site ": "theme_choice",
    "Couleur principale du site": "theme_choice",
    "Ville / Zone ": "city",
    "Ville / zone": "city",
    "Presentation courte": "stage_label",
    "Styles musicaux ": "styles",
    "Styles musicaux": "styles",
    "Type d’événements ": "event_types",
    "Type d'evenements ": "event_types",
    "Types d'evenements": "event_types",
    "Bio / présentation ": "bio",
    "Bio / presentation ": "bio",
    "Bio / presentation": "bio",
    "Références \nClubs en france et ville ou pays où tu as mixé": "references",
    "References \nClubs en france et ville ou pays ou tu as mixe": "references",
    "References clubs / villes / pays deja mixes": "references",
    "Instagram ": "instagram",
    "Instagram": "instagram",
    "Lien Playlist / Spotify ": "spotify",
    "Lien Spotify principal": "spotify",
    "Lien SoundCloud principal": "soundcloud",
    "Lien SoundCloud": "soundcloud",
    "Email booking ": "booking_email",
    "Email booking": "booking_email",
    "Stage label / sous-titre principal": "stage_label",
    "Sous-titre principal": "stage_label",
    "Description meta du site / press kit": "meta_description",
    "Description courte du projet": "meta_description",
    "Ce qui te differencie": "supporting_text",
    "Image / ambiance souhaitee": "extra_message",
    "Hero eyebrow": "hero_eyebrow",
    "Texte d'accroche hero": "hero_eyebrow",
    "Hero title": "hero_title",
    "Titre hero": "hero_title",
    "Hero accent / mot secondaire": "hero_accent",
    "Mot accent hero": "hero_accent",
    "Hero description": "hero_description",
    "Description hero": "hero_description",
    "Hero image badge": "hero_image_badge",
    "Badge image hero": "hero_image_badge",
    "Hero image caption": "hero_image_caption",
    "Caption image hero": "hero_image_caption",
    "CTA principal du hero": "hero_cta_primary_label",
    "CTA principal hero": "hero_cta_primary_label",
    "CTA secondaire du hero": "hero_cta_secondary_label",
    "CTA secondaire hero": "hero_cta_secondary_label",
    "About title": "about_title",
    "Titre section About": "about_title",
    "Signature label": "signature_label",
    "Label signature": "signature_label",
    "Signature quote": "signature_quote",
    "Citation signature": "signature_quote",
    "Supporting text court": "supporting_text",
    "Texte court About": "supporting_text",
    "Titre section clubs": "clubs_title",
    "Titre section Club Journey": "clubs_title",
    "Description section clubs": "clubs_description",
    "Description section Club Journey": "clubs_description",
    "Clubs / lieux France uniquement": "clubs_france",
    "Clubs / lieux France": "clubs_france",
    "Villes / pays internationaux uniquement": "clubs_international",
    "Villes / pays internationaux": "clubs_international",
    "Titre section sound": "sound_title",
    "Titre section Sound": "sound_title",
    "Paragraphe sound 1": "sound_paragraph_1",
    "Texte Sound 1": "sound_paragraph_1",
    "Paragraphe sound 2": "sound_paragraph_2",
    "Texte Sound 2": "sound_paragraph_2",
    "Paragraphe sound 3": "sound_paragraph_3",
    "Texte Sound 3": "sound_paragraph_3",
    "Texte CTA SoundCloud": "sound_cta_label",
    "Texte bouton SoundCloud": "sound_cta_label",
    "Titre section Videos": "videos_title",
    "Description section Videos": "videos_description",
    "Titre video 1": "video_1_title",
    "Description video 1": "video_1_description",
    "Lien video 1": "video_1_link",
    "Titre video 2": "video_2_title",
    "Description video 2": "video_2_description",
    "Lien video 2": "video_2_link",
    "Titre video 3": "video_3_title",
    "Description video 3": "video_3_description",
    "Lien video 3": "video_3_link",
    "Titre section Spotify": "spotify_title",
    "Description section Spotify": "spotify_description",
    "Titre section brands": "brands_title",
    "Titre section Brands": "brands_title",
    "Intro section brands": "brands_intro",
    "Intro section Brands": "brands_intro",
    "Supporting text brands": "brands_supporting_text",
    "Texte complementaire Brands": "brands_supporting_text",
    "Marques / medias / partenaires": "brand_items",
    "Titre bloc 'Why it fits'": "brands_fit_title",
    "Titre bloc Why it fits": "brands_fit_title",
    "Points bloc 'Why it fits'": "brands_fit_points",
    "Points bloc Why it fits": "brands_fit_points",
    "Titre section contact": "contact_title",
    "Titre section Contact": "contact_title",
    "Description section contact": "contact_description",
    "Description section Contact": "contact_description",
    "Instagram public @handle": "instagram_public",
    "Handle Instagram public": "instagram_public",
    "SoundCloud public handle": "soundcloud_public",
    "Handle SoundCloud public": "soundcloud_public",
    "LIens photos / vidéos\nDrive / Wetransfer ou Swisstranfer ": "media_links",
    "Liens photos / videos / Drive": "media_links",
    "Liens photos / videos": "media_links",
    "Logo": "logo",
    "Lien logo": "logo",
    "Photos HD ": "photos_hd",
    "Lien photos HD": "photos_hd",
    "Photos a mettre en avant": "gallery_priority_notes",
    "Confirmation ": "confirmation",
    "Confirmation finale": "confirmation",
    "Message complémentaire ": "extra_message",
    "Message complementaire ": "extra_message",
    "Message complementaire": "extra_message",
    "Informations complementaires": "extra_message",
    "Contact principal": "contact_label_1",
    "Valeur contact principal": "contact_value_1",
    "Contact secondaire": "contact_label_2",
    "Valeur contact secondaire": "contact_value_2",
    "Infos sur tes videos": "videos_notes",
}


def extract_braced_block(text: str, start_index: int) -> str:
    depth = 0
    block_start = -1

    for index in range(start_index, len(text)):
        char = text[index]
        if char == "{":
            if depth == 0:
                block_start = index
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0 and block_start >= 0:
                return text[block_start : index + 1]

    raise ValueError("Unable to extract braced block from config.ts")


def extract_named_block(text: str, key: str) -> str:
    match = re.search(rf"{re.escape(key)}:\s*\{{", text)
    if not match:
        raise ValueError(f"Missing '{key}' block in clientIntakeConfig")
    return extract_braced_block(text, match.end() - 1)


def extract_string(text: str, key: str) -> str | None:
    match = re.search(rf'{re.escape(key)}:\s*"([^"]*)"', text)
    return match.group(1) if match else None


def extract_bool(text: str, key: str) -> bool | None:
    match = re.search(rf"{re.escape(key)}:\s*(true|false)", text)
    if not match:
        return None
    return match.group(1) == "true"


def extract_string_array(text: str, key: str) -> list[str]:
    match = re.search(rf"{re.escape(key)}:\s*\[(.*?)\]", text, flags=re.S)
    if not match:
        return []
    return re.findall(r'"([^"]*)"', match.group(1))


def load_client_intake_config() -> dict[str, object]:
    if not CONFIG_TS_PATH.exists():
        return {}

    source = CONFIG_TS_PATH.read_text(encoding="utf-8")
    export_match = re.search(r"export const clientIntakeConfig\s*=\s*\{", source)
    if not export_match:
        return {}

    block = extract_braced_block(source, export_match.end() - 1)
    google_apps_script = extract_named_block(block, "googleAppsScript")
    form_block = extract_named_block(google_apps_script, "form")
    import_workflow = extract_named_block(block, "importWorkflow")

    return {
        "source": extract_string(block, "source") or "google-form",
        "google_apps_script": {
            "project_directory": extract_string(google_apps_script, "projectDirectory")
            or "dj-onboarding-form",
            "script_file": extract_string(google_apps_script, "scriptFile")
            or "dj-onboarding-form/Code.gs",
            "manifest_file": extract_string(google_apps_script, "manifestFile")
            or "dj-onboarding-form/appsscript.json",
            "form": {
                "title": extract_string(form_block, "title")
                or "Onboarding - DJ / Press Kit",
                "description": extract_string(form_block, "description") or "",
                "confirmation_message": extract_string(
                    form_block, "confirmationMessage"
                )
                or "",
                "collect_email": extract_bool(form_block, "collectEmail"),
                "is_quiz": extract_bool(form_block, "isQuiz"),
            },
        },
        "import_workflow": {
            "command": extract_string(import_workflow, "command")
            or 'npm run import:client-form -- "/path/to/export.xlsx"',
            "latest_response_default": extract_bool(
                import_workflow, "latestResponseDefault"
            ),
            "output_files": extract_string_array(import_workflow, "outputFiles"),
        },
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Import a Google Forms Excel export and generate a prefilled press kit "
            "project from the latest client response."
        )
    )
    parser.add_argument("xlsx_path", help="Path to the .xlsx export file")
    parser.add_argument(
        "--row",
        type=int,
        default=None,
        help=(
            "1-based response row to import, excluding the header. "
            "Defaults to the latest response."
        ),
    )
    parser.add_argument(
        "--destination",
        help="Optional destination folder for the generated project",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Only print the normalized client intake without generating a project",
    )
    return parser.parse_args()


def col_to_index(cell_ref: str) -> int:
    letters = "".join(char for char in cell_ref if char.isalpha())
    index = 0
    for char in letters:
        index = index * 26 + (ord(char.upper()) - 64)
    return index - 1


def read_xlsx_rows(path: Path) -> tuple[str, list[list[str]]]:
    with zipfile.ZipFile(path) as archive:
        shared_strings = []
        if "xl/sharedStrings.xml" in archive.namelist():
            root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
            for item in root.findall("main:si", NS):
                shared_strings.append(
                    "".join(node.text or "" for node in item.iterfind(".//main:t", NS))
                )

        workbook = ET.fromstring(archive.read("xl/workbook.xml"))
        sheet = workbook.find("main:sheets/main:sheet", NS)
        if sheet is None:
            raise ValueError("No worksheet found in workbook")

        sheet_name = sheet.attrib["name"]
        relation_id = sheet.attrib[
            "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"
        ]

        rels = ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
        target = None
        for rel in rels:
            if rel.attrib.get("Id") == relation_id:
                target = rel.attrib["Target"]
                break

        if not target:
            raise ValueError("Unable to locate worksheet in workbook relationships")

        sheet_path = "xl/" + target.replace("xl/", "")
        worksheet = ET.fromstring(archive.read(sheet_path))

        rows: list[list[str]] = []
        for row in worksheet.findall("main:sheetData/main:row", NS):
            values: dict[int, str] = {}
            for cell in row.findall("main:c", NS):
                index = col_to_index(cell.attrib.get("r", "A1"))
                cell_type = cell.attrib.get("t")
                value = ""
                if cell_type == "s":
                    node = cell.find("main:v", NS)
                    if node is not None and node.text is not None:
                        value = shared_strings[int(node.text)]
                elif cell_type == "inlineStr":
                    value = "".join(
                        node.text or "" for node in cell.iterfind(".//main:t", NS)
                    )
                else:
                    node = cell.find("main:v", NS)
                    if node is not None and node.text is not None:
                        value = node.text

                values[index] = value.strip()

            if values:
                row_values = [values.get(i, "") for i in range(max(values) + 1)]
                rows.append(row_values)

        return sheet_name, rows


def normalize_key(header: str) -> str:
    return HEADER_MAP.get(header, header.strip().lower().replace(" ", "_"))


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return re.sub(r"-{2,}", "-", slug)


def split_list(value: str) -> list[str]:
    if not value:
        return []
    parts = re.split(r"[\n,;/|]+", value)
    return [part.strip() for part in parts if part.strip()]


def normalize_template(value: str) -> str:
    normalized = value.lower().strip()
    aliases = {
        "classic": "impact",
        "impact": "impact",
        "interactive": "interactive",
        "showcase": "showcase",
    }
    for key, template in aliases.items():
        if key in normalized:
            return template
    return "impact"


def normalize_theme(value: str) -> str | None:
    normalized = value.lower().strip()
    if not normalized:
        return None

    mapping = {
        "rouge": "red",
        "red": "red",
        "rouge noir blanc": "red",
        "rouge/noir/blanc": "red",
        "bleu": "blue",
        "blue": "blue",
        "vert": "green",
        "green": "green",
        "orange": "orange",
        "violet": "violet",
        "purple": "violet",
        "noir et blanc": "monochrome",
        "black and white": "monochrome",
        "black & white": "monochrome",
        "monochrome": "monochrome",
    }

    for key, theme in mapping.items():
        if key in normalized:
            return theme
    return None


def normalize_instagram(value: str) -> str:
    handle = value.strip()
    handle = re.sub(r"^https?://(www\.)?instagram\.com/", "", handle, flags=re.I)
    handle = handle.lstrip("@").split("/")[0]
    return handle


def normalize_soundcloud(value: str) -> str:
    handle = value.strip()
    handle = re.sub(r"^https?://(www\.)?soundcloud\.com/", "", handle, flags=re.I)
    handle = handle.split("/")[0]
    return handle


def spotify_embed_url(value: str) -> str | None:
    cleaned = value.strip()
    if not cleaned:
        return None
    if "open.spotify.com/embed/" in cleaned:
        return cleaned

    match = re.search(
        r"open\.spotify\.com/(playlist|track|album)/([A-Za-z0-9]+)",
        cleaned,
        flags=re.I,
    )
    if not match:
        return None

    kind, resource_id = match.groups()
    return (
        f"https://open.spotify.com/embed/{kind}/{resource_id}"
        "?utm_source=generator&theme=0"
    )


def sentence_case_lines(value: str) -> list[str]:
    if not value.strip():
        return []
    chunks = re.split(r"\n{2,}|(?<=[.!?])\s+(?=[A-ZÀ-ÿ])", value.strip())
    return [chunk.strip() for chunk in chunks if chunk.strip()]


def replace_config_section(text: str, field_name: str, replacement: str) -> str:
    pattern = rf"({field_name}:\s*)\[[\s\S]*?\](,)"
    return re.sub(pattern, rf"\1{replacement}\2", text, count=1)


def replace_simple_field(text: str, field_name: str, replacement: str, count: int = 1) -> str:
    pattern = rf'({field_name}:\s*)".*?"'
    return re.sub(pattern, rf"\1{json_string(replacement)}", text, count=count)


def json_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def to_ts_array(items: list[str], indent: str = "    ") -> str:
    if not items:
        return "[]"
    lines = [f"{indent}{json_string(item)}," for item in items]
    return "[\n" + "\n".join(lines) + "\n  ]"


def update_generated_config(project_dir: Path, intake: dict[str, object]) -> None:
    config_path = project_dir / "data" / "config.ts"
    if not config_path.exists():
        return

    text = config_path.read_text(encoding="utf-8")

    bio = str(intake.get("bio") or "").strip()
    styles = intake.get("styles_list") or []
    city = str(intake.get("city") or "").strip()
    spotify_embed = intake.get("spotify_embed_url")
    stage_label = str(intake.get("stage_label") or "").strip()
    meta_description = str(intake.get("meta_description") or "").strip()
    about_title = str(intake.get("about_title") or "").strip()
    signature_label = str(intake.get("signature_label") or "").strip()
    signature_quote = str(intake.get("signature_quote") or "").strip()
    supporting_text = str(intake.get("supporting_text") or "").strip()
    clubs_title = str(intake.get("clubs_title") or "").strip()
    clubs_description = str(intake.get("clubs_description") or "").strip()
    clubs_france = split_list(str(intake.get("clubs_france") or ""))
    clubs_international = split_list(str(intake.get("clubs_international") or ""))
    references = split_list(str(intake.get("references") or ""))
    sound_title = str(intake.get("sound_title") or "").strip()
    sound_cta_label = str(intake.get("sound_cta_label") or "").strip()
    sound_paragraphs = [
        paragraph
        for paragraph in [
            str(intake.get("sound_paragraph_1") or "").strip(),
            str(intake.get("sound_paragraph_2") or "").strip(),
            str(intake.get("sound_paragraph_3") or "").strip(),
        ]
        if paragraph
    ]
    spotify_description = str(intake.get("spotify_description") or "").strip()
    brands_title = str(intake.get("brands_title") or "").strip()
    brands_intro = str(intake.get("brands_intro") or "").strip()
    brands_supporting_text = str(intake.get("brands_supporting_text") or "").strip()
    brand_items = split_list(str(intake.get("brand_items") or ""))
    brands_fit_title = str(intake.get("brands_fit_title") or "").strip()
    brands_fit_points = split_list(str(intake.get("brands_fit_points") or ""))
    contact_title = str(intake.get("contact_title") or "").strip()
    contact_description = str(intake.get("contact_description") or "").strip()

    if stage_label:
        text = re.sub(
            r'stageLabel: ".*?"',
            f'stageLabel: {json_string(stage_label)}',
            text,
            count=1,
        )
    elif city:
        generated_stage_label = f'DJ • {city} • Open Format Energy'
        text = re.sub(
            r'stageLabel: ".*?"',
            f'stageLabel: {json_string(generated_stage_label)}',
            text,
            count=1,
        )

    if meta_description:
        text = replace_simple_field(text, "description", meta_description, count=1)

    if styles:
        text = replace_config_section(text, "tags", to_ts_array(styles))

    if bio:
        paragraphs = sentence_case_lines(bio)
        if paragraphs:
            text = replace_config_section(text, "paragraphs", to_ts_array(paragraphs))

    if about_title:
        text = replace_simple_field(text, "title", about_title, count=1)

    if signature_label:
        text = replace_simple_field(text, "signatureLabel", signature_label)

    if signature_quote:
        text = replace_simple_field(text, "signatureQuote", signature_quote)

    if supporting_text:
        text = replace_simple_field(text, "supportingText", supporting_text)

    if clubs_title:
        text = replace_simple_field(text, "title", clubs_title, count=1)

    if clubs_description:
        text = replace_simple_field(text, "description", clubs_description, count=1)

    if clubs_france:
        text = re.sub(
            r'(title: "France",\s*icon: "map-pin",\s*items:\s*)\[[\s\S]*?\](\s*\},)',
            rf"\1{to_ts_array(clubs_france, indent='          ')}\2",
            text,
            count=1,
        )
    elif references:
        text = re.sub(
            r'(title: "France",\s*icon: "map-pin",\s*items:\s*)\[[\s\S]*?\](\s*\},)',
            rf"\1{to_ts_array(references, indent='          ')}\2",
            text,
            count=1,
        )

    if clubs_international:
        text = re.sub(
            r'(title: "International",\s*icon: "globe",\s*items:\s*)\[[\s\S]*?\](\s*\},)',
            rf"\1{to_ts_array(clubs_international, indent='          ')}\2",
            text,
            count=1,
        )

    if sound_title:
        text = replace_simple_field(text, "title", sound_title, count=1)

    if sound_paragraphs:
        text = replace_config_section(text, "paragraphs", to_ts_array(sound_paragraphs))

    if sound_cta_label:
        text = replace_simple_field(text, "label", sound_cta_label, count=1)

    if spotify_embed:
        text = re.sub(
            r'embedUrl:\s*"https://open\.spotify\.com/embed/playlist/[^"]+"',
            f'embedUrl: {json_string(str(spotify_embed))}',
            text,
            count=1,
        )

    if spotify_description:
        text = re.sub(
            r'(spotify:\s*\{[\s\S]*?description:\s*)".*?"',
            rf"\1{json_string(spotify_description)}",
            text,
            count=1,
        )

    if brands_title:
        text = re.sub(
            r'(brands:\s*\{[\s\S]*?title:\s*)".*?"',
            rf"\1{json_string(brands_title)}",
            text,
            count=1,
        )

    if brands_intro:
        text = re.sub(
            r'(brands:\s*\{[\s\S]*?intro:\s*)".*?"',
            rf"\1{json_string(brands_intro)}",
            text,
            count=1,
        )

    if brands_supporting_text:
        text = re.sub(
            r'(brands:\s*\{[\s\S]*?supportingText:\s*)".*?"',
            rf"\1{json_string(brands_supporting_text)}",
            text,
            count=1,
        )

    if brand_items:
        text = re.sub(
            r'(brands:\s*\{[\s\S]*?items:\s*)\[[\s\S]*?\](\s*,\s*fit:)',
            rf"\1{to_ts_array(brand_items, indent='      ')}\2",
            text,
            count=1,
        )

    if brands_fit_title:
        text = re.sub(
            r'(fit:\s*\{[\s\S]*?title:\s*)".*?"',
            rf"\1{json_string(brands_fit_title)}",
            text,
            count=1,
        )

    if brands_fit_points:
        text = re.sub(
            r'(fit:\s*\{[\s\S]*?points:\s*)\[[\s\S]*?\](\s*\}\s*,\s*\},)',
            rf"\1{to_ts_array(brands_fit_points, indent='        ')}\2",
            text,
            count=1,
        )

    if contact_title:
        text = re.sub(
            r'(contact:\s*\{[\s\S]*?title:\s*)".*?"',
            rf"\1{json_string(contact_title)}",
            text,
            count=1,
        )

    if contact_description:
        text = re.sub(
            r'(contact:\s*\{[\s\S]*?description:\s*)".*?"',
            rf"\1{json_string(contact_description)}",
            text,
            count=1,
        )

    config_path.write_text(text, encoding="utf-8")


def write_intake_files(
    project_dir: Path, intake: dict[str, object], intake_config: dict[str, object]
) -> None:
    data_dir = project_dir / "data"
    data_dir.mkdir(parents=True, exist_ok=True)

    intake_json = data_dir / "client-intake.json"
    intake_json.write_text(
        json.dumps(intake, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )

    google_apps_script = intake_config.get("google_apps_script") or {}
    import_workflow = intake_config.get("import_workflow") or {}

    summary = project_dir / "CLIENT_INTAKE.md"
    lines = [
        "# Client Intake",
        "",
        f"- Artist: {intake.get('artist_name') or 'N/A'}",
        f"- Template: {intake.get('template') or 'impact'}",
        f"- Theme: {intake.get('theme') or 'default'}",
        f"- Email: {intake.get('email') or 'N/A'}",
        f"- Booking email: {intake.get('booking_email') or 'N/A'}",
        f"- Phone: {intake.get('phone') or 'N/A'}",
        f"- Instagram: {intake.get('instagram') or 'N/A'}",
        f"- SoundCloud: {intake.get('soundcloud') or intake.get('soundcloud_public') or 'N/A'}",
        f"- City / Zone: {intake.get('city') or 'N/A'}",
        "",
        "## Workflow",
        "",
        f"- Source: {intake_config.get('source') or 'google-form'}",
        f"- Apps Script project: {google_apps_script.get('project_directory') or 'N/A'}",
        f"- Script file: {google_apps_script.get('script_file') or 'N/A'}",
        f"- Manifest file: {google_apps_script.get('manifest_file') or 'N/A'}",
        f"- Import command: {import_workflow.get('command') or 'N/A'}",
        "",
        "## Content To Review",
        "",
        f"- Styles: {', '.join(intake.get('styles_list') or []) or 'N/A'}",
        f"- Event types: {', '.join(intake.get('event_types_list') or []) or 'N/A'}",
        f"- Spotify: {intake.get('spotify') or 'N/A'}",
        f"- Media links: {intake.get('media_links') or 'N/A'}",
        f"- Logo: {intake.get('logo') or 'N/A'}",
        f"- Photos HD: {intake.get('photos_hd') or 'N/A'}",
        "",
        "## Bio",
        "",
        str(intake.get("bio") or "N/A"),
        "",
        "## References",
        "",
        str(intake.get("references") or "N/A"),
        "",
        "## Additional Message",
        "",
        str(intake.get("extra_message") or "N/A"),
        "",
    ]
    summary.write_text("\n".join(lines), encoding="utf-8")


def normalize_row(headers: list[str], row: list[str], row_number: int) -> dict[str, object]:
    record: dict[str, object] = {"row_number": row_number}

    for index, header in enumerate(headers):
        key = normalize_key(header)
        value = row[index].strip() if index < len(row) else ""
        record[key] = value

    artist_name = str(record.get("artist_name") or "").strip()
    if not artist_name:
        raise ValueError(f"Row {row_number} does not include an artist name")

    booking_email = str(record.get("booking_email") or "").strip()
    email = str(record.get("email") or "").strip()
    instagram = normalize_instagram(str(record.get("instagram") or ""))
    if not instagram:
        instagram = normalize_instagram(str(record.get("instagram_public") or ""))
    soundcloud = normalize_soundcloud(str(record.get("soundcloud") or ""))
    if not soundcloud:
        soundcloud = normalize_soundcloud(str(record.get("soundcloud_public") or ""))
    styles_list = split_list(str(record.get("styles") or ""))
    event_types_list = split_list(str(record.get("event_types") or ""))

    record["artist_slug"] = slugify(artist_name)
    record["template"] = normalize_template(str(record.get("template_choice") or ""))
    record["theme"] = normalize_theme(str(record.get("theme_choice") or ""))
    record["email"] = email
    record["booking_email"] = booking_email or email
    record["instagram"] = instagram
    record["soundcloud"] = soundcloud
    record["styles_list"] = styles_list
    record["event_types_list"] = event_types_list
    record["spotify_embed_url"] = spotify_embed_url(str(record.get("spotify") or ""))
    return record


def run_create_script(intake: dict[str, object], destination: str | None) -> Path:
    template = str(intake["template"])
    artist_name = str(intake["artist_name"])
    command = [
        str(REPO_DIR / "scripts" / "create-client-press-kit.sh"),
        template,
        artist_name,
    ]
    if destination:
        command.append(destination)

    if intake.get("booking_email"):
        command.extend(["--email", str(intake["booking_email"])])
    if intake.get("phone"):
        command.extend(["--phone", str(intake["phone"])])
    if intake.get("instagram"):
        command.extend(["--instagram", str(intake["instagram"])])
    if intake.get("soundcloud"):
        command.extend(["--soundcloud", str(intake["soundcloud"])])
    if intake.get("theme"):
        command.extend(["--theme", str(intake["theme"])])

    subprocess.run(command, check=True, cwd=REPO_DIR)

    if destination:
        return Path(destination).expanduser().resolve()
    return (REPO_DIR.parent / f"{intake['artist_slug']}-press-kit").resolve()


def main() -> int:
    args = parse_args()
    intake_config = load_client_intake_config()
    xlsx_path = Path(args.xlsx_path).expanduser().resolve()
    if not xlsx_path.exists():
        print(f"File not found: {xlsx_path}", file=sys.stderr)
        return 1

    _, rows = read_xlsx_rows(xlsx_path)
    if len(rows) <= 1:
        print("No client responses found in this workbook yet.", file=sys.stderr)
        return 1

    headers = rows[0]
    response_rows = rows[1:]

    if args.row is None:
        row_index = len(response_rows) - 1
    else:
        row_index = args.row - 1
        if row_index < 0 or row_index >= len(response_rows):
            print(
                f"Invalid --row value {args.row}. Workbook has {len(response_rows)} response(s).",
                file=sys.stderr,
            )
            return 1

    intake = normalize_row(headers, response_rows[row_index], row_index + 1)

    if args.dry_run:
        print(json.dumps(intake, indent=2, ensure_ascii=False))
        return 0

    project_dir = run_create_script(intake, args.destination)
    write_intake_files(project_dir, intake, intake_config)
    update_generated_config(project_dir, intake)

    import_workflow = intake_config.get("import_workflow") or {}
    output_files = import_workflow.get("output_files") or [
        "data/client-intake.json",
        "CLIENT_INTAKE.md",
        "data/config.ts",
    ]

    print("")
    print("Client form imported successfully.")
    print("")
    print(f"Artist:   {intake['artist_name']}")
    print(f"Template: {intake['template']}")
    print(f"Theme:    {intake.get('theme') or 'default'}")
    print(f"Project:  {project_dir}")
    print("")
    print("Generated:")
    print("  - project scaffold from selected template")
    print("  - prefilled contact and theme options")
    print("  - initial config adjustments for stage label, bio, tags and Spotify")
    for output_file in output_files:
        print(f"  - {output_file}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
