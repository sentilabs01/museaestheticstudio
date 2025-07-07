'use client'
import ContactFormEmbed from "../sections/ContactFormEmbed";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white dark:bg-black text-black dark:text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Info and Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div>
                <h3 className="text-lg font-semibold text-[#182D20] dark:text-[#F7D6ED] mb-4" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>
                  Location
                </h3>
                <p className="text-[#2D4432] dark:text-gray-300">
                  Inside of Salon 12 Suites<br />
                  6828 NE 14th St, Suite 2<br />
                  Ankeny, IA 50023
                </p>
              </div>

              {/* Hours */}
              <div className="mt-4">
                <div className="font-bold text-lg text-[#182D20] dark:text-[#F7D6ED] mb-2">
                  Hours of Operation
                </div>
                <div className="text-[#2D4432] dark:text-gray-300">
                  By appointment
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg bg-[#F7D6ED] dark:bg-[#23272a]">
              <iframe
                src="https://www.google.com/maps?q=6828+NE+14th+St,+Suite+2,+Ankeny,+IA+50023&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="bg-[#F7D6ED] dark:bg-[#23272a]"
              />
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-[#182D20] dark:text-[#F7D6ED] mb-4" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>
                Contact Us
              </h3>
              <div className="space-y-2 text-[#2D4432] dark:text-gray-300">
                <p>
                  Phone: <a href="tel:+15155189601" className="hover:text-[#F7D6ED] dark:hover:text-[#F7D6ED]">(515) 518-9601</a>
                </p>
                <p>
                  Email: <a href="mailto:info@museaestheticstudio.com" className="hover:text-[#F7D6ED] dark:hover:text-[#F7D6ED]">info@museaestheticstudio.com</a>
                </p>
              </div>
            </div>
          </div>
          {/* Right Column: Embedded Contact Form */}
          <div className="flex items-start justify-center w-full">
            <ContactFormEmbed />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#2D4432]">
          <p className="text-center text-[#2D4432] dark:text-gray-400">
            © {new Date().getFullYear()} Muse Aesthetic Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}