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
    // <nav
    //   className={`
    //     fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300
    //     ${
    //       scrolled
    //         ? "bg-white/10 backdrop-blur-md text-black"
    //         : "bg-[#1A0505] text-white"
    //     }
    //   `}
    // >
<nav className="py-4 px-16 flex">
  <a
    href="https://www.technobillion.ai/career"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-auto font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition bg-yellow-400 text-black"
  >
    Enroll Now
  </a>
</nav>

  );
}

// function SidebarDropdown({
//   open,
//   setOpen,
//   onClose,
// }: {
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   onClose: () => void;
// }) {
//   return (
//     <div>
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center text-white hover:text-yellow-400 px-2 py-1 rounded select-none"
//         aria-expanded={open}
//         aria-controls="mobile-pages-menu"
//       >
//         Pages{" "}
//         <ChevronDown
//           className={`w-4 h-4 ml-1 transition-transform ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>
//       {open && (
//         <div
//           id="mobile-pages-menu"
//           className="pl-4 mt-2 space-y-1"
//           role="region"
//           aria-label="Pages submenu"
//         >
//           <a
//             href="https://www.technobillion.ai/about"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
//             onClick={onClose}
//           >
//             About
//           </a>
//           <Link
//             href="/faq"
//             className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
//             onClick={onClose}
//           >
//             FAQ
//           </Link>
//           <a
//             href="https://www.technobillion.ai/career"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block text-white hover:text-yellow-400 px-2 py-1 rounded"
//             onClick={onClose}
//           >
//             Contact
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }
