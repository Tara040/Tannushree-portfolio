"use client";
import { useState } from "react";
import Link from "next/link";
import Switcher from "./Switcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-lime-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center h-14 items-center">
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {/* Navbar links */}
              <Link
                href="/portfolio/home"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                HOME
              </Link>
              <Link
                href="/portfolio/about"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                ABOUT ME
              </Link>
              <Link
                href="/portfolio/projects"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                PROJECTS
              </Link>
              <Link
                href="/portfolio/resume"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                RESUME
              </Link>
              <Link
                href="/portfolio/skills"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                SKILLS
              </Link>
              <Link
                href="/portfolio/contact"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                CONTACT
              </Link>
              <Link
                href="/portfolio/blogs"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                BLOGS
              </Link>
              <div className="w-[30px] h-[30px] ">
                <Switcher />
              </div>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:border-white border-transparent border-2 hover:border-current focus:outline-none focus:bg-lime-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/portfolio/home"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                HOME
              </Link>
              <Link
                href="/portfolio/about"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                ABOUT ME
              </Link>
              <Link
                href="/portfolio/projects"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                PROJECTS
              </Link>
              <Link
                href="/portfolio/resume"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                RESUME
              </Link>
              <Link
                href="/portfolio/skills"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                SKILLS
              </Link>
              <Link
                href="/portfolio/contact"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                CONTACT
              </Link>
              <Link
                href="/portfolio/blogs"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                BLOGS
              </Link>
              <div className="">
                <Switcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
