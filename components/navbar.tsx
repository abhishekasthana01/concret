"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon, Phone } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Concrete", href: "/#concrete" },
  { label: "Aggregates", href: "/aggregates" },
  { label: "Trucks", href: "/trucks" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/50 bg-background shadow-lg shadow-black/5"
          : "border-border/30 bg-background"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Image
            src="/logo.png"
            alt="Central Valley Concrete"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div className="hidden sm:block">
            <span className="font-heading text-sm font-bold tracking-tight text-foreground">
              Central Valley
            </span>
            <span className="block text-[0.65rem] font-medium tracking-widest text-muted-foreground uppercase">
              Concrete & Trucking
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>
          )}
          <Button asChild>
            <a href="tel:209-723-8846" className="gap-2">
              <Phone className="size-3.5" />
              Contact Us
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "glass overflow-hidden border-b border-border/50 transition-all duration-300 md:hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-none"
        )}
      >
        <div className="space-y-1 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button asChild className="w-full">
              <a href="tel:209-723-8846" className="gap-2">
                <Phone className="size-3.5" />
                Call Us: 209-723-8846
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
