import Link from "next/link";

// @ts-ignore
declare global {
  interface Window {
    Vagaro?: any;
  }
}

const navItems = [
  { href: "/treatments", label: "Treatments" },
  { href: "/products", label: "Featured Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
  { href: "#policies", label: "Policies" },
  { href: "/booking", label: "Book Now" },
];

export default function Navbar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center space-x-8">
        {navItems.map((item) => (
          <li key={item.href}>
            {item.label === "Book Now" ? (
              <Link
                href={item.href}
                className="rounded-full bg-black px-6 py-2 text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                href={item.href}
                className="text-neutral-600 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}