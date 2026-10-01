"use client";
import Image from "next/image";
import { courses, team, team2 } from "@/app/assets/assets";

type Props = { title: string; text: string };

export default function AuthPreview({ title, text }: Props) {
  const course = courses[2];

  return (
    <div className="hidden lg:flex flex-col justify-center gap-6 text-white max-w-md">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-lg text-white/80">{text}</p>
      </div>

      <div className="relative w-[340px]">
        <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full border-[12px] border-lime-300" />
        <div className="absolute -bottom-10 -left-10 w-0 h-0 border-l-[36px] border-l-transparent border-r-[36px] border-r-transparent border-b-[60px] border-b-lime-300 rotate-[-15deg]" />

        <div className="relative bg-white rounded-2xl p-3 text-slate-900 shadow-xl">
          <div className="relative">
            <Image
              src={course.image}
              alt={course.title}
              className="rounded-xl w-full h-[150px] object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 flex gap-1.5 text-[10px] text-white">
              <span className="bg-black/40 backdrop-blur rounded-full px-2 py-1">
                {course.lessons} Lessons
              </span>
              <span className="bg-black/40 backdrop-blur rounded-full px-2 py-1">
                {course.duration}
              </span>
              <span className="bg-black/40 backdrop-blur rounded-full px-2 py-1">
                {course.comments} Comments
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between mt-3">
            <h3 className="font-bold text-lg leading-tight">{course.title}</h3>
            <span className="text-sm text-slate-500 whitespace-nowrap">
              {course.rating} <span className="text-lime-400">★</span>
            </span>
          </div>
          <p className="text-xs text-slate-500">
            by <span className="text-blue-600">{course.author}</span>
          </p>

          <div className="flex items-center justify-between mt-3">
            <span className="text-xs bg-slate-100 rounded-full px-3 py-2">
              Beginner
            </span>
            <Image src={team2} alt="students" className="h-9 w-auto" />
          </div>

          <p className="mt-3 font-bold text-blue-600 text-xl">
            ${course.price}
            <span className="text-xs font-normal text-slate-500">
              /lifetime
            </span>
          </p>
        </div>

        <div className="absolute -bottom-15 right-[-40px] bg-lime-300 text-slate-900 rounded-2xl px-3 py-2 shadow-lg">
          <p className="text-sm font-semibold">Happy Students</p>
          <p className="text-[10px] font-semibold">
            4.5 <span className="text-slate-500 font-normal">(240)</span>{" "}
            <span className="text-blue-600">★</span>
          </p>
          <Image
            src={team}
            alt="happy students"
            className="h-9 w-auto bg-transparent  mt-1"
          />
        </div>
      </div>
    </div>
  );
}
