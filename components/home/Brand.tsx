"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Outfit, Poppins } from "next/font/google";

import brand from "@/app/assets/brand.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function Brand() {
  const [active, setActive] = useState("Featured");

  return (
    <div className={outfit.className}>
      {/* ---------- Partner logo strip ---------- */}
      <section
        aria-label="Partner brands"
        className="bg-[#efefef] py-8 md:py-12"
      >
        {/* Scrolls sideways on small screens so the logos stay readable */}
        <div className="overflow-x-auto px-6">
          <Image
            src={brand}
            alt="Logos of partner brands"
            sizes="(min-width: 1024px) 1100px, 640px"
            className="mx-auto h-auto w-[640px] max-w-none mix-blend-multiply md:w-full md:max-w-[1100px]"
          />
        </div>
      </section>

      {/* ---------- Discover ---------- */}
      <section className="bg-white px-6 pb-20 pt-14 text-center md:pt-20">
        <h2
          className={`${poppins.className} mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.2] tracking-tight text-[#0f0f1a] md:text-[2.5rem]`}
        >
          Discover Your Passion, Build Your Skills
        </h2>

        <p className="mx-auto mt-5 max-w-[56rem] text-balance text-base font-light leading-relaxed text-neutral-500 md:text-lg">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        <ul className="mx-auto mt-10 flex max-w-[64rem] flex-wrap justify-center gap-x-3 gap-y-4">
          {CATEGORIES.map((name) => {
            const isActive = name === active;
            return (
              <li key={name}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(name)}
                  className={`rounded-full px-4 py-1.5 text-sm font-normal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003de0] md:text-[0.95rem] ${
                    isActive
                      ? "bg-[#d4ff1a] text-[#141414]"
                      : "bg-[#efefef] text-[#3d3d47] hover:bg-neutral-200"
                  }`}
                >
                  {name}
                </button>
              </li>
            );
          })}
          <li className="flex items-center">
            <Link
              href="/courses"
              className="rounded-full px-1 py-1.5 text-sm font-medium text-[#003de0] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003de0] md:text-[0.95rem]"
            >
              + More
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
