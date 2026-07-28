# -*- coding: utf-8 -*-
"""Generate lib/content/insights.ts from scripts/_articles.json."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
arts = json.loads((ROOT / "scripts" / "_articles.json").read_text(encoding="utf-8"))

CATEGORY_LABELS = {
    "ERP & E-INVOICING": ("ERP & E-Invoicing", "تخطيط الموارد والفوترة الإلكترونية"),
    "AI AUTOMATION (READINESS TOOL)": ("AI Automation", "أتمتة الذكاء الاصطناعي"),
    "AI AUTOMATION": ("AI Automation", "أتمتة الذكاء الاصطناعي"),
    "CLOUD INFRASTRUCTURE": ("Cloud Infrastructure", "البنية التحتية السحابية"),
    "MANAGED IT": ("Managed IT", "تقنية المعلومات المُدارة"),
    "POSITIONING / THOUGHT LEADERSHIP": ("Thought Leadership", "رؤية قيادية"),
    "BANKING & FINANCE": ("Banking & Finance", "البنوك والمالية"),
    "ERP": ("ERP", "تخطيط موارد المؤسسات"),
    "WEB, MOBILE & SOFTWARE": ("Web & Mobile", "الويب والجوال"),
}

RELATED = {
    1: "/services/erp-e-invoicing",
    2: "/#assessment",
    3: "/services/ai-automation",
    4: "/case-studies#government-portal-kubernetes-migration",
    5: "/services/managed-it",
    6: "/case-studies#arabic-media-document-intelligence",
    7: "/#contact",
    8: "/case-studies#central-bank-cheque-clearing",
    9: "/services/erp-e-invoicing",
    10: "/services/web-mobile-development",
}

# Fix related slugs - need to check actual case study slugs
# Will verify after generating


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)


def emit_locale(locale: str) -> str:
    lines = []
    for a in arts:
        loc = a[locale]
        cat_en, cat_ar = CATEGORY_LABELS[a["category"]]
        cat = cat_ar if locale == "ar" else cat_en
        related = RELATED[a["num"]]
        lines.append("  {")
        lines.append(f"    slug: {esc(a['slug'])},")
        lines.append(f"    category: {esc(cat)},")
        lines.append(f"    relatedPath: {esc(related)},")
        lines.append(f"    title: {esc(loc['title'])},")
        lines.append(f"    intro: {esc(loc['intro'])},")
        lines.append("    sections: [")
        for s in loc["sections"]:
            lines.append("      {")
            lines.append(f"        heading: {esc(s['heading'])},")
            paras = ", ".join(esc(p) for p in s["paras"])
            lines.append(f"        paras: [{paras}],")
            lines.append("      },")
        lines.append("    ],")
        lines.append(f"    closing: {esc(loc['closing'])},")
        lines.append("  },")
    return "\n".join(lines)


out = f'''import type {{ Locale }} from "@/lib/i18n/config";

export type InsightSection = {{
  heading: string;
  paras: string[];
}};

export type InsightArticle = {{
  slug: string;
  category: string;
  relatedPath: string;
  title: string;
  intro: string;
  sections: InsightSection[];
  closing: string;
}};

const en: InsightArticle[] = [
{emit_locale("en")}
];

const ar: InsightArticle[] = [
{emit_locale("ar")}
];

export function getInsightArticles(locale: Locale): InsightArticle[] {{
  return locale === "ar" ? ar : en;
}}

export function getInsightArticle(
  locale: Locale,
  slug: string,
): InsightArticle | undefined {{
  return getInsightArticles(locale).find((a) => a.slug === slug);
}}

export function getInsightSlugs(): string[] {{
  return en.map((a) => a.slug);
}}
'''

target = ROOT / "lib" / "content" / "insights.ts"
target.write_text(out, encoding="utf-8")
print(f"Wrote {target} ({target.stat().st_size} bytes)")
