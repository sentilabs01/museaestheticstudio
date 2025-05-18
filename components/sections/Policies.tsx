import Accordion from "../ui/Accordion";

export default function Policies() {
  const policies = [
    {
      title: "Cancellation Policy",
      content:
        "We require at least 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee.",
    },
    {
      title: "Payment Policy",
      content:
        "We accept all major credit cards, cash, and digital payments. Full payment is required at the time of service.",
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
    <section id="policies" className="bg-white px-4 py-24 dark:bg-black">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
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
