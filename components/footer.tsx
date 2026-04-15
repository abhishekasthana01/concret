import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Printer } from "lucide-react"

const quickLinks = [
  { label: "Concrete", href: "#concrete" },
  { label: "Aggregates", href: "#aggregates" },
  { label: "Calculator", href: "#calculator" },
  { label: "Locations", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-muted/30">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Central Valley Concrete"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <div>
                <span className="font-heading text-sm font-bold tracking-tight">
                  Central Valley
                </span>
                <span className="block text-[0.6rem] font-medium tracking-widest text-muted-foreground uppercase">
                  Concrete & Trucking
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Independently owned and family operated, supplying the Central
              Valley with quality ready-mix concrete since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Office */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-heading text-sm font-semibold tracking-wider uppercase">
              Corporate Office
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary/60" />
                <div>
                  <div>3823 N. HWY 59</div>
                  <div>Merced, CA 95348</div>
                </div>
              </div>
              <a
                href="tel:209-723-8846"
                className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 shrink-0 text-primary/60" />
                Phone: 209-723-8846
              </a>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Printer className="size-4 shrink-0 text-primary/60" />
                Fax: 209-384-2395
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Central Valley Concrete & Trucking. All
            rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Serving the Central Valley with Quality Since Day One
          </p>
        </div>
      </div>
    </footer>
  )
}
