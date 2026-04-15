import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Concrete plant in the Central Valley"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-white/70 uppercase backdrop-blur-sm">
            <span className="inline-block size-1.5 rounded-full bg-primary animate-pulse" />
            Independently Owned &amp; Family Operated
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            We Supply the{" "}
            <span className="inline-block text-white bg-clip-text text-transparent">
              Central Valley
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-white font-bold leading-relaxed  sm:text-lg md:text-xl">
            Ready-mix concrete, sand &amp; gravel, trucking services and more.
            Central Valley Concrete &amp; Trucking takes pride in being the
            Central Valley&apos;s trusted local supplier.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="h-12 px-8 text-base">
              <a href="#concrete" className="gap-2">
                Our Products
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-12 border-white/20 bg-white/5 px-8 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <a href="tel:209-723-8846" className="gap-2">
                <Phone className="size-4" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-10" style={{ animationDelay: "0.3s" }}>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="font-heading text-3xl font-bold text-white sm:text-4xl">8</div>
            <div className="mt-1 text-xs font-medium tracking-wider text-white/50 uppercase sm:text-sm">
              Plant Locations
            </div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="font-heading text-3xl font-bold text-white sm:text-4xl">50+</div>
            <div className="mt-1 text-xs font-medium tracking-wider text-white/50 uppercase sm:text-sm">
              Years of Service
            </div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="font-heading text-3xl font-bold text-white sm:text-4xl">100%</div>
            <div className="mt-1 text-xs font-medium tracking-wider text-white/50 uppercase sm:text-sm">
              Locally Owned
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-5 text-white/40" />
      </div>
    </section>
  )
}
