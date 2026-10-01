import Image from "next/image";
import { testimonialsSection, testimonials } from "@/app/assets/assets";

const BLUE = "#1F3FD6";

export default function Testimonials() {
  const { title, text } = testimonialsSection;

  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute left-1/3 top-0 -z-10 h-80 w-[36rem] rounded-full bg-[#C8F02E]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-24 -z-10 h-72 w-72 rounded-full bg-[#1F3FD6]/20 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-16">
          <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
            {title}
          </h2>
          <p className="text-sm leading-relaxed text-neutral-500">{text}</p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3 md:items-start">
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="rounded-3xl bg-white p-6 shadow-[0_16px_40px_-20px_rgba(20,40,120,0.25)]"
            >
              <figure>
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-neutral-200">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <figcaption className="mt-4">
                  <p className="text-base font-semibold text-neutral-900">
                    {t.name}
                  </p>
                  <p className="text-sm" style={{ color: BLUE }}>
                    {t.role}
                  </p>
                </figcaption>

                <blockquote className="mt-5 text-sm leading-relaxed text-neutral-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
