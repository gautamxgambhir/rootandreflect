'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-full ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] w-full max-w-3xl sm:max-w-4xl'
            : 'bg-white/80 backdrop-blur-md border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] w-full max-w-4xl sm:max-w-5xl'
        }`}
      >
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#142214] hover:bg-black/5">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-[#0c120e] border-white/10">
              <div className="flex flex-col gap-8 mt-10">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif font-light text-white">
                  Root &amp; Reflect
                </Link>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        pathname === link.href ? 'text-white' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <Link href="/appointment" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full bg-white text-[#142214] font-bold hover:bg-white/90">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-serif font-light tracking-wide text-[#142214] hover:text-[#142214]/80 transition-colors"
        >
          Root &amp; Reflect
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors relative group ${
                pathname === link.href ? 'text-[#142214]' : 'text-[#142214]/70 hover:text-[#142214]'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#142214] transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/appointment">
            <Button
              size="sm"
              className="rounded-full px-4 lg:px-6 py-2 font-bold text-sm bg-white text-[#142214] hover:bg-white/90 transition-all"
            >
              Book Appointment
            </Button>
          </Link>
        </div>

        {/* Spacer for mobile layout balance */}
        <div className="w-6 md:hidden" />
      </nav>
    </div>
  )
}
