import Image from "next/image";
import Link from "next/link";
import { creatorCta, coilIcon, whiteCoil, cone } from "@/app/assets/assets";

const BLUE = "#1F3FD6";
const LIME = "#C8F02E";

export default function CreatorCta() {
  const { title, text, button } = creatorCta;

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: BLUE,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      <Image
        src={coilIcon}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-70 top-20 -z-0 h-auto w-28 sm:w-44"
      />
      <Image
        src={whiteCoil}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[22%] top-4 hidden h-auto w-16 sm:block"
      />
      <Image
        src={cone}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-4 top-6 h-auto w-20 sm:right-[24%] sm:w-28"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center sm:py-24">
        <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/75 sm:text-base">
          {text}
        </p>
        <Link
          href={button.href}
          className="mt-9 rounded-full px-7 py-3 text-sm font-semibold text-neutral-900 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F3FD6]"
          style={{ background: LIME }}
        >
          {button.label}
        </Link>
      </div>
    </section>
  );
}
