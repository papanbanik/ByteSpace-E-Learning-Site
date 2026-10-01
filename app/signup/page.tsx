"use client";
import Link from "next/link";
import { useState } from "react";
import AuthPreview from "@/components/auth/AuthPreview";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("signup", form);
  };

  return (
    <main className="min-h-screen bg-blue-600 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:40px_40px] flex items-center justify-center gap-16 px-6 py-10">
      <AuthPreview
        title="Sign up and come in"
        text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and risk-free."
      />

      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl"
      >
        <p className="text-xs text-blue-600">Create an Account</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-5">
          Welcome to ByteSpace
        </h1>

        {[
          {
            label: "Full Name",
            name: "name",
            type: "text",
            ph: "Jamie Daniel",
          },
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
            Continue
          </button>
        </div>

        <p className="text-center text-sm  text-slate-500 mt-10">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
