import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Users,
  Hammer,
  Calendar,
  Truck,
  Award,
  Heart,
  Building,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Central Valley Concrete & Trucking",
  description:
    "Family owned and operated since 1974. Learn about Central Valley Concrete & Trucking's history, mission, and commitment to quality service in the San Joaquin Valley.",
}

const milestones = [
  {
    year: "1974",
    title: "Founded",
    description:
      "Harold Neal started off supplying the local area with its ready-mix concrete needs.",
    icon: Building,
  },
  {
    year: "1995",
    title: "Trucking Expansion",
    description:
      "Expanded the fleet to include trucking options, growing the business further.",
    icon: Truck,
  },
  {
    year: "40+",
    title: "Years of Service",
    description:
      "Proudly serving the San Joaquin Valley for over four decades.",
    icon: Award,
  },
  {
    year: "Today",
    title: "Industry Leader",
    description:
      "A leader in an ever-growing industry, priding ourselves on quality and service.",
    icon: Heart,
  },
]

const values = [
  {
    icon: Award,
    title: "Highest Standards",
    description:
      "Our products and services are held to the highest standards, providing the unyielding commitment our customers know and deserve.",
  },
  {
    icon: Users,
    title: "Family Operated",
    description:
      "As a family owned and operated business, we bring a personal touch and genuine care to every project we take on.",
  },
  {
    icon: Hammer,
    title: "Strongest Foundation",
    description:
      "We strive to provide the strongest foundation for your project — whether it's a home, a business, or an opportunity.",
  },
  {
    icon: Calendar,
    title: "Consistent & Reliable",
    description:
      "From the homes you live in to the roads you drive on, we continue to provide consistent, reliable products.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Background accents */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>
        {/* Dot pattern */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">
              Est. 1974
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              How It <span className="text-foreground">Began</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Family owned and operated, we have been proudly serving the San
              Joaquin Valley for over 40 years. In 1974, our founder, Harold
              Neal started a journey that continues to this day.
            </p>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Our Story
              </Badge>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Our <span className="text-foreground">History</span>
              </h2>
              <Separator className="my-6 max-w-16" />
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                As a family owned and operated business, we have been proudly
                serving the San Joaquin Valley for over 40 years. In 1974, our
                founder, Harold Neal started off supplying the local area with
                its ready-mix needs. Shortly after, in 1995, he expanded his
                fleet to include trucking options.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                As a leader in an ever growing industry, we pride ourselves on
                quality customer service and top of the line products. We look
                forward to earning your business.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {milestones.map((milestone) => (
                <Card
                  key={milestone.year}
                  className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <milestone.icon className="size-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-lg font-bold text-primary">
                          {milestone.year}
                        </span>
                        <span className="text-sm font-semibold text-foreground">
                          — {milestone.title}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative bg-muted/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Our Mission
            </Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              What We <span className="text-foreground">Do</span>
            </h2>
            <Separator className="mx-auto my-6 max-w-xs" />
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              We strive to provide the strongest foundation for your project.
              That foundation can be the baseline of your business, house or
              opportunity that is everlasting. Our products and services are held
              to the highest standards which provide the unyielding commitment
              that our customers know and deserve.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              From the homes you live in, to the roads you drive on, Central
              Valley Concrete &amp; Trucking will continue to provide consistent,
              reliable products that our customers know to expect.
            </p>
          </div>

          {/* Values Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="group relative overflow-hidden text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <value.icon className="size-6" />
                  </div>
                  <h3 className="font-heading text-base font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-muted-foreground">
            We look forward to earning your business. Contact us today to
            discuss your project needs.
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
