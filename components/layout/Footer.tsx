'use client'

import { useState } from 'react'
import Script from 'next/script'
import SocialLink from "../ui/SocialLink";
import ContactItem from "../ui/ContactItem";
import ScrollTopButton from "./ScrollTopButton";

export default function Footer() {
  const socialLinks = [
    { platform: "Facebook", url: "https://facebook.com", icon: "facebook" },
    { platform: "Instagram", url: "https://instagram.com", icon: "instagram" },
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ];

  const contactInfo: Array<{
    type: "email" | "phone" | "address";
    value: string;
  }> = [
    { type: "email", value: "contact@example.com" },
    { type: "phone", value: "+1 (555) 123-4567" },
    { type: "address", value: "123 Main St, City, State 12345" },
  ];

  return (
    <footer id="contact" className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Info and Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div>
                <h3 className="text-lg font-semibold text-[#182D20] mb-4">Location</h3>
                <p className="text-gray-600">
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
            <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.1440829599837!2d-93.5726893!3d41.7107595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ec20c0c7c2b3b9%3A0x4b09f2c2c2c2c2c2!2s6828%20NE%2014th%20St%2C%20Ankeny%2C%20IA%2050023!5e0!3m2!1sen!2sus!4v1625123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-[#182D20] mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  Phone: <a href="tel:+15155189601" className="hover:text-[#182D20]">(515) 518-9601</a>
                </p>
                <p>
                  Email: <a href="mailto:info@museaestheticstudio.com" className="hover:text-[#182D20]">info@museaestheticstudio.com</a>
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

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Muse Aesthetic Studio. All rights reserved.
          </p>
        </div>
      </div>

      {/* JotForm Scripts */}
      <Script
        src="https://form.jotform.com/static/feedback2.js"
        strategy="beforeInteractive"
      />
      <Script
        id="jotform-config"
        strategy="afterInteractive"
      >
        {`
          window.addEventListener('load', function() {
            if (typeof JotformFeedback !== 'undefined') {
              var JFL_251028288630153 = new JotformFeedback({
                formId: '251028288630153',
                base: 'https://form.jotform.com/',
                windowTitle: 'Contact Us!',
                backgroundColor: '#182D20',
                fontColor: '#FFFFFF',
                type: 'false',
                height: 500,
                width: 700,
                openOnLoad: false
              });
            }
          });
        `}
      </Script>
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="beforeInteractive"
      />
    </footer>
  );
} 