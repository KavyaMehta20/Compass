"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Campus map", href: "/map" },
  { name: "Problem & Solution", href: "/problem-solution" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-glass-border sticky top-0 bg-[#0a1120d9] backdrop-blur-[14px] z-50">
      <div className="max-w-[1080px] mx-auto px-8 py-5 flex justify-between items-center">
        <div className="font-serif text-[20px] font-semibold tracking-[0.2px]">
          compass
        </div>
        <nav className="flex gap-7 text-[14px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "no-underline cursor-none transition-colors",
                  isActive
                    ? "text-text border-b-2 border-glow pb-[2px]"
                    : "text-text-soft hover:text-text"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
