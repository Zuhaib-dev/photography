"use client";

import React, { useState } from "react";
import Title from "@/components/Title";
import Input from "./InputField";
import Button from "@/components/Button";

type Status = "idle" | "loading" | "success" | "error";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName}${lastName ? " " + lastName : ""}`,
          email,
          subject,
          message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 mb-40">
      <div className="container grid lg:grid-cols-[0.7fr_1fr] gap-16">
        {/* Title */}
        <div>
          <Title title="Send Me a Message" />
          <p className="mt-6">
            Have a specific inquiry or message for us? Please use the contact
            form below, and we&apos;ll get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-10">
          {/* Name row */}
          <div className="grid gap-10 lg:grid-cols-2 mt-10">
            <Input
              htmlFor="firstName"
              label="first name"
              type="text"
              id="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              htmlFor="lastName"
              label="last name"
              type="text"
              id="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email + Subject row */}
          <div className="grid gap-10 lg:grid-cols-2 mt-10">
            <Input
              htmlFor="email"
              label="email"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              htmlFor="subject"
              label="Subject"
              type="text"
              id="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Textarea */}
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="resize-none h-[100px] border-b border-neutral-800 focus:border-neutral-400 focus:border-b outline-0 transition-colors bg-transparent"
          />

          {/* Status messages */}
          {status === "success" && (
            <p className="text-green-500 text-sm font-medium">
              ✅ Message sent! Check your inbox — I&apos;ve sent you a
              confirmation too.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm font-medium">
              ❌ Something went wrong. Please fill in all required fields and
              try again.
            </p>
          )}

          {/* Submit button */}
          <div>
            <Button
              label={status === "loading" ? "Sending…" : "Send Message"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
