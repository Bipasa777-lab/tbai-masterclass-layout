"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

// Import shadcn Sheet components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"; // adjust the path if different

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <nav className="bg-[#1a0000] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side empty */}
        <div className="w-1/4"></div>

        {/* Center menu */}
        <div className="hidden md:flex items-center justify-center space-x-6 w-2/4">
          <Link href="/" className="text-sm hover:text-yellow-400">
            Home
          </Link>
          <Link href="/courses" className="text-sm text-yellow-500">
            Courses
          </Link>
          <Link href="/pricing" className="text-sm hover:text-yellow-400">
            Pricing
          </Link>

          {/* Pages Dropdown */}
          <div
            className="relative text-sm cursor-pointer"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="flex items-center hover:text-yellow-400 select-none">
              Pages <ChevronDown className="w-4 h-4 ml-1" />
            </div>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-[#280000] border border-[#3b0000] rounded-md shadow-lg z-50">
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-[#3b0000]"
                >
                  About
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 hover:bg-[#3b0000]"
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-[#3b0000]"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="text-sm hover:text-yellow-400">
            Blog
          </Link>
        </div>

        {/* Right side Enroll Button */}
        <div className="hidden md:flex justify-end w-1/4">
          <Link href="/enroll">
            <button className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition">
              Enroll Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button triggers Sheet */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2 rounded-md hover:bg-yellow-400 hover:text-black transition"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#280000] text-white p-6 w-64"
          >
            <SheetHeader>
              <SheetTitle className="text-yellow-400 font-bold text-lg mb-6 flex justify-between items-center">
                Menu
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
                onClick={() => setSheetOpen(false)}
              >
                Home
              </Link>
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

              <Link
                href="/blog"
                className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
                onClick={() => setSheetOpen(false)}
              >
                Blog
              </Link>

              <Link href="/enroll" onClick={() => setSheetOpen(false)}>
                <button className="w-full bg-yellow-400 text-black font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition mt-4">
                  Enroll Now
                </button>
              </Link>
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
          <Link
            href="/about"
            className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
            onClick={onClose}
          >
            About
          </Link>
          <Link
            href="/faq"
            className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
            onClick={onClose}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
