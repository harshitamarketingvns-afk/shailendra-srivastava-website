"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const inquiryTypes = [
  "Book Enquiry",
  "Media / Interview",
  "Business",
  "Research Collaboration",
  "General Enquiry",
] as const;

type InquiryType = (typeof inquiryTypes)[number];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const nextErrors: Record<string, string> = {};
    if (!data.name || String(data.name).trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!data.subject || String(data.subject).trim().length < 2) {
      nextErrors.subject = "Please add a subject line.";
    }
    if (!data.message || String(data.message).trim().length < 10) {
      nextErrors.message = "Please write at least a short message.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setServerMessage("Please fix the fields highlighted below.");
      return;
    }

    const subject = encodeURIComponent(`[${String(data.inquiryType || "General Enquiry")}] ${String(data.subject)}`);
    const body = encodeURIComponent(
      `Name: ${String(data.name)}\nEmail: ${String(data.email)}\n\n${String(data.message)}`
    );
    window.location.href = `mailto:contact@shailendrasrivastava.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setServerMessage("Your email app should open with the message prepared. If it does not, please email contact@shailendrasrivastava.com directly.");
  }

  const fieldClasses =
    "h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors";
  const labelClasses =
    "mb-1.5 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
      aria-label="Contact form"
    >
      {/* Inquiry type */}
      <div>
        <label htmlFor="inquiryType" className={labelClasses}>
          Type of enquiry
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          defaultValue="Book Enquiry"
          className={cn(fieldClasses, "h-11 cursor-pointer")}
        >
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClasses}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClasses}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className={labelClasses}>
          Subject <span className="text-gold">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What is this about?"
          className={fieldClasses}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-destructive">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Write your message…"
          className={cn(
            fieldClasses,
            "h-auto min-h-[10rem] resize-y py-3 leading-relaxed",
          )}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Fields marked <span className="text-gold">*</span> are required.
        </p>
        <button
          type="submit"
          disabled={false}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gold px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Send message
        </button>
      </div>

      {/* Status messages */}
      {status === "success" && serverMessage && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-md border border-gold/30 bg-gold/5 p-4 text-sm text-foreground"
        >
          <CheckCircle2
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold"
            aria-hidden="true"
          />
          <span>{serverMessage}</span>
        </div>
      )}
      {status === "error" && serverMessage && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground"
        >
          <AlertCircle
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive"
            aria-hidden="true"
          />
          <span>{serverMessage}</span>
        </div>
      )}
    </form>
  );
}
