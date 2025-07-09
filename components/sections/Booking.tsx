"use client";

import { Button } from "../ui/button";

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
          <Button
            onClick={() => {
              const vagaro = window.Vagaro as { WidgetPopup?: () => void };
              if (vagaro && typeof vagaro.WidgetPopup === 'function') {
                vagaro.WidgetPopup();
              } else {
                window.open('https://www.vagaro.com/museaestheticstudio/book-now', '_blank');
              }
            }}
          >
            Schedule Now
          </Button>
        </div>
      </div>
    </section>
  );
}
