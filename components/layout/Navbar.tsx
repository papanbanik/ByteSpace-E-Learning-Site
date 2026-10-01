"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Outfit, Syne } from "next/font/google";
import logo from "@/app/assets/logo.png";
import { Poppins } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });
const syne = Syne({ subsets: ["latin"], weight: ["800"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/#creators", label: "Creators" },
];

const linkClass =
  "rounded-md text-lg font-light text-white/95 transition-colors hover:text-[#d4ff1a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={`${outfit.className} absolute inset-x-0 top-0 z-30`}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div id="home" className="flex items-center gap-1">
          <Link
            href="/"
            id="home"
            aria-label="ByteSpace home"
            className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Image src={logo} alt="" priority className="h-8 w-auto" />
          </Link>
          <Link
            href="/"
            className={`${poppins.className} mt-2 text-3xl font-semibold text-white`}
          >
            ByteSpace
          </Link>
        </div>

        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`${linkClass} ${pathname === href ? "font-normal" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-6 md:gap-8">
          <Link href="/login" className={`${linkClass} hidden md:inline`}>
            Sign In
          </Link>
          <Link href="/signup" className={`${linkClass} hidden md:inline`}>
            Join Us
          </Link>
          <Link
            href="#"
            aria-label="Cart"
            className="rounded-md text-white transition-colors hover:text-[#d4ff1a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <ShoppingBag className="size-6" aria-hidden="true" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden"
          >
            {open ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-white/20 bg-[#003de0] px-6 pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {[
              ...links,
              { href: "/sign-in", label: "Sign In" },
              { href: "/join", label: "Join Us" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`${linkClass} block py-1 text-xl`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
