'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c120e]/95 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-serif font-light tracking-wide text-white hover:text-white/90 transition-colors"
        >
          Root &amp; Reflect
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 py-1 ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                } after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-white after:transition-transform after:duration-300 ${
                  isActive
                    ? 'after:scale-x-100'
                    : 'after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-left'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/appointment"
            className="px-6 py-2.5 text-xs md:text-sm uppercase tracking-wider bg-white text-[#142214] font-bold rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1 text-white hover:text-white/80 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c120e]/97 backdrop-blur-xl border-t border-white/10 px-6 pb-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 text-center text-sm uppercase tracking-[0.2em] font-bold border-b border-white/10 transition-colors ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/appointment"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 px-6 py-3.5 text-center text-xs uppercase tracking-widest bg-white text-[#142214] font-bold rounded-full hover:bg-white/90 active:scale-95 transition-all shadow-lg"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  )
}
