interface ContactItemProps {
  type: "email" | "phone" | "address";
  value: string;
}

export default function ContactItem({ type, value }: ContactItemProps) {
  const getHref = () => {
    switch (type) {
      case "email":
        return `mailto:${value}`;
      case "phone":
        return `tel:${value.replace(/[^0-9+]/g, "")}`;
      default:
        return undefined;
    }
  };

  const href = getHref();

  return href ? (
    <a
      href={href}
      className="block text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
    >
      {value}
    </a>
  ) : (
    <span className="block text-gray-600 dark:text-gray-400">{value}</span>
  );
} 