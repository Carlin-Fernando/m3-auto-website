"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.inquiryEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-sm border border-white/10 bg-surface p-6">
      <input type="hidden" name="_subject" value="M3 Auto website inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Name</span>
          <input
            required
            name="name"
            className="w-full border border-white/15 bg-black px-3 py-2.5 outline-none transition focus:border-accent-green"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-muted">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            className="w-full border border-white/15 bg-black px-3 py-2.5 outline-none transition focus:border-accent-green"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block text-muted">Email</span>
        <input
          name="email"
          type="email"
          className="w-full border border-white/15 bg-black px-3 py-2.5 outline-none transition focus:border-accent-green"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block text-muted">Service needed</span>
        <select
          name="service"
          className="w-full border border-white/15 bg-black px-3 py-2.5 outline-none transition focus:border-accent-green"
          defaultValue="General inquiry"
        >
          <option>General inquiry</option>
          <option>Body wash</option>
          <option>Waxing & polish</option>
          <option>Brake service</option>
          <option>Engine service</option>
          <option>Interior cleaning</option>
          <option>Oil & filter change</option>
          <option>Vehicle scanning</option>
          <option>Parts & lubricants</option>
        </select>
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block text-muted">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-y border border-white/15 bg-black px-3 py-2.5 outline-none transition focus:border-accent-green"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex bg-accent-red px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Request Appointment"}
      </button>

      {status === "sent" ? (
        <p className="text-sm text-accent-green">
          Message sent. We will get back to you shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-accent-red">
          Could not send right now. Please call us or email {site.displayEmail}.
        </p>
      ) : null}
    </form>
  );
}
