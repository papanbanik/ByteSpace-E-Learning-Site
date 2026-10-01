import Image from "next/image";
import { Outfit, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";

import person from "@/app/assets/person.png";
import team from "@/app/assets/team.png";
import coil from "@/app/assets/coil-icon.png";
import cone from "@/app/assets/Cone.png";
import donut from "@/app/assets/metacap.png";
import whiteCoil from "@/app/assets/white-coil.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

function Search({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

const HEADLINE = "Get Access to Hundreds of Courses";
const SUBTEXT =
  "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.";
const PROGRESS = 55;

const css = `
@keyframes bs-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-0.7cqw)}}
@keyframes bs-fill{from{width:0}}
.bs-float{animation:bs-float 6s ease-in-out infinite}
.bs-fill{animation:bs-fill 1.2s .3s cubic-bezier(.2,.8,.2,1) both}
@media (prefers-reduced-motion:reduce){.bs-float,.bs-fill{animation:none}}
`;

const gridStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.14) 1px,transparent 1px)",
  backgroundSize: "clamp(84px,8.8vw,140px) clamp(84px,8.8vw,140px)",
};

const cardShadow = "shadow-[0_1cqw_2.5cqw_rgba(0,20,120,0.25)]";

export default function Hero() {
  return (
    <section
      style={gridStyle}
      className={`${outfit.className} relative isolate overflow-hidden bg-[#003de0] text-white`}
    >
      <style>{css}</style>
      <Navbar />

      {/* Size container: children use cqw so the design scales as one piece */}
      <div
        className="relative mx-auto max-w-[1280px]"
        style={{ containerType: "inline-size" }}
      >
        {/* ---------- 3D shapes (decorative) ---------- */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <Image
            src={coil}
            alt=""
            sizes="(min-width: 1024px) 14vw, 24vw"
            className="absolute bottom-[30%] left-[-6%] h-auto w-[24%] lg:bottom-auto lg:left-0 lg:top-[27.7%] lg:w-[13.6%]"
          />

          <svg
            viewBox="0 0 130 200"
            className="absolute bottom-[30%] right-[-6%] h-auto w-[20%] lg:bottom-auto lg:right-[-1%] lg:top-[25%] lg:w-[11.3%]"
          >
            <defs>
              <linearGradient id="bs-cyl" x1="0" y1="0" x2="1" y2="0.4">
                <stop offset="0" stopColor="#dcff22" />
                <stop offset="1" stopColor="#b4ee00" />
              </linearGradient>
            </defs>
            <g transform="rotate(-14 65 100)">
              <path
                d="M8 55v95c0 22 26 40 57 40s57-18 57-40V55Z"
                fill="url(#bs-cyl)"
              />
              <ellipse cx="65" cy="55" rx="57" ry="28" fill="#eaff55" />
            </g>
          </svg>

          <Image
            src={whiteCoil}
            alt=""
            sizes="9vw"
            className="absolute left-[14.7%] top-[49%] hidden h-auto w-[8.2%] lg:block"
          />
          <Image
            src={cone}
            alt=""
            sizes="9vw"
            className="absolute left-[78.6%] top-[47.5%] hidden h-auto w-[8.3%] lg:block"
          />
          <Image
            src={donut}
            alt=""
            sizes="13vw"
            className="absolute left-[4.6%] top-[71.7%] hidden h-auto w-[12.8%] lg:block"
          />
          <Image
            src={whiteCoil}
            alt=""
            sizes="11vw"
            className="absolute left-[83.2%] top-[69%] hidden h-auto w-[10.5%] -rotate-12 lg:block"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 pt-32 text-center lg:min-h-[38.4cqw] lg:pt-[12.8cqw]">
          <h1
            className={`${poppins.className} max-w-4xl text-balance text-[clamp(2.25rem,5cqw,5rem)] font-semibold leading-[1.1] tracking-tight`}
          >
            {HEADLINE}
          </h1>

          <p className="mt-6 max-w-3xl text-balance text-base font-light text-white/90 sm:text-lg lg:mt-[1.8cqw] lg:text-[max(1.125rem,1.35cqw)]">
            {SUBTEXT}
          </p>

          <div className="mt-10 w-full lg:mt-[3.2cqw]">
            <form
              action="#"
              method="get"
              role="search"
              className="mx-auto flex w-full max-w-[720px] items-center gap-3"
            >
              <label htmlFor="hero-search" className="sr-only">
                Search courses, topics, or creators
              </label>
              <div className="flex h-14 min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 focus-within:ring-4 focus-within:ring-[#d4ff1a]/70">
                <Search className="h-5 w-5 shrink-0 text-neutral-500" />
                <input
                  id="hero-search"
                  name="q"
                  type="search"
                  placeholder="Course, topic, creator"
                  autoComplete="off"
                  className="w-full min-w-0 bg-transparent text-lg font-light text-[#141414] outline-none placeholder:text-neutral-500"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer h-12 shrink-0 rounded-full bg-[#d4ff1a] px-6 text-lg font-medium text-[#141414] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/80 sm:px-8"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="relative mt-10 aspect-[4/3.4] w-full lg:mt-0 lg:aspect-[719/240]">
          <div
            aria-hidden="true"
            className="absolute left-[-15%] top-[30%] aspect-square w-[130%] rounded-full bg-[#d4ff1a] lg:left-[10.3%] lg:top-[5.8%] lg:w-[79.6%]"
          />

          <div className="absolute bottom-0 left-[19%] z-10 w-[62%] lg:left-[36.4%] lg:w-[34.5%]">
            <Image
              src={person}
              alt="Smiling student with headphones holding a laptop"
              priority
              sizes="(min-width: 1024px) 35vw, 62vw"
              className="h-auto w-full"
            />
          </div>

          {/* UI/UX Design card (desktop only) */}
          <div className="absolute left-[27.8%] top-[18.8%] z-20 hidden w-[14.6%] lg:block">
            <div
              className={`bs-float rounded-[0.9cqw] bg-white px-[1.2cqw] py-[0.9cqw] text-[#141414] ${cardShadow}`}
            >
              <p className="text-[1.3cqw] font-medium leading-tight">
                UI/UX Design
              </p>
              <p className="mt-[0.3cqw] whitespace-nowrap text-[1cqw] font-light text-neutral-500">
                200 Courses • 1000+ Students
              </p>
            </div>
          </div>

          <div className="absolute right-[3%] top-[12%] z-20 w-[38%] lg:left-[58.4%] lg:right-auto lg:top-[21.3%] lg:w-[16.1%]">
            <div
              className={`bs-float rounded-xl bg-white p-3 text-[#141414] lg:rounded-[1cqw] lg:p-[1.3cqw] ${cardShadow}`}
              style={{ animationDelay: "-2s" }}
            >
              <p className="text-xs font-light text-neutral-600 lg:text-[1cqw]">
                Learning Progress
              </p>
              <p className="mt-1 text-3xl font-semibold leading-none lg:mt-[0.5cqw] lg:text-[3cqw]">
                {PROGRESS}%
              </p>
              <div
                role="progressbar"
                aria-label="Learning progress"
                aria-valuenow={PROGRESS}
                aria-valuemin={0}
                aria-valuemax={100}
                className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 lg:mt-[0.9cqw] lg:h-[0.7cqw]"
              >
                <div
                  className="bs-fill h-full rounded-full bg-[#d4ff1a]"
                  style={{ width: `${PROGRESS}%` }}
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-[8%] left-[3%] z-20 w-[46%] lg:bottom-auto lg:left-[22.7%] lg:top-[60%] lg:w-[17.9%]">
            <Image
              src={team}
              alt="Happy students: rated 4.5 from 240 reviews, 2K+ learners"
              sizes="(min-width: 1024px) 18vw, 46vw"
              className="bs-float h-auto w-full"
              style={{ animationDelay: "-4s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
