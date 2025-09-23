"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import Image from "next/image"

const navItems = [
  {
    id: 1,
    isActive: true,
    text: "Home",
    link: "#home",
  },
  {
    id: 2,
    isActive: false,
    text: "About Us",
    link: "#about",
  },
  {
    id: 3,
    isActive: false,
    text: "Services",
    link: "#services",
  },
  {
    id: 4,
    isActive: false,
    text: "Specialties",
    link: "#specialties",
  },
  {
    id: 5,
    isActive: false,
    text: "Contact",
    link: "#contact",
  },
]

export function Navigation() {
  const [openNavbar, setOpenNavbar] = useState(false)

  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar)
  }

  const closeNavbar = () => {
    setOpenNavbar(false)
  }

  return (
    <>
      <div
        onClick={() => {
          closeNavbar()
        }}
        aria-hidden="true"
        className={`fixed glass inset-0 z-30 ${openNavbar ? "flex lg:hidden" : "hidden"}`}
      />
      <header className="sticky left-0 top-0 w-full flex items-center h-20 glass border-b border-b-border shadow-sm z-40">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="w-full flex items-center lg:hidden">
            <button
              onClick={() => {
                toggleNavbar()
              }}
              aria-label="toggle navbar"
              className="outline-none border-r border-r-border pr-3 relative py-3 children:flex"
            >
              <span
                aria-hidden="true"
                className={`
                h-0.5 w-6 rounded bg-foreground transition duration-300
                ${openNavbar ? " rotate-45 translate-y-[0.33rem]" : ""}
              `}
              />
              <span
                aria-hidden="true"
                className={`
                mt-2 h-0.5 w-6 rounded bg-foreground transition duration-300
                ${openNavbar ? " -rotate-45 -translate-y-[0.33rem]" : ""}
              `}
              />
            </button>
          </div>
          <div
            className={`
            top-full absolute left-0 bg-background
             lg:flex w-full ease-linear duration-300
            lg:relative lg:bg-transparent border-b border-b-border lg:border-b-0
            ${openNavbar ? "" : "invisible opacity-0 lg:visible lg:opacity-100"}
          `}
          >
            <ul className=" px-5 sm:px-10 md:px-12 lg:px-0 flex flex-col lg:flex-row lg:items-center gap-y-6 lg:gap-x-5 text-foreground/80 py-4 lg:py-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`
                      relative py-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg
                      ${item.isActive ? "after:bg-primary after:w-4" : ""}
                      hover:text-primary
                    `}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center flex-1">
            <Link
              href="http://www.serenemindwellness.us"
              className="flex items-center gap-x-3 text-gray-800 dark:text-gray-200"
            >
              <Image
                src="/images/jflogo.jpg"
                alt="Serene Minds Wellness logo - silhouette tree mind"
                width={36}
                height={36}
                className="h-9 w-9 rounded-md object-contain"
                priority
              />
              <span aria-hidden="true" className="hidden sm:flex font-semibold">
                Serene Minds Wellness
              </span>
            </Link>
          </div>
          <div className="flex justify-end items-center gap-x-4 w-full text-foreground/80">
            <a
              href="tel:+14076937055"
              className="duration-200 ease-linear hover:text-primary flex items-center gap-x-1"
              rel="noreferer"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">(407) 693-7055</span>
            </a>
            <a
              href="#"
              target="_blank"
              className="duration-200 ease-linear hover:text-primary"
              rel="noreferrer noreferer"
            >
              <span className="sr-only">facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              className="duration-200 ease-linear hover:text-primary"
              rel="noreferrer noreferer"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.299-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}
