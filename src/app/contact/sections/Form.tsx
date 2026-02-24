"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section className="py-20 mb-40">
      <div className="container">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-[3px] mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Send Me a Message
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Have a project in mind, a question, or just want to say hi? Fill in
            the form and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* Card */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="grid gap-10">
            {/* Name row */}
            <div className="grid gap-8 sm:grid-cols-2">
              <Input
                htmlFor="firstName"
                label="First Name *"
                type="text"
                id="firstName"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                htmlFor="lastName"
                label="Last Name"
                type="text"
                id="lastName"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Email + Subject row */}
            <div className="grid gap-8 sm:grid-cols-2">
              <Input
                htmlFor="email"
                label="Email Address *"
                type="email"
                id="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                htmlFor="subject"
                label="Subject"
                type="text"
                id="subject"
                placeholder="Project inquiry"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Textarea */}
            <div className="group flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-[2px] text-neutral-500 group-focus-within:text-purple-400 transition-colors duration-300"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, idea, or question…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="
                  bg-transparent
                  text-white text-base
                  resize-none
                  border-b border-neutral-700
                  focus:border-purple-500
                  outline-none
                  placeholder:text-neutral-600
                  transition-colors duration-300
                  py-3
                  leading-relaxed
                "
              />
            </div>

            {/* Status messages */}
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-5 py-4"
                >
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="text-green-400 font-semibold text-sm m-0">
                      Message sent successfully!
                    </p>
                    <p className="text-green-600 text-xs mt-0.5 m-0">
                      Check your inbox — I&apos;ve sent you a confirmation email
                      too.
                    </p>
                  </div>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-4"
                >
                  <span className="text-2xl">❌</span>
                  <div>
                    <p className="text-red-400 font-semibold text-sm m-0">
                      Something went wrong
                    </p>
                    <p className="text-red-600 text-xs mt-0.5 m-0">
                      Please fill in all required fields (*) and try again.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-neutral-600 text-sm m-0">* Required fields</p>
              <Button
                label={status === "loading" ? "Sending…" : "Send Message"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
