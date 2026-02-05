"use client";

import Link from "next/link";
import { RiHome4Line, RiRefreshLine } from "@remixicon/react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                {/* Error Icon */}
                <div className="mb-8">
                    <div className="w-24 h-24 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
                        <span className="text-6xl">⚠️</span>
                    </div>
                </div>

                {/* Error Message */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Oops! Something went wrong
                </h1>
                <p className="text-neutral-400 text-lg mb-8">
                    We encountered an unexpected error. Don't worry, it's not your fault.
                </p>

                {/* Error Details (only in development) */}
                {process.env.NODE_ENV === "development" && (
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 mb-8 text-left">
                        <p className="text-sm text-red-400 font-mono break-all">
                            {error.message}
                        </p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="primary-btn flex items-center justify-center gap-2"
                        aria-label="Try again"
                    >
                        <RiRefreshLine size={20} />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="primary-btn flex items-center justify-center gap-2"
                        aria-label="Go back to home page"
                    >
                        <RiHome4Line size={20} />
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
