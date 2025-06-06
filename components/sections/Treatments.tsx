export default function Treatments() {
  const treatments = [
    {
      title: "Express Facial",
      description: "Quick yet effective refresh for your skin.",
      duration: "60 min",
      price: "$110",
    },
    {
      title: "Oxy-Facial with LED",
      description: "Deep hydration and rejuvenation with LED.",
      duration: "60 min",
      price: "$135",
    },
    {
      title: "Dermaplane Facial",
      description: "Ultra-smooth complexion and enhanced product absorption.",
      duration: "60 min",
      price: "$135",
    },
    {
      title: "Hydro-Facial with LED",
      description: "Cleanse, exfoliate, and hydrate for a radiant look.",
      duration: "60 min",
      price: "$145",
    },
    {
      title: "Chemical Peel",
      description: "Customized exfoliation for improved texture and tone.",
      duration: "45 min",
      price: "$99–$125",
    },
    {
      title: "Body Peel",
      description: "Targeted peel for body areas to smooth and brighten.",
      duration: "45 min",
      price: "$99–$250",
    },
    {
      title: "BioRePeel",
      description: "Powerful yet gentle peel for rejuvenation.",
      duration: "45 min",
      price: "$150–$500",
    },
    {
      title: "Lash Lift & Tint",
      description: "Beautiful curl and definition for your lashes.",
      duration: "45 min",
      price: "$125",
    },
    {
      title: "Brow Lamination",
      description: "Perfectly shaped, full brows.",
      duration: "30 min",
      price: "$80",
    },
    {
      title: "Lash Lift & Tint with Brow Lamination",
      description: "Dramatic effect for lashes and brows.",
      duration: "60 min",
      price: "$195",
    },
    {
      title: "Nano-Infusion Treatment",
      description: "Potent serums for hydration and texture.",
      duration: "60 min",
      price: "$150–$500",
    },
  ];

  return (
    <section className="px-4 py-24 bg-gradient-to-br from-white via-pink-100 to-[#e0f7fa] dark:from-black dark:via-pink-200 dark:to-[#181823] border-b-2 border-pink-300 shadow-md" id="treatments">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-[#182D20] dark:text-pink-200 text-center" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800 }}>Our Treatments</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <div
              key={treatment.title}
              className="rounded-lg border border-gray-200 p-6 dark:border-gray-800"
            >
              <h3 className="mb-2 text-xl font-semibold flex items-center justify-between">
                {treatment.title}
                <span className="text-lg font-bold text-[#182D20] dark:text-pink-200 ml-2">{treatment.price}</span>
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {treatment.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {treatment.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 