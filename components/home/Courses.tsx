import Image, { type StaticImageData } from "next/image";
import { courses, team2 } from "@/app/assets/assets";
import Link from "next/link";
export type Course = {
  id: number;
  title: string;
  author: string;
  image: string | StaticImageData;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  students: (string | StaticImageData)[];
  extraStudents: number;
};

function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 1.8l2.4 5 5.5.7-4 3.8 1 5.4L10 14l-4.9 2.7 1-5.4-4-3.8 5.5-.7L10 1.8z" />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 text-neutral-500"
      fill="currentColor"
      aria-hidden
    >
      <rect x="1" y="9" width="3" height="6" rx="1" />
      <rect x="6.5" y="5" width="3" height="10" rx="1" />
      <rect x="12" y="1" width="3" height="14" rx="1" />
    </svg>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium text-neutral-700 backdrop-blur">
      {children}
    </span>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="block h-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <article className="group h-gull flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-3 transition-shadow hover:shadow-[0_12px_32px_-12px_rgba(20,40,120,0.25)]">
        {/* Photo with stat chips */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
            <Chip>{course.lessons} Lessons</Chip>
            <Chip>{course.duration}</Chip>
            <Chip>{course.comments} Comments</Chip>
          </div>
        </div>

        {/* Title / author / rating */}
        <div className="flex items-start justify-between gap-3 px-1">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-neutral-900">
              {course.title}
            </h3>
            <p className="mt-0.5 text-xs text-neutral-500">
              by{" "}
              <span className="font-medium text-neutral-700">
                {course.author}
              </span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1 text-sm text-neutral-600">
            {course.rating}
            <Star className="h-4 w-4 text-neutral-300" />
          </div>
        </div>

        {/* Level + students */}
        <div className="flex items-center justify-between px-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600">
            <LevelIcon />
            {course.level}
          </span>

          <div className="flex items-center">
            <Image src={team2} alt="Students" className="h-10 w-auto" />
          </div>
        </div>

        {/* Price */}
        <p className="px-1 pb-1 text-neutral-900">
          <span className="text-xl font-bold">${course.price}</span>
          <span className="text-[11px] text-neutral-500">/lifetime</span>
        </p>
      </article>
    </Link>
  );
}

export default function Courses() {
  return (
    <section
      id="courses"
      className="mx-auto w-full max-w-6xl px-5  scroll-mt-24 py-20"
    >
      <h2 className="max-w-xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        Courses to start learning today
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(courses as Course[]).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
