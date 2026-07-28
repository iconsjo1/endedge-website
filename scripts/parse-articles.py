# -*- coding: utf-8 -*-
"""Parse EndEdge_10_Full_Articles_EN_AR.docx into structured JSON."""
import zipfile
import xml.etree.ElementTree as ET
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCX = ROOT / "EndEdge_10_Full_Articles_EN_AR.docx"
OUT = ROOT / "scripts" / "_articles.json"

SLUGS = {
    1: "uae-e-invoicing-30-october-deadline",
    2: "ai-ready-how-to-actually-check",
    3: "arabic-first-ai-architecture",
    4: "zero-downtime-migration-20000-users",
    5: "hidden-cost-of-good-enough-managed-it",
    6: "rag-vs-chatbots-document-intelligence",
    7: "five-vendors-end-to-end-accountability",
    8: "banking-grade-compliance-ops-lessons",
    9: "erpnext-or-custom-build-uae",
    10: "apps-that-survive-peak-traffic",
}

SERVICE_SLUGS = {
    "ERP & E-INVOICING": "erp-e-invoicing",
    "AI AUTOMATION (READINESS TOOL)": "ai-automation",
    "AI AUTOMATION": "ai-automation",
    "CLOUD INFRASTRUCTURE": "cloud-infrastructure",
    "MANAGED IT": "managed-it",
    "POSITIONING / THOUGHT LEADERSHIP": None,
    "BANKING & FINANCE": "case-studies",
    "ERP": "erp-e-invoicing",
    "WEB, MOBILE & SOFTWARE": "web-mobile-development",
}


def extract_paras(path: Path) -> list[str]:
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml")
    root = ET.fromstring(xml)
    ns = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
    paras = []
    for p in root.iter(f"{ns}p"):
        texts = [t.text or "" for t in p.iter(f"{ns}t")]
        line = "".join(texts).strip()
        if line:
            paras.append(line)
    return paras


def split_sections(lines: list[str]) -> tuple[str, list[dict], str]:
    """Split body lines into intro, sections[{heading,paras}], closing."""
    if not lines:
        return "", [], ""

    # First line(s) until a short heading: intro is first para(s)
    # Headings in this doc are typically Title Case / short Arabic titles
    # without trailing period sometimes, shorter than body paras.
    # Pattern from doc: intro (1 long para), then alternating heading + body para(s),
    # ending with Closing / الخاتمة + closing para.

    closing_markers = {"Closing", "الخاتمة"}
    intro = ""
    sections: list[dict] = []
    closing = ""

    # Known: first element is always intro
    intro = lines[0]
    i = 1
    current_heading = None
    current_paras: list[str] = []

    def flush():
        nonlocal current_heading, current_paras
        if current_heading is not None:
            sections.append({"heading": current_heading, "paras": current_paras[:]})
        current_heading = None
        current_paras = []

    while i < len(lines):
        line = lines[i]
        if line in closing_markers:
            flush()
            # next line is closing body
            if i + 1 < len(lines):
                closing = lines[i + 1]
            break
        # Heuristic: a heading is shorter than 90 chars and not ending mid-thought
        # OR we treat odd-index after intro as heading if next exists
        # Looking at structure: heading, then 1 body para, repeat
        # So alternate starting with heading
        if current_heading is None:
            current_heading = line
            current_paras = []
        else:
            # If this looks like a new heading (short) and we already have a para,
            # flush and start new
            is_short = len(line) < 90
            looks_heading = is_short and not line.endswith((".", "?", "!", "؟", "۔"))
            # Arabic headings often don't end with period; body does
            if looks_heading and current_paras:
                flush()
                current_heading = line
                current_paras = []
            else:
                current_paras.append(line)
        i += 1
    else:
        flush()

    return intro, sections, closing


def parse(paras: list[str]) -> list[dict]:
    articles = []
    i = 0
    while i < len(paras) and not re.match(r"^\d+\. ", paras[i]):
        i += 1

    while i < len(paras):
        m = re.match(r"^(\d+)\. (.+)$", paras[i])
        if not m:
            i += 1
            continue
        num = int(m.group(1))
        en_title = m.group(2)
        i += 1
        category = paras[i]
        i += 1
        assert paras[i] == "ENGLISH", f"Expected ENGLISH at {i}: {paras[i]}"
        i += 1

        en_lines = []
        while i < len(paras) and paras[i] != "العربية" and not re.match(r"^\d+\. ", paras[i]):
            en_lines.append(paras[i])
            i += 1

        assert paras[i] == "العربية", f"Expected العربية at {i}: {paras[i]}"
        i += 1
        ar_title = paras[i]
        i += 1

        ar_lines = []
        while i < len(paras) and not re.match(r"^\d+\. ", paras[i]):
            ar_lines.append(paras[i])
            i += 1

        en_intro, en_sections, en_closing = split_sections(en_lines)
        ar_intro, ar_sections, ar_closing = split_sections(ar_lines)

        articles.append(
            {
                "num": num,
                "slug": SLUGS[num],
                "category": category,
                "serviceSlug": SERVICE_SLUGS.get(category),
                "en": {
                    "title": en_title,
                    "intro": en_intro,
                    "sections": en_sections,
                    "closing": en_closing,
                },
                "ar": {
                    "title": ar_title,
                    "intro": ar_intro,
                    "sections": ar_sections,
                    "closing": ar_closing,
                },
            }
        )
    return articles


def main():
    paras = extract_paras(DOCX)
    articles = parse(paras)
    OUT.write_text(json.dumps(articles, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(articles)} articles to {OUT}")
    for a in articles:
        print(
            f"  {a['num']}. {a['slug']} | en sections={len(a['en']['sections'])} ar sections={len(a['ar']['sections'])}"
        )
        print(f"     EN title: {a['en']['title'][:60]}")
        print(f"     AR title: {a['ar']['title'][:60]}")
        for s in a["en"]["sections"]:
            print(f"       - {s['heading'][:70]} ({len(s['paras'])}p)")


if __name__ == "__main__":
    main()
