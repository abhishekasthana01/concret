import { HeroSection } from "@/components/hero-section"
import { AboutConcrete } from "@/components/about-concrete"
import { ConcreteCalculator } from "@/components/concrete-calculator"
import { PlantLocations } from "@/components/plant-locations"

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutConcrete />
      <ConcreteCalculator />
      <PlantLocations />
    </>
  )
}
