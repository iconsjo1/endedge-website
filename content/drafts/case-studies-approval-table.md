# Case Studies — Approval Table (Artifact B)

**Purpose:** Integrity review before publishing. Every study must have an accurate `clientDescriptor`, correct pillar mapping, and an honest **Production** or **Demonstrator** badge.

**Rule:** If we cannot defend the descriptor in a procurement conversation, it does not ship.

---

## Existing studies — integrity audit (5 live today)

Review each against the actual engagement. Proposed status is a starting point for your sign-off.

| # | Slug (current) | Current descriptor | Proposed basis | Label | Audit note — action required |
|---|----------------|-------------------|----------------|-------|------------------------------|
| 1 | `government-portal-kubernetes-migration` | Regional government digital authority | **Confirm:** Which engagement? (Not mapped to your named list.) | **Production** (if confirmed) | ⚠️ Verify: Is this a real government portal migration? If composite/generic, rewrite descriptor or replace with a named anonymized engagement you approve. |
| 2 | `banking-compliance-operations-platform` | Mid-size retail bank (GCC) | **Likely:** CBJ cheque / compliance operations (Jordan) | **Production** | ⚠️ Confirm: Can this be described as "central bank / national payments" without naming CBJ? Current "retail bank" descriptor may be **wrong sector** if this is CBJ. |
| 3 | `arabic-rag-legal-knowledge-assistant` | Regional law firm network | **Confirm:** Separate legal-firm engagement, or conflated with Rasad? | **Production** or **Demonstrator** | ⚠️ Rasad is **Arabic media/document intelligence**, not legal RAG. If this study is Rasad-based, rewrite title + industry. If a distinct legal pilot, keep but verify production status. |
| 4 | `retail-ecommerce-aws-migration` | UAE-based omnichannel retailer | **Confirm:** Named retail client or anonymized composite? | **Production** (if confirmed) | Descriptor passes honesty bar if engagement is real. Confirm anonymization level. |
| 5 | `university-lms-managed-hosting` | Higher-education institution (MENA) | **Likely:** Al-Maarif SIS / school platform | **Production** | ⚠️ Confirm: Al-Maarif mapping? If yes, consider retitling to "School SIS / LMS platform" for accuracy. "University" may overstate if K–12. |

**Your sign-off column:**

| # | Approve as-is? | Revised descriptor (if any) | Revised label |
|---|----------------|------------------------------|---------------|
| 1 | ☐ | | |
| 2 | ☐ | | |
| 3 | ☐ | | |
| 4 | ☐ | | |
| 5 | ☐ | | |

---

## New studies — proposed additions

**Dropped from v1 plan:** ~~ERPNext deployment ← Mizan ← Production~~ — **incorrect twice**. Mizan is not ERP and not production.

| # | Proposed slug | Working title | Based on | Industry | Pillar(s) | Label | Proposed `clientDescriptor` |
|---|---------------|---------------|----------|----------|-----------|-------|----------------------------|
| 6 | `school-sis-platform` | School information system — unified SIS platform | Al-Maarif | Education | Software & Consulting | **Production** | Private school group (Jordan) |
| 7 | `central-bank-cheque-clearing` | National cheque clearing & operations system | CBJ | Banking & Finance | Software & Consulting | **Production** | Central bank / national payments authority (GCC-adjacent) |
| 8 | `telecom-operations-platform` | Telecom operations & billing support platform | VTEL | Telecom | Managed IT / Software | **Production** | Tier-2 telecom operator (MENA) |
| 9 | `industrial-erp-platform` | Industrial ERP — manufacturing operations | **NEI** | Industrial / Manufacturing | **ERP & E-Invoicing** | **Production** | Industrial manufacturer (UAE-adjacent region) |
| 10 | `m365-modern-workplace-migration` | Microsoft 365 migration & security baseline | Mind Clinic | Healthcare / Professional Services | Managed IT | **Production** | Multi-site healthcare group (UAE) |
| 11 | `arabic-media-document-intelligence` | Arabic-first media monitoring & document intelligence | Rasad | Media / Research | AI Automation | **Production** (research-backed) | Media intelligence platform (MENA) |
| 12 | `arabic-multi-agent-rag` | Arabic multi-agent RAG research demonstrator | **Mizan** | Research / AI | AI Automation | **Demonstrator** | Internal research demonstrator (not client production) |
| 13 | `erp-copilot-demonstrator` | ERP copilot — natural-language ERP assistant | **Wakeel** | ERP / AI | AI + ERP | **Demonstrator** | Internal / pilot demonstrator (not client production) |

### NEI proof block (ERP page)

| Item | Status |
|------|--------|
| NEI as production ERP case study (#9) | **Pending your confirmation of ERP scope** — do not publish on ERP service page until approved |
| Mizan on ERP page | **Explicitly excluded** — never reference Mizan on ERP/e-invoicing pages |
| Wakeel on ERP page | Optional mention as **demonstrator** only (AI + ERP intersection), not as production proof |

---

## Label definitions (site-wide)

| Badge | Meaning | Use when |
|-------|---------|----------|
| **Production** | Delivered for a real client or live operational system | Al-Maarif, CBJ, VTEL, NEI (pending), Mind Clinic, Rasad (if production deployment exists) |
| **Demonstrator** | Research, internal, or pilot — not a billed client production system | Mizan, Wakeel |
| **Research-backed** | Optional sub-tag for Production items with published/academic lineage | Rasad (if applicable) |

---

## Priority publish order

1. **Fix existing audit flags** (especially #2 banking sector, #3 Rasad vs legal, #5 Al-Maarif wording) — before adding new studies
2. **Mind Clinic M365** (#10) — supports Managed IT sub-offering page
3. **Rasad** (#11) — supports Arabic Media Intelligence page; clarify distinct from legal RAG study (#3)
4. **Mizan + Wakeel** (#12, #13) — demonstrator badges visible; builds AI credibility without integrity risk
5. **Al-Maarif, CBJ, VTEL** (#6–8) — as anonymization approved
6. **NEI industrial ERP** (#9) — **after ERP scope confirmation**

---

## Conflicts to resolve (your decision)

1. **Study #3 vs #11:** If both exist, #3 (legal RAG) and #11 (Rasad media intelligence) must be clearly different engagements — or merge/retire one.
2. **Study #5 vs #6:** If #5 is Al-Maarif, consider merging into #6 rather than two education studies.
3. **Study #2 vs #7:** If #2 is CBJ, rewrite #2 descriptor rather than duplicating with #7.

---

## Schema change (implementation note)

Add to case study type in [`lib/i18n/types.ts`](lib/i18n/types.ts):

```typescript
engagementType: "production" | "demonstrator";
researchBacked?: boolean; // optional, for Rasad etc.
```

Render badge in [`components/case-studies/CaseStudyArticle.tsx`](components/case-studies/CaseStudyArticle.tsx).

---

**Next:** Artifact C — three-touch outbound sequence (Oct 30 deadline + checklist CTA + page URL).
