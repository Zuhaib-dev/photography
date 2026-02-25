"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

function getOrdinalSuffix(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/visitor-count")
      .then((r) => r.json())
      .then((data) => {
        setCount(data.count);
      })
      .catch(() => setCount(null))
      .finally(() => setLoading(false));
  }, []);

  // Don't render if API failed
  if (!loading && count === null) return null;

  const suffix = count !== null ? getOrdinalSuffix(count) : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-center py-6"
    >
      <div className="inline-flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/50 px-6 py-4 backdrop-blur-sm">
        {/* Eye icon */}
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-900/60">
          <Eye className="h-4 w-4 text-neutral-400" />
        </div>

        {/* Text */}
        <p className="text-sm sm:text-base font-medium text-neutral-300">
          You are the{" "}
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-block w-16 h-4 rounded bg-neutral-700 animate-pulse align-middle"
              />
            ) : (
              <motion.span
                key="count"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="font-bold text-white"
              >
                {formatNumber(count!)}
                <sup className="text-xs font-semibold">{suffix}</sup>
              </motion.span>
            )}
          </AnimatePresence>{" "}
          visitor
        </p>
      </div>
    </motion.div>
  );
}
