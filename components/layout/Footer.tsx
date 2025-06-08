'use client'

export default function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Info and Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div>
                <h3 className="text-lg font-semibold text-[#182D20] dark:text-neutral-200 mb-4" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>
                  Location
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Inside of Salon 12 Suites<br />
                  6828 NE 14th St, Suite 2<br />
                  Ankeny, IA 50023
                </p>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-lg font-semibold text-[#182D20] mb-4">Hours of Operation</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=6828+NE+14th+St,+Suite+2,+Ankeny,+IA+50023&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="bg-neutral-100 dark:bg-black"
              />
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-[#182D20] dark:text-neutral-200 mb-4" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>
                Contact Us
              </h3>
              <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                <p>
                  Phone: <a href="tel:+15155189601" className="hover:text-[#182D20] dark:hover:text-neutral-200">(515) 518-9601</a>
                </p>
                <p>
                  Email: <a href="mailto:info@museaestheticstudio.com" className="hover:text-[#182D20] dark:hover:text-neutral-200">info@museaestheticstudio.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold text-[#182D20] mb-4">Send us a Message</h3>
            <iframe
              id="JotFormIFrame-251028288630153"
              title="Contact Form"
              allowFullScreen={true}
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/251028288630153"
              frameBorder="0"
              style={{
                minWidth: '100%',
                height: '539px',
                border: 'none',
                background: 'transparent',
                opacity: 1
              }}
              scrolling="no"
            />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-center text-neutral-500">
            © {new Date().getFullYear()} Muse Aesthetic Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 