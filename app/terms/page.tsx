import { LegalLayout, legalMetadata } from "@/components/LegalLayout";
import { COMPANY } from "@/lib/constants/company";
import { SITES } from "@/lib/constants/sites";

export const metadata = legalMetadata(
  "Terms of Use",
  "Terms governing use of the EndEdge corporate website and services.",
);

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use">
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to {COMPANY.website} and related
        corporate services offered by {COMPANY.legalName} (&quot;EndEdge&quot;). By using this
        site, you agree to these Terms.
      </p>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">Services</h2>
        <p>
          EndEdge provides enterprise technology services including cloud infrastructure, managed
          IT, AI automation, and software consulting. Specific deliverables, timelines, and fees
          are defined in separate statements of work or service agreements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">Website use</h2>
        <ul className="list-disc space-y-2 pl-5 text-mist/85">
          <li>You may use this website for lawful business purposes only.</li>
          <li>You must not attempt to disrupt, probe, or reverse-engineer our systems.</li>
          <li>Content on this site is provided for general information and may change without notice.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">AI readiness assessment</h2>
        <p>
          Assessment results are informational and do not constitute legal, financial, or
          professional advice. Outputs may be incomplete or inaccurate. You are responsible for
          validating recommendations before acting on them.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">VPS hosting</h2>
        <p>
          VPS hosting subscriptions are governed by the Terms of Service on our hosting portal at{" "}
          <a href={`${SITES.portal}/terms`} className="text-orange hover:underline">
            {SITES.portal.replace("https://", "")}/terms
          </a>
          . Those terms cover billing, acceptable use, uptime commitments, and account management.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">Intellectual property</h2>
        <p>
          EndEdge trademarks, branding, and website content are owned by EndEdge or its licensors.
          You may not copy or reuse materials without prior written permission.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">Disclaimer</h2>
        <p>
          This website and any tools on it are provided &quot;as is&quot; without warranties of any
          kind. To the fullest extent permitted by law, EndEdge is not liable for indirect or
          consequential damages arising from use of this site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">Governing law</h2>
        <p>
          These Terms are governed by the laws of the United Arab Emirates. Disputes shall be
          subject to the exclusive jurisdiction of the courts of Dubai, UAE, unless otherwise
          agreed in writing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">Contact</h2>
        <p>
          {COMPANY.legalName}
          <br />
          {COMPANY.location}
          <br />
          {COMPANY.email}
        </p>
      </section>
    </LegalLayout>
  );
}
