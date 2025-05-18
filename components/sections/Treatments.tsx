export default function Treatments() {
  const treatments = [
    {
      title: "Treatment 1",
      description: "Description of treatment 1",
      duration: "60 min",
      price: "$100",
    },
    {
      title: "Treatment 2",
      description: "Description of treatment 2",
      duration: "90 min",
      price: "$150",
    },
    {
      title: "Treatment 3",
      description: "Description of treatment 3",
      duration: "120 min",
      price: "$200",
    },
  ];

  return (
    <section className="bg-white px-4 py-24 dark:bg-black" id="treatments">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          Our Treatments
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <div
              key={treatment.title}
              className="rounded-lg border border-gray-200 p-6 dark:border-gray-800"
            >
              <h3 className="mb-2 text-xl font-semibold">{treatment.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {treatment.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {treatment.duration}
                </span>
                <span className="font-semibold">{treatment.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 