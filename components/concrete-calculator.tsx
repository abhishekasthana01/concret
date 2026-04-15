"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Calculator, RotateCcw, Truck } from "lucide-react"

export function ConcreteCalculator() {
  const [length, setLength] = React.useState("")
  const [width, setWidth] = React.useState("")
  const [depth, setDepth] = React.useState("")
  const [result, setResult] = React.useState<number | null>(null)

  const calculate = () => {
    const l = parseFloat(length)
    const w = parseFloat(width)
    const d = parseFloat(depth)

    if (isNaN(l) || isNaN(w) || isNaN(d) || l <= 0 || w <= 0 || d <= 0) {
      return
    }

    // Convert depth from inches to feet, then calculate cubic yards
    const cubicFeet = l * w * (d / 12)
    const cubicYards = cubicFeet / 27
    // Add 10% for waste
    const withWaste = cubicYards * 1.1
    setResult(Math.ceil(withWaste * 100) / 100)
  }

  const reset = () => {
    setLength("")
    setWidth("")
    setDepth("")
    setResult(null)
  }

  return (
    <section id="calculator" className="relative py-24 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Free Tool
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Concrete <span className="gradient-text">Calculator</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Estimate how much concrete you need for your project.
          </p>
        </div>

        <Separator className="mx-auto my-12 max-w-xs" />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* Calculator Form */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-amber-400 to-primary" />
            <CardHeader>
              <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calculator className="size-6" />
              </div>
              <CardTitle className="font-heading text-xl">
                Enter Dimensions
              </CardTitle>
              <CardDescription>
                Input your project dimensions in feet &amp; inches
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="calc-length" className="text-sm font-medium">
                  Length (feet)
                </Label>
                <Input
                  id="calc-length"
                  type="number"
                  placeholder="e.g., 20"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  min="0"
                  step="0.5"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="calc-width" className="text-sm font-medium">
                  Width (feet)
                </Label>
                <Input
                  id="calc-width"
                  type="number"
                  placeholder="e.g., 10"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  min="0"
                  step="0.5"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="calc-depth" className="text-sm font-medium">
                  Depth (inches)
                </Label>
                <Input
                  id="calc-depth"
                  type="number"
                  placeholder="e.g., 4"
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  min="0"
                  step="0.5"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button onClick={calculate} className="flex-1 gap-2">
                  <Calculator className="size-4" />
                  Calculate
                </Button>
                <Button variant="outline" onClick={reset} className="gap-2">
                  <RotateCcw className="size-4" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="group relative flex flex-col overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-amber-400 via-primary to-amber-400" />
            <CardHeader>
              <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Truck className="size-6" />
              </div>
              <CardTitle className="font-heading text-xl">
                Your Estimate
              </CardTitle>
              <CardDescription>
                Includes 10% extra for waste
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-center">
              {result !== null ? (
                <div className="animate-scale-in space-y-6 text-center">
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                    <div className="font-heading text-5xl font-bold text-primary sm:text-6xl">
                      {result}
                    </div>
                    <div className="mt-2 text-sm font-medium tracking-wider text-muted-foreground uppercase">
                      Cubic Yards
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Area</span>
                      <span className="font-medium">
                        {(parseFloat(length) * parseFloat(width)).toFixed(1)} sq ft
                      </span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Volume</span>
                      <span className="font-medium">
                        {(
                          (parseFloat(length) *
                            parseFloat(width) *
                            parseFloat(depth)) /
                          12
                        ).toFixed(1)}{" "}
                        cu ft
                      </span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Estimated trucks
                      </span>
                      <span className="font-medium">
                        {Math.ceil(result / 10)} truck
                        {Math.ceil(result / 10) > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-muted">
                    <Calculator className="size-7 text-muted-foreground/50" />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Enter your project dimensions and click calculate to see the
                    estimate.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
