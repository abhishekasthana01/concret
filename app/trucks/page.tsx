import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Phone, Truck } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Trucks | Central Valley Concrete & Trucking",
  description:
    "Explore our fleet of trucks including concrete mixers, transfers, bottom dumps, mega dumps, end dumps, side dumps, low beds, crane trucks, and pneumatics. Central Valley Trucking has the right truck for your job.",
}

const trucks = [
  {
    id: 1,
    name: "Concrete Mixers",
    alias: "Mixers",
    image: "/trucks/truck-1.png",
    description:
      'Also called "mixers", these trucks primarily deliver ready-mix concrete and slurry however they can also deliver sand and aggregates if needed. The materials are loaded via our batch plants into a revolving drum on the truck. The material is then mixed by the turning of the drum while the truck is in transit to your site.',
  },
  {
    id: 2,
    name: "Transfer Truck",
    alias: "Transfers",
    image: "/trucks/truck-2.png",
    description:
      'Also called "transfers", these are dump trucks that pull a dump trailer. This setup allows the truck to carry up to two different materials at a time. These trucks haul asphalt, dirt and aggregates up to 14" in diameter and are primarily used when dumping in a pile is required, when there is limited access room on a site or when dumping asphalt directly into a paver is required.',
  },
  {
    id: 3,
    name: "Bottom Dumps",
    alias: "Bottoms / Belly Dumps",
    image: "/trucks/truck-3.png",
    description:
      'Also called "bottoms" or "belly dumps", these are units that pull trailers, which open at the bottom. The gates can be adjusted to dump in a tight pile or a long windrow. Bottoms typically haul asphalt, dirt and aggregates that are 1½" in diameter and smaller. Our light weight trucks and trailers mean that these trucks can haul up to 28 ton making them perfect for high production projects.',
  },
  {
    id: 4,
    name: "Mega Dumps",
    alias: "Super Dumps",
    image: "/trucks/truck-4.png",
    description:
      'Also called "super dumps", these are dump trucks that dump from the rear like transfers but do not pull a trailer. They can haul asphalt, dirt and aggregates up to about 6" in diameter. The lack of a trailer make them great trucks for congested project sites or sites in which the load and unload sites are close.',
  },
  {
    id: 5,
    name: "End Dumps",
    alias: "3-Axle Semi Dump",
    image: "/trucks/truck-5.png",
    description:
      "End Dumps are 3-axle trucks that pull a semi dump trailer that dumps from the rear and are primarily used to relocate materials on or off a project site. Dirt, aggregates, broken concrete & asphalt, construction debris and general refuse can all be hauled in an End Dump. CVC/CVT has access to various locations throughout the valley, including our own recycle sites, to help you dispose of many of these materials.",
  },
  {
    id: 6,
    name: "Side Dumps",
    alias: "Side Dump Trailer",
    image: "/trucks/truck-6.png",
    description:
      "Side Dumps can do everything an End Dump can do only the trailer dumps to either side of the truck. If you're infilling trench, dumping over K-Rail or other railing, or dumping down a slope, our Side Dumps are the way to go.",
  },
  {
    id: 7,
    name: "Low Beds",
    alias: "5-Axle & 7-Axle",
    image: "/trucks/truck-7.png",
    description:
      "Low Beds are used to haul equipment or freight from one place to another. We run a 5-Axle and 7-Axle Low Bed and maintain permits through the State of California and various counties to help keep your equipment moving.",
  },
  {
    id: 8,
    name: "Crane Truck",
    alias: "Precast Division",
    image: "/trucks/truck-8.png",
    description:
      "Our Crane Truck is used by our precast division for delivering septic tanks, blocks, irrigation boxes and other precast products. It's also available to rent when you have something that needs to be lifted and moved on your project site.",
  },
  {
    id: 9,
    name: "Pneumatics",
    alias: "Powder Trains",
    image: "/trucks/truck-9.png",
    description:
      'Also called "powder trains" are used to haul dry bulk materials, primarily cement, fly ash and lime. These trucks are equipped with a pneumatic blower that allows the driver to unload the product into silos via a hose that attaches to the trailer.',
  },
]

export default function TrucksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[60svh] items-center justify-center overflow-hidden sm:min-h-[70svh]">
        {/* Background - first truck image */}
        <div className="absolute inset-0">
          <Image
            src="/trucks/truck-1.png"
            alt="Central Valley Trucking Fleet"
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
              <Truck className="mr-1.5 size-3" />
              Central Valley Trucking
            </Badge>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Our Trucks
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
              It is our priority to make sure you have the right truck for the job.
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
                  Contact a Dispatcher
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            At Central Valley Trucking, communication is the key to success in reaching
            the needs of our customers. It is our priority to make sure that you have
            the right truck that fits your jobsite needs. Here is a list of the truck
            types that we have to offer and their unique applications. If you have any
            additional questions feel free to contact any of our helpful dispatchers.
          </p>
        </div>
      </section>

      {/* Trucks Grid */}
      <section className="relative pb-24 sm:pb-32">
        {/* Background accents */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {trucks.map((truck, index) => (
              <Card
                key={truck.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <CardContent className="p-0">
                  <div
                    className={`grid gap-0 md:grid-cols-2 ${
                      index % 2 === 1 ? "md:[direction:rtl]" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[320px]">
                      <Image
                        src={truck.image}
                        alt={truck.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        quality={85}
                      />
                      {/* Overlay with truck number */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                        <span className="font-heading text-5xl font-bold text-white/20 sm:text-6xl md:text-7xl">
                          {String(truck.id).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`flex flex-col justify-center p-6 sm:p-8 md:p-10 ${
                        index % 2 === 1 ? "md:[direction:ltr]" : ""
                      }`}
                    >
                      <Badge variant="outline" className="mb-3 w-fit text-xs">
                        {truck.alias}
                      </Badge>
                      <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                        {truck.name}
                      </h3>
                      <Separator className="my-4 max-w-16" />
                      <p className="leading-relaxed text-muted-foreground">
                        {truck.description}
                      </p>
                    </div>
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
            Need the Right Truck for Your Job?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contact any of our helpful dispatchers to discuss your project needs
            and find the perfect truck for the job.
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
