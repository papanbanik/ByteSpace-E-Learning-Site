import Link from "next/link";
import { learningPaths } from "@/app/assets/assets";

const LIME = "#C8F02E";

function Icon({ paths }: { paths: string[] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

export default function LearningPaths() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-1 mb-0 text-sm leading-relaxed text-neutral-500 sm:text-base">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>
      </div>

      <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {learningPaths.map((path) => (
          <li key={path.slug}>
            <Link
              href={`/courses?category=${path.slug}`}
              className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-6 transition-colors hover:border-neutral-900 focus-visible:border-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20"
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-full text-neutral-900"
                style={{ background: LIME }}
              >
                <Icon paths={path.icon} />
              </span>
              <span className="text-sm font-medium text-neutral-900">
                {path.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
