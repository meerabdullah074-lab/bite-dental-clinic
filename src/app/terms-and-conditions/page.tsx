import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteConfig.name}`,
  description: `The terms governing your use of the ${siteConfig.name} website and our clinic's appointment and treatment policies.`,
};

const LAST_UPDATED = "August 22, 2026";

/**
 * Terms & Conditions — genuine, complete terms content covering website
 * use plus real clinic policies (booking, cancellation, medical
 * disclaimer). Should be reviewed by the clinic's own legal counsel
 * before launch, same as any real business's terms page.
 */
export default function TermsAndConditionsPage() {
  return (
    <SectionContainer>
      <PageHeader title="Terms &amp; Conditions" className="mb-4" />
      <p className="mx-auto max-w-[760px] text-center text-sm text-text-secondary">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="legal-content mx-auto mt-12 max-w-[760px]">
        <h2>Agreement to Terms</h2>
        <p>
          By using the {siteConfig.name} website or booking an
          appointment with us, you agree to the terms set out below. If
          you do not agree with any part of these terms, please contact
          us before booking.
        </p>

        <h2>Appointments &amp; Booking</h2>
        <p>
          Appointments can be requested via WhatsApp, phone, or our
          website. A requested time slot is not confirmed until you
          receive an explicit confirmation from our team — please wait
          for confirmation before making other arrangements around your
          visit.
        </p>

        <h2>Cancellations &amp; Rescheduling</h2>
        <p>
          We understand plans change. We kindly ask that you give us at
          least 24 hours&apos; notice if you need to cancel or reschedule,
          so we can offer that time to another patient. Repeated
          last-minute cancellations or no-shows may affect our ability to
          offer you priority booking in the future.
        </p>

        <h2>Pricing &amp; Payment</h2>
        <p>
          Starting prices listed on our website and service pages are
          approximate and intended as a general guide. Your exact
          treatment cost will be confirmed in writing after an
          in-person examination, since final pricing depends on your
          specific condition and treatment plan. Payment is due at the
          time of treatment unless a payment plan has been agreed in
          advance for larger procedures.
        </p>

        <h2>Medical Disclaimer</h2>
        <p>
          The content on this website — including service descriptions,
          FAQs, and blog content if published — is provided for general
          informational purposes only and does not constitute
          professional dental or medical advice. It is not a substitute
          for an in-person consultation and examination. Always seek the
          advice of a qualified dental professional regarding any
          dental condition or before beginning any treatment.
        </p>

        <h2>Treatment Outcomes</h2>
        <p>
          While we use modern techniques and take care to explain
          expected outcomes before treatment, individual results can
          vary based on each patient&apos;s condition, compliance with
          aftercare instructions, and other factors outside our control.
          Before-and-after images shown on our website represent actual
          results from real cases but are not a guarantee of identical
          results for every patient.
        </p>

        <h2>Website Use</h2>
        <p>
          You agree to use this website only for lawful purposes and in
          a way that does not infringe the rights of, or restrict or
          inhibit the use and enjoyment of, this site by anyone else.
          Content on this site — including text, images, and design — is
          the property of {siteConfig.name} and may not be reproduced
          without permission.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law,{" "}
          {siteConfig.name} shall not be liable for any indirect,
          incidental, or consequential damages arising from your use of
          this website or reliance on information presented on it.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the Islamic Republic
          of Pakistan. Any disputes arising from these terms or your use
          of our services will be subject to the jurisdiction of the
          courts of Islamabad, Pakistan.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may revise these terms from time to time. The &ldquo;Last
          updated&rdquo; date above reflects the most recent changes.
          Continued use of our website or services after changes are
          posted constitutes acceptance of the updated terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about these Terms &amp; Conditions can be directed to{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>{" "}
          or {siteConfig.contact.phone}.
        </p>
      </div>
    </SectionContainer>
  );
}
