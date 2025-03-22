
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-400 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-black font-medium text-xl tracking-tight hover:opacity-80 transition-opacity duration-200"
        >
          Shubham's PDF Reader
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/#features" label="Features" />
          <NavLink href="/#how-it-works" label="How It Works" />
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            to="/chat"
            className="rounded-lg bg-black text-white px-5 py-2 text-sm font-medium hover:bg-black/80 transition-colors duration-200"
          >
            Try Now
          </Link>
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
}

function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-black/80 text-sm font-medium hover:text-black transition-colors duration-200"
    >
      {label}
    </a>
  );
}
