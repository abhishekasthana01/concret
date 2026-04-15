import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone } from "lucide-react"

const plants = [
  {
    name: "Merced North Plant",
    address: "3371 N. HWY 59",
    city: "Merced, CA 95348",
    phone: "(209) 383-7292",
    tag: "Central Valley Trucking",
  },
  {
    name: "Merced South",
    address: "1512 Brantley St.",
    city: "Merced, CA 95340",
    phone: "(209) 383-7292",
  },
  {
    name: "Chowchilla Plant",
    address: "745 S. 5th St.",
    city: "Chowchilla, CA 93610",
    phone: "(559) 665-1371",
  },
  {
    name: "Newman Plant",
    address: "3407 W. Stuhr Rd.",
    city: "Newman, CA 95360",
    phone: "(209) 863-2120",
  },
  {
    name: "Turlock Plant",
    address: "1800 Paulson Rd.",
    city: "Turlock, CA 95380",
    phone: "(209) 664-3600",
  },
  {
    name: "Tracy",
    address: "37400 South Bird Rd.",
    city: "Tracy, CA 95304",
    phone: "(209) 333-5218",
  },
  {
    name: "French Camp",
    address: "10500 South Harlan Rd.",
    city: "French Camp, CA 95230",
    phone: "(209) 333-5218",
  },
  {
    name: "Denair Plant",
    address: "4200 Lester Rd.",
    city: "Denair, CA 95316",
    phone: "(209) 667-0161",
  },
]

export function PlantLocations() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            8 Locations
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our <span className="gradient-text">Plant Locations</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            To order products, please contact your nearest local plant.
          </p>
        </div>

        <Separator className="mx-auto my-12 max-w-xs" />

        {/* Plants Grid */}
        <div className="animate-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plants.map((plant) => (
            <Card
              key={plant.name}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Hover gradient accent */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-amber-400 transition-transform duration-300 group-hover:scale-x-100" />

              <CardHeader className="pb-3">
                {plant.tag && (
                  <Badge variant="outline" className="mb-2 w-fit text-[0.65rem]">
                    {plant.tag}
                  </Badge>
                )}
                <CardTitle className="font-heading text-base font-semibold">
                  {plant.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary/60" />
                  <div>
                    <div>{plant.address}</div>
                    <div>{plant.city}</div>
                  </div>
                </div>
                <a
                  href={`tel:${plant.phone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-lg text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <Phone className="size-3.5" />
                  {plant.phone}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
