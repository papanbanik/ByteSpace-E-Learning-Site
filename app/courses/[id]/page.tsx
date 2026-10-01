import Image from "next/image";
import { notFound } from "next/navigation";
import { courses } from "@/app/assets/assets";
import type { Course } from "@/components/home/Courses";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BLUE = "bg-[#0a2cf0]";
const LIME = "bg-[#d7ff1e]";

const lessonList = [
  { title: "Introduction to Digital Assets", time: "12 mins" },
  { title: "Design Principles for Impacts", time: "21 mins" },
  { title: "Advanced Techniques in Digital Creation", time: "16 mins" },
];

const includes = [
  "Learning Resources",
  "Quality Lesson Videos",
  "Certificate of Completion",
  "Private Consultation",
];

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden>
      <circle cx="10" cy="10" r="10" fill="#0a2cf0" />
      <path
        d="M5.5 10.5l3 3 6-6.5"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SmallIcon() {
  return (
    <span className="grid h-4 w-4 place-items-center rounded-[4px] bg-[#0a2cf0]/15">
      <span className="h-2 w-2 rounded-[2px] bg-[#0a2cf0]" />
    </span>
  );
}

function HeroChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-800">
      {children}
    </span>
  );
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = (courses as Course[]).find((c) => c.id === Number(id));

  if (!course) notFound();

  const moreVideos = Math.max(course.lessons - lessonList.length, 0);

  return (
    <>
      <main className="relative bg-white pb-24">
        {/* Blue grid background */}
        <Navbar />
        <div
          aria-hidden
          className={`absolute inset-x-0 top-0 h-[600px] lg:h-[740px] ${BLUE} bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px]`}
        />

        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 pt-28 lg:grid-cols-[1fr_360px]">
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {course.title}
                </h1>
                <p className="mt-2 inline-block border-b border-white/60 text-sm text-white">
                  Unlock the Power of Digital Creation with Expert Guidance
                </p>
                <p className="mt-4 text-xs text-white">
                  by{" "}
                  <span className="font-medium text-[#d7ff1e]">
                    {course.author}
                  </span>
                </p>
              </div>

              <button
                type="button"
                className={`shrink-0 rounded-full ${LIME} px-4 py-2 text-xs font-semibold text-neutral-900`}
              >
                Share
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <HeroChip>{course.level}</HeroChip>
              <HeroChip>
                <span className="text-[#0a2cf0]">★</span> {course.rating} (
                {course.comments} reviews)
              </HeroChip>
              <HeroChip>{course.extraStudents} Students</HeroChip>
            </div>

            {/* Video thumbnail */}
            <div className="relative mt-8 aspect-video overflow-hidden rounded-3xl bg-neutral-200">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                className="object-cover"
              />
              <button
                type="button"
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-black/50 backdrop-blur"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            <div className="mt-10 flex gap-3">
              <span
                className={`rounded-full ${LIME} px-4 py-1.5 text-xs font-medium text-neutral-900`}
              >
                About
              </span>
              <span className="rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-medium text-neutral-600">
                Lessons
              </span>
              <span className="rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-medium text-neutral-600">
                Reviews
              </span>
            </div>

            <h2 className="mt-8 text-base font-semibold text-neutral-900">
              Description
            </h2>
            <div className="mt-3 space-y-4 text-sm leading-relaxed text-neutral-600">
              <p>
                Embark on an enlightening exploration into the world of digital
                creation with our comprehensive course, &quot;{course.title}
                .&quot; This transformative learning experience invites you to
                delve deep into the intricacies of crafting impactful digital
                content.
              </p>
              <p>
                As you progress through the course, you&apos;ll ascend to new
                heights of design principles that drive impactful creations.
                Engage in hands-on exercises that reinforce your understanding,
                allowing you to apply these principles in practical scenarios.
              </p>
            </div>

            {/* Sneak peek */}
            <h2 className="mt-10 text-base font-semibold text-neutral-900">
              Sneak Peak
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100"
                >
                  <Image
                    src={course.image}
                    alt={`${course.title} preview ${i + 1}`}
                    fill
                    sizes="(min-width: 640px) 160px, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Key points */}
            <h2 className="mt-10 text-base font-semibold text-neutral-900">
              Key Points
            </h2>
            <ul className="mt-4 space-y-3">
              {keyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm text-neutral-700"
                >
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:sticky lg:top-[9.5rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-10 lg:self-start">
            <div className="rounded-2xl bg-white p-5 shadow-[0_12px_40px_-12px_rgba(10,44,240,0.35)]">
              <p className="text-sm font-semibold text-neutral-900">
                {course.lessons} Lessons ({course.duration})
              </p>

              <ol className="mt-4 space-y-3">
                {lessonList.map((l, i) => (
                  <li
                    key={l.title}
                    className="flex items-start justify-between gap-3 text-xs"
                  >
                    <span className="flex gap-3 text-neutral-800">
                      <span className="text-neutral-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {l.title}
                    </span>
                    <span className="shrink-0 text-[#0a2cf0]">{l.time}</span>
                  </li>
                ))}
              </ol>

              {moreVideos > 0 && (
                <p className="mt-3 text-xs text-neutral-500">
                  {moreVideos} more videos
                </p>
              )}

              <p className="mt-5 text-xs text-neutral-500">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>

              <p className="mt-4 text-neutral-900">
                <span className="text-2xl font-bold">${course.price}</span>
                <span className="text-[11px] text-neutral-500">/lifetime</span>
              </p>

              <button
                type="button"
                className={`mt-3 w-full rounded-full ${LIME} py-3 text-sm font-semibold text-neutral-900 transition hover:brightness-95`}
              >
                Enroll Now
              </button>

              <h3 className="mt-6 text-sm font-semibold text-neutral-900">
                This course include
              </h3>
              <ul className="mt-3 space-y-2.5">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-neutral-600"
                  >
                    <SmallIcon />
                    {item}
                  </li>
                ))}
              </ul>

              <hr className="my-5 border-neutral-200" />

              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-neutral-200 text-sm font-semibold text-neutral-700">
                  {course.author.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {course.author}
                  </p>
                  <p className="text-xs text-neutral-500">
                    Professional Creator
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs text-neutral-500">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>

              <button
                type="button"
                className="mt-3 rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-800"
              >
                See Full Profile
              </button>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
