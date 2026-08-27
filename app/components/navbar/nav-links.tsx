import Link from "next/link";
import { navItems } from "@/config/site";

export function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-x-8">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 text-gray-600 text-lg hover:text-blue-600 font-medium transition-colors"
          >
            <Icon size={20} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
