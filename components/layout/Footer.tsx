'use client'

import { useState } from 'react'
import Script from 'next/script'
import SocialLink from "../ui/SocialLink";
import ContactItem from "../ui/ContactItem";
import ScrollTopButton from "./ScrollTopButton";

export default function Footer() {
  const [showForm, setShowForm] = useState(false)

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-[#182D20] mb-4">Location</h3>
            <p className="text-gray-600">
              Inside of Salon 12 Suites<br />
              6828 NE 14th St, Suite 2<br />
              Ankeny, IA 50023
            </p>
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
              <div className="pt-4">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="inline-block px-6 py-3 bg-[#182D20] text-white rounded-lg hover:bg-[#2A4A30] transition-colors duration-300"
                >
                  {showForm ? 'Hide Contact Form' : 'Show Contact Form'}
                </button>
              </div>
            </div>
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

        {/* Contact Form */}
        {showForm && (
          <div className="mt-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4">
              <iframe
                id="JotFormIFrame-251028288630153"
                title="Contact Form"
                allowtransparency="true"
                allowFullScreen={true}
                allow="geolocation; microphone; camera"
                src="https://form.jotform.com/251028288630153"
                frameBorder="0"
                style={{
                  minWidth: '100%',
                  height: '539px',
                  border: 'none'
                }}
                scrolling="no"
              />
            </div>
          </div>
        )}

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