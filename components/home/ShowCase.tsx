import Image from "next/image";
import {
  growthSection,
  manageSection,
  courseImages,
  person1,
  person2,
  coilIcon,
  team2,
} from "@/app/assets/assets";

const LIME = "#C8F02E";
const BLUE = "#1F3FD6";

function Check() {
  return (
    <span
      className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-white"
      style={{ background: BLUE }}
    >
      <svg
        viewBox="0 0 16 16"
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3.5 8.5l3 3 6-7" />
      </svg>
    </span>
  );
}

function GrowthSection() {
  const { title, text, stats, featuredCourse, progress } = growthSection;

  return (
    <section
      id="creators"
      className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2"
    >
      <div className="pointer-events-none absolute -left-20 -top-10 -z-10 h-72 w-72 rounded-full bg-[#C8F02E]/25 blur-3xl" />

      <div>
        <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-500">
          {text}
        </p>

        <dl className="mt-8 flex gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-bold" style={{ color: BLUE }}>
                {s.value}
                <span className="mt-0.5 block text-xs font-normal text-neutral-500">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <Image
          src={person1}
          alt="Student holding a laptop"
          className="ml-auto h-auto w-[78%]"
          priority
        />

        <Image
          src={coilIcon}
          alt=""
          className="absolute -top-2 right-6 h-auto w-16"
        />

        {/* Featured course card */}
        <div className="absolute left-0 top-4 w-[46%] rounded-2xl bg-white p-2.5 shadow-[0_16px_40px_-16px_rgba(20,40,120,0.35)]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100">
            <Image
              src={courseImages[0]}
              alt=""
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
          <p className="mt-2 truncate text-sm font-semibold text-neutral-900">
            {featuredCourse.title}
          </p>
          <p className="text-[10px] text-neutral-500">
            by <span style={{ color: BLUE }}>{featuredCourse.author}</span>
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-600">
              {featuredCourse.level}
            </span>
            <span className="text-xs font-bold text-neutral-900">
              ${featuredCourse.price}
            </span>
          </div>
        </div>

        {/* Progress card */}
        <div className="absolute bottom-16 right-0 w-[40%] rounded-2xl bg-white p-3 shadow-[0_16px_40px_-16px_rgba(20,40,120,0.35)]">
          <p className="text-[10px] text-neutral-500">{progress.label}</p>
          <p className="mt-1 text-2xl font-bold text-neutral-900">
            {progress.percent}%
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full"
              style={{ width: `${progress.percent}%`, background: LIME }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ManageSection() {
  const { title, intro, points, revenue, students } = manageSection;

  return (
    <section className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2">
      <div className="pointer-events-none absolute -bottom-10 -left-20 -z-10 h-72 w-72 rounded-full bg-[#C8F02E]/25 blur-3xl" />

      {/* Person 2 with floating cards */}
      <div className="relative mx-auto w-full max-w-md">
        <Image
          src={person2}
          alt="Creator holding a tablet"
          className="mx-auto h-auto w-[72%]"
        />

        <Image
          src={coilIcon}
          alt=""
          className="absolute right-6 top-8 h-auto w-16"
        />

        <div
          className="absolute left-0 top-2 w-[38%] rounded-xl p-3 text-white"
          style={{ background: BLUE }}
        >
          <p className="text-[10px] opacity-80">{revenue.total.label}</p>
          <p className="text-[9px] opacity-60">{revenue.total.range}</p>
          <p className="mt-1 text-lg font-bold">{revenue.total.amount}</p>
          <div
            className="mt-2 h-1.5 w-2/3 rounded-full"
            style={{ background: LIME }}
          />
        </div>

        <div
          className="absolute left-0 top-[28%] w-[38%] rounded-xl p-3 text-white"
          style={{ background: BLUE }}
        >
          <p className="text-[10px] opacity-80">{revenue.yearly.label}</p>
          <p className="text-[9px] opacity-60">{revenue.yearly.year}</p>
          <p className="mt-1 text-lg font-bold">{revenue.yearly.amount}</p>
          <span
            className="mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-neutral-900"
            style={{ background: LIME }}
          >
            {revenue.yearly.change}
          </span>
        </div>

        <div className="absolute bottom-6 right-0 w-[52%] rounded-2xl bg-white p-3 shadow-[0_16px_40px_-16px_rgba(20,40,120,0.35)]">
          <p className="text-sm font-semibold text-neutral-900">
            {students.label}
          </p>
          <p className="text-[10px] text-neutral-500">
            {students.rating} ({students.reviews})
          </p>
          <Image src={team2} alt="Happy students" className="mt-2 h-8 w-auto" />
        </div>
      </div>

      <div>
        <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-500">
          <span className="font-semibold text-neutral-800">ByteSpace</span>{" "}
          {intro.replace(/^ByteSpace\s*/, "")}
        </p>

        <ul className="mt-8 space-y-4">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 text-sm text-neutral-800"
            >
              <Check />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Showcase() {
  return (
    <>
      <GrowthSection />
      <ManageSection />
    </>
  );
}
