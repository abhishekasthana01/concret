import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Phone, Mountain } from "lucide-react"

export const metadata: Metadata = {
  title: "Aggregates | Central Valley Concrete & Trucking",
  description:
    "Sand, gravel, crushed rock, aggregate base, pea gravel, drain rock, ballasts, cobbles, decomposed granite, and asphalt. Central Valley Concrete & Trucking supplies the Central Valley with quality aggregates.",
}

const aggregates = [
  {
    id: 1,
    name: "Crushed Rock",
    image: "/aggregate/agg-1.png",
    description:
      'Available in various colors and sizes between 1/4" up to 6" or more. Crushed Rock has various uses in construction such as road building, backfilling and drainage applications. It\'s also used as a decorative rock for hardscaping.',
    tags: ["Road Building", "Backfill", "Drainage", "Decorative"],
  },
  {
    id: 2,
    name: "Class 2 Aggregate Base",
    image: "/aggregate/agg-2.png",
    description:
      'Aggregate Base, or AB for short, are used in road building and backfill applications. We provide both "natural" and "Recycled" AB, both of which are classified as "Class 2" per Caltrans specifications.',
    tags: ["Road Building", "Backfill", "Caltrans Spec"],
  },
  {
    id: 3,
    name: "Sand / Dirt",
    image: "/aggregate/agg-3.png",
    description:
      "We supply many different grades of sand & dirt for various applications including concrete sand, plaster sand, fill sand, sandy loam, Caltrans engineered fill and more. Whether you're mixing your own concrete, building a sand box or backfilling a hole, we've got the material you need.",
    tags: ["Concrete Sand", "Plaster Sand", "Fill Sand", "Sandy Loam"],
  },
  {
    id: 4,
    name: '1" x #4 Gravel',
    image: "/aggregate/agg-4.png",
    description:
      '1" x #4 gravel is the primary rock used in ready-mix concrete. It can also be used for drainage applications, backfill and as a decorative rock for hardscaping.',
    tags: ["Ready-Mix", "Drainage", "Backfill", "Decorative"],
  },
  {
    id: 5,
    name: '3/8" Pea Gravel',
    image: "/aggregate/agg-5.png",
    description:
      "Commonly called Pea Gravel, this rock is used in ready-mix concrete production, backfilling, drainage applications and as a decorative rock for hardscaping.",
    tags: ["Concrete", "Backfill", "Drainage", "Decorative"],
  },
  {
    id: 6,
    name: '1½" Drain Rock',
    image: "/aggregate/agg-6.png",
    description:
      "Also called septic rock, 1½\" drain rock is often used for drainage purposes, specifically in French drain or leach line systems. It's also a very decorative rock that can be used for hardscaping.",
    tags: ["Drainage", "French Drain", "Leach Line", "Decorative"],
  },
  {
    id: 7,
    name: "Ballasts",
    image: "/aggregate/agg-7.png",
    description:
      'Ballast rock is angular like crushed rock and comes in different sizes between 2½" and 6". It is used for railroad ballast as well as other applications such as a decorative rock for hardscaping, erosion control, as well as dust and track-out remediation.',
    tags: ["Railroad", "Erosion Control", "Decorative"],
  },
  {
    id: 8,
    name: "Cobbles",
    image: "/aggregate/agg-8.png",
    description:
      'Decorative cobbles come in various sizes from 2" in diameter all the way up to 14". These aesthetic rocks are used in landscaping as dry creek beds and other hardscaping applications. They can also be used for erosion control.',
    tags: ["Landscaping", "Dry Creek Beds", "Erosion Control"],
  },
  {
    id: 9,
    name: "Decomposed Granite",
    image: "/aggregate/agg-9.png",
    description:
      "Also abbreviated as DG, this material can be sourced in various colors including tan, bluish-gray and gold. DG is used as a landscaping material, for horse arena applications and to create natural looking pathways or backfilled areas. DG can also be combined with a stabilizer to create harder more durable natural surface.",
    tags: ["Landscaping", "Pathways", "Horse Arenas", "Natural Surface"],
  },
  {
    id: 10,
    name: "Asphalt",
    image: "/aggregate/agg-10.png",
    description:
      "Asphalt is made from sand, gravel and an oil-based binder and is used to build roads, driveways and pathways. We supply both hot and cold asphalt, also known as coldmix.",
    tags: ["Roads", "Driveways", "Pathways", "Hot & Cold Mix"],
  },
]

export default function AggregatesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden sm:min-h-[70svh]">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/aggregate/agg-1.png"
            alt="Aggregate materials - Crushed Rock"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 border-white/10 bg-white/5 text-white/80 backdrop-blur-sm">
              <Mountain className="mr-1.5 size-3" />
              Sand &amp; Gravel Products
            </Badge>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Aggregates
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
              It is estimated that 85,000 tons of aggregates are necessary to
              construct one mile of a four lane highway.
            </p>

            <div className="mt-10">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-12 border-white/20 bg-white/5 px-8 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                <a href="tel:209-723-8846" className="gap-2">
                  <Phone className="size-4" />
                  Order Aggregates
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div
            className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-10"
          >
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="font-heading text-3xl font-bold text-white sm:text-4xl">
                10
              </div>
              <div className="mt-1 text-xs font-medium tracking-wider text-white/50 uppercase sm:text-sm">
                Product Types
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="font-heading text-3xl font-bold text-white sm:text-4xl">
                85K
              </div>
              <div className="mt-1 text-xs font-medium tracking-wider text-white/50 uppercase sm:text-sm">
                Tons / Mile
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="font-heading text-3xl font-bold text-white sm:text-4xl">
                ¼&quot;–14&quot;
              </div>
              <div className="mt-1 text-xs font-medium tracking-wider text-white/50 uppercase sm:text-sm">
                Size Range
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aggregates Grid */}
      <section className="relative py-24 sm:py-32">
        {/* Background accents */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section intro */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Our <span className="gradient-text">Products</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Browse our full range of aggregate products for construction,
              landscaping, and road building applications.
            </p>
            <Separator className="mx-auto mt-8 max-w-xs" />
          </div>

          {/* Product Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aggregates.map((agg) => (
              <Card
                key={agg.id}
                className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={agg.image}
                    alt={agg.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={85}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-black/40 font-heading text-sm font-bold text-white backdrop-blur-sm">
                      {String(agg.id).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Name overlay */}
                  <div className="absolute right-3 bottom-3 left-3">
                    <h3 className="font-heading text-xl font-bold text-white drop-shadow-lg">
                      {agg.name}
                    </h3>
                  </div>
                </div>

                <CardContent className="space-y-4 p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {agg.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {agg.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[0.65rem] font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Need Aggregates for Your Project?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contact your nearest plant to place an order. We&apos;ll help you
            find the right material for the job.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="h-12 px-8 text-base">
              <a href="tel:209-723-8846" className="gap-2">
                <Phone className="size-4" />
                Call Us: 209-723-8846
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
