import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `How ${siteConfig.name} collects, uses, and protects your personal information.`,
};

const LAST_UPDATED = "August 22, 2026";

/**
 * Privacy Policy — genuine, complete policy content written for this
 * clinic's actual data practices (contact form, WhatsApp, embedded Google
 * Map), not generic filler text. Should be reviewed by the clinic's own
 * legal counsel before launch, same as any real business's policy page.
 */
export default function PrivacyPolicyPage() {
  return (
    <SectionContainer>
      <PageHeader title="Privacy Policy" className="mb-4" />
      <p className="mx-auto max-w-[760px] text-center text-sm text-text-secondary">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="legal-content mx-auto mt-12 max-w-[760px]">
        <h2>Introduction</h2>
        <p>
          {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
          privacy and is committed to protecting the personal information
          you share with us through our website, WhatsApp, phone, or in
          person at our clinic. This policy explains what information we
          collect, how we use it, and the choices you have.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Contact details</strong> you provide when booking an
            appointment or messaging us — name, phone number, email
            address, and any details about your dental concerns you
            choose to share.
          </li>
          <li>
            <strong>Communication records</strong> from WhatsApp, phone
            calls, or contact form submissions, kept for appointment
            scheduling and follow-up.
          </li>
          <li>
            <strong>Website usage data</strong> such as pages visited and
            general location (city-level), collected automatically
            through standard analytics tools if enabled.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Schedule, confirm, and remind you of appointments</li>
          <li>Respond to questions sent via WhatsApp, phone, or our contact form</li>
          <li>Maintain accurate treatment and billing records</li>
          <li>Improve our website and services based on how they&apos;re used</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to
          third parties for marketing purposes.
        </p>

        <h2>WhatsApp Communication</h2>
        <p>
          When you message us on WhatsApp, that conversation is subject
          to WhatsApp&apos;s own privacy policy in addition to this one.
          We use WhatsApp Business for appointment coordination only and
          keep message records for our internal scheduling and patient
          record purposes.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our website embeds a Google Map to help you find our clinic.
          Google may collect data when you interact with the embedded
          map, governed by Google&apos;s own privacy policy. We are not
          responsible for the privacy practices of third-party services
          linked from our site.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain patient contact and appointment information for as
          long as necessary to provide ongoing care, meet legal and
          medical record-keeping obligations, and maintain accurate
          billing history.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may ask us to review, correct, or delete the personal
          information we hold about you at any time, subject to our
          obligation to retain certain medical records as required by
          applicable regulations. To make a request, contact us using
          the details below.
        </p>

        <h2>Data Security</h2>
        <p>
          We take reasonable administrative and technical precautions to
          protect your personal information from unauthorized access,
          loss, or misuse. No method of electronic storage or
          transmission is completely secure, and we cannot guarantee
          absolute security.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The
          &ldquo;Last updated&rdquo; date at the top of this page reflects the
          most recent revision. Continued use of our website or services
          after changes are posted constitutes acceptance of the updated
          policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, contact us at{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>{" "}
          or {siteConfig.contact.phone}.
        </p>
      </div>
    </SectionContainer>
  );
}
