'use client';

export default function Booking() {
  return (
    <section id="booking" className="bg-black px-4 py-24 text-white dark:bg-white dark:text-black">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Book Your Appointment</h2>
          <p className="mb-12 text-lg opacity-90">
            Ready to experience our services? Book your appointment now and take the
            first step towards achieving your aesthetic goals.
          </p>
          <button
            className="rounded-full bg-white px-8 py-3 text-lg font-medium text-black transition-colors hover:bg-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-800"
            onClick={() => {
              // Add your booking functionality here
              alert("Booking functionality will be implemented soon!");
            }}
          >
            Schedule Now
          </button>
        </div>
      </div>
    </section>
  );
}
