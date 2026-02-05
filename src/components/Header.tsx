"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { navItems } from "@/data/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle button click event
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  return (
    <header className="border-b border-neutral-900" role="banner">
      <div className="container flex justify-between items-center py-5 lg:pb-0">
        {/* Logo */}
        <Link className="text-3xl font-medium uppercase" href={"/"}>
          Zuhaib
        </Link>

        {/* Mobile menu */}
        <nav
          className={`navbar ${isOpen ? "active" : ""}`}
          aria-label="Mobile navigation"
          role="navigation"
        >
          {/* nav top */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-medium uppercase">Zuhaib</h3>
            <button
              className="w-[50px] h-[50px] border flex items-center justify-center rounded-full border-neutral-800 hover:bg-neutral-900 transition-colors"
              onClick={handleClick}
              aria-label="Close navigation menu"
            >
              <RiCloseLine size={30} />
            </button>
          </div>

          {/* nav list */}
          <ul className="grid">
            {navItems.map((item) => (
              <li
                className="border-t border-neutral-900 text-center "
                key={item.id}
              >
                <Link
                  href={item.path}
                  className={`block py-5 hover:bg-neutral-900 ${pathname === item.path ? "bg-neutral-900" : ""
                    }`}
                  onClick={handleClick}
                  aria-current={pathname === item.path ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact btn */}
          <Link
            href="/contact"
            className="primary-btn block text-center mt-10"
            onClick={handleClick}
            aria-label="Contact me"
          >
            contact me
          </Link>
        </nav>

        {/* Lg menu */}
        <ul
          className="flex items-center max-lg:hidden border border-neutral-800 rounded-t-2xl overflow-hidden"
          role="navigation"
          aria-label="Desktop navigation"
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`px-8 py-5 block hover:bg-neutral-900 transition-colors ${pathname === item.path ? "bg-neutral-900" : ""
                  }`}
                aria-current={pathname === item.path ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* lg contact btn */}
        <Link
          href="/contact"
          className="primary-btn hidden lg:block"
          aria-label="Contact me"
        >
          contact me
        </Link>

        {/* menu toggle */}
        <button
          className="lg:hidden"
          onClick={handleClick}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <RiMenu3Line size={30} />
        </button>

        {/* overlay */}
        <div
          className={`overlay ${isOpen ? "active" : ""}`}
          onClick={handleClick}
          aria-hidden="true"
        ></div>
      </div>
    </header>
  );
};

export default Header;
