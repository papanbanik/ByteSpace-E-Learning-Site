"use client";
import Link from "next/link";
import { useState } from "react";
import AuthPreview from "@/components/auth/AuthPreview";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("login", form);
  };

  return (
    <main className="min-h-screen bg-blue-600 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:40px_40px] flex items-center justify-center gap-16 px-6 py-10">
      <AuthPreview
        title="Sign in with ease"
        text="Experience a seamless and efficient process that opens up your access to a world of knowledge."
      />

      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl"
      >
        <p className="text-xs text-blue-600">Sign In</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-5">Welcome Back</h1>

        {[
          {
            label: "Email",
            name: "email",
            type: "email",
            ph: "designer@example.com",
          },
          {
            label: "Password",
            name: "password",
            type: "password",
            ph: "••••••••",
          },
        ].map((f) => (
          <label key={f.name} className="block mb-4">
            <span className="text-xs text-slate-500">{f.label}</span>
            <input
              name={f.name}
              type={f.type}
              placeholder={f.ph}
              value={form[f.name as keyof typeof form]}
              onChange={onChange}
              required
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </label>
        ))}

        <div className="flex justify-end">
          <button className="bg-lime-300 hover:bg-lime-400 text-slate-900 text-sm font-semibold rounded-full px-6 py-2">
            Sign In
          </button>
        </div>

        <div className="flex items-center gap-3 my-6 text-xs text-slate-400">
          <span className="flex-1 h-px bg-slate-200" />
          or
          <span className="flex-1 h-px bg-slate-200" />
        </div>

        <div className="flex justify-center gap-4">
          {["f", "G"].map((s) => (
            <button
              key={s}
              type="button"
              className="w-10 h-10 rounded-full border border-slate-200 font-bold text-slate-700 hover:bg-slate-50"
            >
              {s}
            </button>
          ))}
        </div>

        <p className="text-center text-sm  text-slate-500 mt-8">
          New you?{" "}
          <Link href="/signup" className="text-blue-600 font-medium">
            Create an account
          </Link>
        </p>
      </form>
    </main>
  );
}
