import Accordion from "../ui/Accordion";

export default function Policies() {
  const policies = [
    {
      title: "Post-Treatment Care Instructions",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li><b>Avoid Sun Exposure:</b> Protect your skin from direct sunlight for at least 48 hours post-treatment. Use a broad-spectrum sunscreen with SPF 30 or higher if sun exposure cannot be avoided.</li>
          <li><b>Keep Skin Hydrated:</b> Drink plenty of water to keep your skin hydrated from the inside out. Apply a gentle, non-comedogenic moisturizer to the treated area as needed to prevent dryness and promote healing.</li>
          <li><b>Avoid Harsh Products:</b> Refrain from using harsh skincare products, exfoliants, or abrasive scrubs on the treated area for at least one week post-treatment. Stick to gentle, non-irritating skincare products to avoid irritation or inflammation.</li>
          <li><b>Avoid Touching or Picking:</b> Resist the urge to touch or pick at the treated area to prevent infection or scarring. Let your skin heal naturally without interference.</li>
          <li><b>Follow Specific Instructions:</b> If your skincare provider provided specific post-treatment instructions or recommendations, follow them carefully to optimize results and minimize any potential complications.</li>
          <li><b>Stay Cool:</b> Avoid activities that may cause excessive sweating or heat exposure, such as strenuous exercise, saunas, or hot tubs, for at least 48 hours post-treatment. Heat can exacerbate inflammation and irritation.</li>
          <li><b>Monitor for Side Effects:</b> Keep an eye out for any unusual or adverse reactions, such as excessive redness, swelling, itching, or blistering. If you experience any concerning symptoms, contact your skincare provider immediately.</li>
          <li><b>Follow-Up Appointment:</b> Schedule a follow-up appointment with your skincare provider as recommended to assess treatment outcomes, address any concerns, and determine if additional sessions are needed.</li>
        </ul>
      ),
    },
    {
      title: "Pre-Paid Services Expiration",
      content: (
        <span>
          All pre-paid services have a <b>1-year expiration</b> from the date of purchase. We encourage you to schedule your treatments within this timeframe to fully enjoy your benefits.<br /><br />
          <b>Disclosure:</b> Expired pre-paid services are non-refundable and cannot be redeemed or transferred. Clients will be notified 30 days prior to expiration as a courtesy, but it is the client's responsibility to schedule services within the 1-year period.
        </span>
      ),
    },
    {
      title: "Missed Membership Treatments",
      content: (
        <span>
          If a member misses a month of treatment, there is a <b>30-day grace period</b> to schedule a make-up session. Please contact us promptly to reschedule within this window to avoid forfeiting the session.
        </span>
      ),
    },
    {
      title: "Good Faith Exam for Medical Services",
      content: (
        <span>
          For all medical services, clients must complete a <b>"Good Faith Exam"</b> with our Medical Director prior to treatment. This ensures your safety and compliance with medical standards.<br /><br />
          <b>Disclosure:</b> The Good Faith Exam is a legal requirement for medical treatments like microneedling, dermaplaning or peels. If a client is deemed unsuitable for treatment based on the exam, no service will be provided, and pre-paid fees may be credited toward alternative services at our discretion.
        </span>
      ),
    },
    {
      title: "Initial Consultation Requirement",
      content: (
        <span>
          All new clients (excluding lash service clients) are required to have an initial consultation prior to receiving services. This helps us tailor treatments to your unique needs and ensures the best possible experience.<br /><br />
          <b>Disclosure:</b> The initial consultation is mandatory to assess skin conditions and medical history. Failure to complete the consultation may result in delayed or canceled services without refund. Consultations are complimentary but require scheduling in advance.
        </span>
      ),
    },
    {
      title: "Right to Refuse Service",
      content: (
        <span>
          Muse Aesthetic Studio reserves the right to refuse service to any client at our discretion, ensuring a safe and respectful environment for our staff and other clients.<br /><br />
          <b>Disclosure:</b> Service may be refused due to inappropriate behavior, non-compliance with health and safety protocols, or conditions that pose a risk to staff or clients. No refunds will be issued for services denied under this policy, and clients may be asked to leave the premises.
        </span>
      ),
    },
  ];

  return (
    <section id="policies" className="px-4 py-24 bg-white dark:bg-black border-b-2 border-pink-300 shadow-md">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-4xl font-extrabold text-[#182D20] dark:text-pink-200" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>
            Our Policies
          </h2>
          <div className="space-y-4">
            {policies.map((policy) => (
              <Accordion
                key={policy.title}
                title={policy.title}
                content={policy.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
