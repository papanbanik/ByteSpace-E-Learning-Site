"use client";

import Image from "next/image";
import Link from "next/link";
import { footerData, logo } from "@/app/assets/assets";

const LIME = "#C8F02E";

export default function Footer() {
  const { newsletter, columns, legal } = footerData;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          {/* বাঁদিক: logo + newsletter */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 ">
              <Link href="/" aria-label="ByteSpace home">
                <Image src={logo} alt="ByteSpace" className="h-8 w-auto" />
              </Link>
              <div className="mt-2 text-2xl font-semibold">ByteSpace</div>
            </div>
            <p className="mt-4 text-xs text-neutral-600">{newsletter.text}</p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex items-center gap-3"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder={newsletter.placeholder}
                className="h-11 min-w-0 flex-1 rounded-full border border-neutral-300 bg-white px-5 text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:border-neutral-900 focus-visible:outline-none"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-full px-6 text-sm font-semibold text-neutral-900 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                style={{ background: LIME }}
              >
                {newsletter.button}
              </button>
            </form>

            <p className="mt-5 text-[10px] leading-relaxed text-neutral-500">
              {newsletter.note}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3"
          >
            {columns.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-neutral-700 transition-colors hover:text-neutral-900 hover:underline focus-visible:underline focus-visible:outline-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-200 py-6 text-[11px] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {legal.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="hover:text-neutral-900 hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
