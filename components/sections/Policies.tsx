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
      title: "Refund Policy",
      content:
        "We strive for your complete satisfaction. If you're not happy with our services, please let us know within 7 days and we'll work to make it right.",
    },
    {
      title: "Late Arrival Policy",
      content:
        "If you arrive late, your session may need to be shortened to accommodate other scheduled appointments. Full service fees will still apply.",
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
