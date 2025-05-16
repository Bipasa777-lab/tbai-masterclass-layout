"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

// Import shadcn Sheet components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // adjust the path if different

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimer = useRef<NodeJS.Timeout | null>(null);

  // Listen to scroll to toggle glassmorphism
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Function to open dropdown and set timer
  const handlePagesClick = () => {
    setShowDropdown((prev) => !prev);
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300
        ${
          scrolled
            ? "bg-white/10 backdrop-blur-md text-black"
            : "bg-[#1A0505] text-white"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side empty */}
        <div className="w-1/4"></div>

        {/* Center menu */}
        <div className="hidden md:flex items-center justify-center space-x-6 w-2/4">
          <a
            href="https://academy.technobillion.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm hover:text-yellow-400 ${
              scrolled ? "text-black" : ""
            }`}
          >
            Home
          </a>
          <Link
            href="/courses"
            className={`text-sm ${
              scrolled ? "text-yellow-600" : "text-yellow-500"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/pricing"
            className={`text-sm hover:text-yellow-400 ${
              scrolled ? "text-black" : ""
            }`}
          >
            Pricing
          </Link>

          {/* Pages Dropdown */}
          <div className="relative text-sm cursor-pointer">
            <div
              className={`flex items-center select-none hover:text-yellow-400 ${
                scrolled ? "text-black" : ""
              }`}
              onClick={handlePagesClick}
            >
              Pages <ChevronDown className="w-4 h-4 ml-1" />
            </div>
            {showDropdown && (
              <div
                className={`absolute top-full left-0 mt-2 w-40 rounded-md shadow-lg z-50 ${
                  scrolled
                    ? "bg-white/30 border border-white/20"
                    : "bg-[#280000] border border-[#3b0000]"
                }`}
              >
                <a
                  href="https://www.technobillion.ai/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-4 py-2 hover:bg-yellow-400/30 ${
                    scrolled ? "text-black" : ""
                  }`}
                >
                  About
                </a>
                <Link
                  href="/faq"
                  className={`block px-4 py-2 hover:bg-yellow-400/30 ${
                    scrolled ? "text-black" : ""
                  }`}
                >
                  FAQ
                </Link>
                <a
                  href="https://www.technobillion.ai/career"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-4 py-2 hover:bg-yellow-400/30 ${
                    scrolled ? "text-black" : ""
                  }`}
                >
                  Contact
                </a>
              </div>
            )}
          </div>

          <a
            href="https://www.technobillion.ai/blog"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm hover:text-yellow-400 ${
              scrolled ? "text-black" : ""
            }`}
          >
            Blog
          </a>
        </div>

        {/* Right side Enroll Button */}
        <div className="hidden md:flex justify-end w-1/4">
          <a
            href="https://www.technobillion.ai/career"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition ${
                scrolled
                  ? "bg-yellow-400 text-black"
                  : "bg-yellow-400 text-black"
              }`}
            >
              Enroll Now
            </button>
          </a>
        </div>

        {/* Mobile Hamburger Button triggers Sheet */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button
              className={`md:hidden p-2 rounded-md transition-colors duration-300 ease-in-out ${
                scrolled
                  ? "hover:bg-yellow-400 hover:text-black text-black"
                  : "hover:bg-yellow-400 hover:text-black text-white"
              }`}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#280000] text-white p-6 w-64 border-none outline-none shadow-none ring-0"
          >
            <SheetHeader>
              <SheetTitle className="text-yellow-400 font-bold text-lg mb-6 flex justify-between items-center">
                Menu
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col space-y-4">
              <a
                href="https://academy.technobillion.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
                onClick={() => setSheetOpen(false)}
              >
                Home
              </a>
              <Link
                href="/courses"
                className="block text-yellow-500 px-2 py-1 rounded"
                onClick={() => setSheetOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/pricing"
                className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
                onClick={() => setSheetOpen(false)}
              >
                Pricing
              </Link>

              {/* Pages Dropdown in Sidebar */}
              <SidebarDropdown
                open={showDropdown}
                setOpen={setShowDropdown}
                onClose={() => setSheetOpen(false)}
              />

              <a
                href="https://www.technobillion.ai/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
                onClick={() => setSheetOpen(false)}
              >
                Blog
              </a>

              <a
                href="https://www.technobillion.ai/career"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-yellow-400 text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition mt-4">
                  Enroll Now
                </button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

function SidebarDropdown({
  open,
  setOpen,
  onClose,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  onClose: () => void;
}) {
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-white hover:text-yellow-400 px-2 py-1 rounded select-none"
        aria-expanded={open}
        aria-controls="mobile-pages-menu"
      >
        Pages{" "}
        <ChevronDown
          className={`w-4 h-4 ml-1 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div
          id="mobile-pages-menu"
          className="pl-4 mt-2 space-y-1"
          role="region"
          aria-label="Pages submenu"
        >
          <a
            href="https://www.technobillion.ai/about"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
            onClick={onClose}
          >
            About
          </a>
          <Link
            href="/faq"
            className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
            onClick={onClose}
          >
            FAQ
          </Link>
          <a
            href="https://www.technobillion.ai/career"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
            onClick={onClose}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
