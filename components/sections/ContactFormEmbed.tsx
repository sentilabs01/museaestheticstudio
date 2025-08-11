'use client'

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ContactFormEmbed() {
  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-[#182D20] dark:text-[#F7D6ED] mb-4" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>
        Send us a Message
      </h3>
      <form className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-[#2D4432] dark:text-gray-300">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            className="mt-1 bg-white dark:bg-gray-800 border-[#2D4432] dark:border-gray-600 text-[#2D4432] dark:text-white"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-[#2D4432] dark:text-gray-300">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            className="mt-1 bg-white dark:bg-gray-800 border-[#2D4432] dark:border-gray-600 text-[#2D4432] dark:text-white"
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-[#2D4432] dark:text-gray-300">Message</Label>
          <textarea
            id="message"
            placeholder="Your message..."
            rows={4}
            className="mt-1 w-full px-3 py-2 bg-white dark:bg-gray-800 border border-[#2D4432] dark:border-gray-600 text-[#2D4432] dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7D6ED] dark:focus:ring-[#182D20]"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#182D20] hover:bg-[#2D4432] dark:bg-[#F7D6ED] dark:hover:bg-[#E8C4E0] dark:text-[#182D20]"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
