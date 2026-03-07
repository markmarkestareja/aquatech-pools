"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface NavLink {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="absolute w-full top-0 z-50 bg-transparent">
      <nav className="w-full mx-auto px-6 md:px-12 lg:px-24 xl:px-28 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          AAAAAAhhhh
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b-2 border-transparent hover:border-b-2 hover:border-primary transition-bg duration-100">
              <Link
                href={link.href}
                className={`transition font-medium px-4 ${
                  isActive(link.href)
                    ? "text-primary hover:bg-transparent"
                    : "text-foreground-2 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>
        </button>
      </nav>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-screen md:hidden bg-white border-l w-[70vw] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <ul className="flex flex-col p-6 space-y-12">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block pt-4 border-b-1${
                isActive(link.href)
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  )
}