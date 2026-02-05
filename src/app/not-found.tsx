import Link from "next/link";
import { RiHome4Line, RiSearchLine } from "@remixicon/react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-[120px] md:text-[200px] font-bold leading-none text-neutral-800">
                        404
                    </h1>
                </div>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Page Not Found
                </h2>
                <p className="text-neutral-400 text-lg mb-8">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="primary-btn flex items-center justify-center gap-2"
                        aria-label="Go back to home page"
                    >
                        <RiHome4Line size={20} />
                        Go Home
                    </Link>
                    <Link
                        href="/portfolio"
                        className="primary-btn flex items-center justify-center gap-2"
                        aria-label="View portfolio"
                    >
                        <RiSearchLine size={20} />
                        View Portfolio
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-neutral-800">
                    <p className="text-sm text-neutral-500 mb-4">Quick Links:</p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <Link href="/about" className="hover:underline text-neutral-400">
                            About Me
                        </Link>
                        <Link href="/services" className="hover:underline text-neutral-400">
                            Services
                        </Link>
                        <Link href="/contact" className="hover:underline text-neutral-400">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
