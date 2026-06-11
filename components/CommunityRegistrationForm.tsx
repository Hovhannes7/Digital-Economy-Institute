"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/Button";
import { NoticeBox } from "@/components/NoticeBox";

export function CommunityRegistrationForm({
  communityName,
}: {
  communityName: string;
}) {
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      setStatus("error");
      setMessage("Registration storage is not configured yet.");
      return;
    }

    if (!email.trim() || !occupation.trim()) {
      setStatus("error");
      setMessage("Please fill in both email and occupation.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(
        `${supabaseUrl}/rest/v1/community_registrations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            community_name: communityName,
            email: email.trim(),
            occupation: occupation.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setStatus("success");
      setMessage("Your registration has been submitted successfully.");
      setEmail("");
      setOccupation("");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  }

  return (
    <form
      id="registration"
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-6 shadow-subtle"
    >
      <h2 className="text-2xl font-bold">Register for {communityName}</h2>

      <p className="mt-2 text-sm leading-6 text-steel">
        Use your email and occupation to express interest in this community.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold">
          Email address
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-ink"
          />
        </label>

        <label className="block text-sm font-semibold">
          Occupation / field of work
          <input
            required
            type="text"
            name="occupation"
            placeholder="Farmer, researcher, student, entrepreneur..."
            value={occupation}
            onChange={(event) => setOccupation(event.target.value)}
            className="mt-2 w-full rounded-xl border border-line px-4 py-3 text-sm outline-none focus:border-ink"
          />
        </label>
      </div>

      <div className="mt-6">
        <Button type="submit">
          {status === "loading" ? "Submitting..." : "Register to Participate"}
        </Button>
      </div>

      {message && (
        <p
          className={`mt-4 text-sm font-semibold ${
            status === "success" ? "text-green-700" : "text-red-700"
          }`}
        >
          {message}
        </p>
      )}

      <div className="mt-5">
        <NoticeBox>
          Registration data is stored securely and is visible only to the
          administrator.
        </NoticeBox>
      </div>
    </form>
  );
}
