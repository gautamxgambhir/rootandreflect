'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
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
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const diff = currentScrollY - lastScrollY.current

          // Always visible at the absolute top of the page
          if (currentScrollY <= 80) {
            setIsVisible(true)
          } else if (!mobileMenuOpen) {
            // High-fidelity tracking suited for Lenis smooth-scroll ticks
            if (diff > 5) {
              setIsVisible(false) // Scroll down -> hide
            } else if (diff < -5) {
              setIsVisible(true) // Scroll up -> show
            }
          }
          lastScrollY.current = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  return (
    <header className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none transition-all duration-350 ease-in-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-32 opacity-0 scale-95'}`}>
      <nav className={`w-full max-w-6xl border border-white/10 px-8 py-4.5 flex flex-col md:flex-row md:items-center justify-between text-white pointer-events-auto shadow-2xl transition-all duration-300 ${mobileMenuOpen ? 'rounded-[24px] bg-[#0c120e]/95 backdrop-blur-2xl' : 'rounded-full bg-black/35 backdrop-blur-lg'}`}>
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="text-xl md:text-2xl lg:text-3xl font-serif font-light tracking-wide text-white hover:text-white/90 transition-colors">
            Root & Reflect
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 text-white hover:text-white/80 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop Navigation */}
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
                  isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-left'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/appointment"
            className="px-6 py-2.5 text-xs md:text-sm uppercase tracking-wider bg-white text-[#142214] font-bold rounded-full hover:bg-white/95 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Navigation Dropdown Overhaul */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-5 pt-6 pb-3 border-t border-white/10 mt-4 w-full animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-3.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-center py-2.5 text-base uppercase tracking-[0.2em] font-bold transition-all duration-200 ${
                      isActive ? 'text-white bg-white/10 rounded-xl' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
            <Link
              href="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 px-6 py-3.5 text-center text-xs uppercase tracking-widest bg-white text-[#142214] font-bold rounded-full hover:bg-white/95 active:scale-95 transition-all shadow-lg"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
