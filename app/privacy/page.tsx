import { LegalLayout, legalMetadata } from "@/components/LegalLayout";
import { COMPANY } from "@/lib/constants/company";
import { SITES } from "@/lib/constants/sites";

export const metadata = legalMetadata(
  "Privacy Policy",
  "How EndEdge collects, uses, and protects your personal information.",
);

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        {COMPANY.legalName} (&quot;EndEdge&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy.
        This policy explains what information we collect when you visit {COMPANY.website}, use our
        AI readiness assessment, or contact us, and how we use it.
      </p>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">Information we collect</h2>
        <ul className="list-disc space-y-2 pl-5 text-mist/85">
          <li>
            <strong className="text-mist">Contact details</strong> — name, email address, company
            name, and message content when you reach out or request a consultation.
          </li>
          <li>
            <strong className="text-mist">Assessment inputs</strong> — answers you provide in our AI
            readiness tool. These are processed to generate a summary recommendation.
          </li>
          <li>
            <strong className="text-mist">Technical data</strong> — IP address, browser type, pages
            visited, and similar usage data collected through standard server logs and analytics.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">How we use information</h2>
        <ul className="list-disc space-y-2 pl-5 text-mist/85">
          <li>Respond to inquiries and deliver requested services.</li>
          <li>Operate and improve our website and assessment experience.</li>
          <li>Send service-related communications you have requested.</li>
          <li>Meet legal, security, and fraud-prevention obligations.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">AI assessment processing</h2>
        <p>
          When you use the AI readiness assessment, your inputs may be sent to a third-party AI
          provider to generate a response. We do not use assessment content to train public models.
          Do not submit confidential or sensitive personal data in free-text fields.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">Hosting services</h2>
        <p>
          If you purchase VPS hosting through our portal at{" "}
          <a href={SITES.portal} className="text-orange hover:underline">
            {SITES.portal.replace("https://", "")}
          </a>
          , additional account, billing, and infrastructure data is processed under our hosting
          terms. See the portal&apos;s Terms of Service for subscription-specific details.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">Data retention</h2>
        <p>
          We retain information only as long as needed for the purposes above, unless a longer
          period is required by law. You may request deletion of contact records by emailing us.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-lg font-semibold text-mist">Your rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, delete, or restrict
          processing of your personal data. Contact {COMPANY.email} to exercise these rights.
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
