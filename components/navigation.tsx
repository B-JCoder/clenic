"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import Image from "next/image"

const navItems = [
  { id: 1, isActive: true, text: "Home", link: "#home" },
  { id: 2, isActive: false, text: "About Us", link: "#about" },
  { id: 3, isActive: false, text: "Services", link: "#services" },
  { id: 4, isActive: false, text: "Specialties", link: "#specialties" },
  { id: 5, isActive: false, text: "Contact", link: "#contact" },
]

export function Navigation() {
  const [openNavbar, setOpenNavbar] = useState(false)

  const toggleNavbar = () => setOpenNavbar((prev) => !prev)
  const closeNavbar = () => setOpenNavbar(false)

  return (
    <>
      {/* Overlay for mobile */}
      <div
        onClick={closeNavbar}
        aria-hidden="true"
        className={`fixed inset-0 z-30 bg-black/40 ${openNavbar ? "flex lg:hidden" : "hidden"}`}
      />
      <header className="sticky left-0 top-0 w-full flex items-center h-20 bg-gradient-to-r from-[#68a0a3]  via-[#fff] to-[#74c477ab] shadow-md z-40">

        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          {/* Hamburger button */}
   <div className="w-full flex items-center lg:hidden">
  <button
    onClick={toggleNavbar}
    aria-label="toggle navbar"
    className="outline-none border-r border-r-black/30 pr-3 relative py-3"
  >
    <span
      aria-hidden="true"
      className={`block h-0.5 w-6 rounded bg-black transition duration-300 ${
        openNavbar ? "rotate-45 translate-y-[0.33rem]" : ""
      }`}
    />
    <span
      aria-hidden="true"
      className={`block mt-2 h-0.5 w-6 rounded bg-black transition duration-300 ${
        openNavbar ? "-rotate-45 -translate-y-[0.33rem]" : ""
      }`}
    />
  </button>
</div>


          {/* Nav Links */}
          <div
            className={`top-full absolute left-0 bg-blue-50 lg:flex w-full ease-linear duration-300 lg:relative lg:bg-transparent border-b border-b-blue-200 lg:border-b-0 ${
              openNavbar ? "" : "invisible opacity-0 lg:visible lg:opacity-100"
            }`}
          >
            <ul className="px-5 sm:px-10 md:px-12 lg:px-0 flex flex-col lg:flex-row lg:items-center gap-y-6 lg:gap-x-6 text-gray-800 py-4 lg:py-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`relative py-2 font-medium tracking-wide after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg ${
                      item.isActive ? "after:bg-green-400 after:w-6" : ""
                    } hover:text-teal-600`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          
        <Link
  href="http://www.serenemindwellness.us"
  className="flex items-center gap-x-3"
>
  <Image
    src="/jflogo.png"
    alt="Serene Minds Wellness logo - silhouette tree mind"
    width={160}
    height={160}
    className="w-28 h-auto sm:w-32 md:w-36 lg:w-40 rounded-full"
    priority
  />
</Link>

          
          

          {/* Right side icons */}
          <div className="flex justify-end items-center gap-x-4 w-full text-black">
            <a
              href="tel:+14076937055"
              className="duration-200 ease-linear hover:text-yellow-200 flex items-center gap-x-1"
              rel="noreferer"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">(407) 693-7055</span>
            </a>
         
           
          </div>
        </nav>
      </header>
    </>
  )
}
