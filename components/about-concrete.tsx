"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Beaker, Droplets, ChevronDown, ChevronUp } from "lucide-react"

export function AboutConcrete() {
  const [showTechnical, setShowTechnical] = React.useState(false)

  return (
    <section id="concrete" className="relative py-24 sm:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Our Core Product
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Understanding{" "}
            <span className="gradient-text">Concrete</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Learn about our flagship product and what makes quality concrete.
          </p>
        </div>

        <Separator className="mx-auto my-12 max-w-xs" />

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* What is Concrete Card */}
          <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-primary/5 transition-all duration-500 group-hover:bg-primary/10" />
            <CardHeader>
              <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Beaker className="size-6" />
              </div>
              <CardTitle className="font-heading text-xl sm:text-2xl">
                What is Concrete?
              </CardTitle>
              <CardDescription className="text-sm">
                Understanding the difference between cement and concrete
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                Although the terms cement and concrete often are used
                interchangeably, cement is actually an ingredient of concrete.
                Concrete is a mixture of aggregates and paste. The aggregates are
                sand and gravel or crushed stone; the paste is water and Portland
                cement.
              </p>

              {/* Technical description toggle */}
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTechnical(!showTechnical)}
                  className="text-primary gap-1.5"
                >
                  {showTechnical ? "Hide" : "Show"} Technical Definition
                  {showTechnical ? (
                    <ChevronUp className="size-3.5" />
                  ) : (
                    <ChevronDown className="size-3.5" />
                  )}
                </Button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    showTechnical ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="rounded-lg border border-border bg-muted/50 p-4">
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Concrete is a heterogeneous system of solid, discrete,
                      gradient sized, inorganic mineral aggregates, usually
                      plutonic or sedimentary-calcareous in origin, embedded in a
                      matrix compounded of synthesized polybasic alkaline and
                      alkaloidal silicates held in aqueous solution — ultimately
                      providing a structure relatively impermeable and with
                      useful capacity to transmit tensile, compressive, and shear
                      stress.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Concrete Slump Card */}
          <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-primary/5 transition-all duration-500 group-hover:bg-primary/10" />
            <CardHeader>
              <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Droplets className="size-6" />
              </div>
              <CardTitle className="font-heading text-xl sm:text-2xl">
                Concrete Slump
              </CardTitle>
              <CardDescription className="text-sm">
                Measuring consistency and workability
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed text-muted-foreground">
                Slump is the measure of concrete consistency and fluidity. It
                shows the flow and overall workability of freshly mixed concrete.
                Simply put, the higher the slump, the wetter the mix.
              </p>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    4&quot;
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Standard slump</span>{" "}
                    — Very common with normal weight concrete and good for pumping.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-bold text-destructive">
                    !
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Above average slumps</span>{" "}
                    — Will cause reduced strength, durability, and permeability.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-xs font-bold text-green-600 dark:text-green-400">
                    ✓
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Use admixtures</span>{" "}
                    — Instead of water to achieve higher slumps while maintaining quality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
