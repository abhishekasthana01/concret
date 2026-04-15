import type { Metadata } from "next"
import { Geist_Mono, Montserrat } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const geistMonoHeading = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Central Valley Concrete & Trucking | Ready-Mix Concrete, Sand & Gravel",
  description:
    "Independently owned and family operated, Central Valley Concrete & Trucking supplies the Central Valley with ready-mix concrete, sand & gravel, trucking services and more. 8 plant locations serving Merced, Turlock, Tracy, and beyond.",
  keywords: [
    "concrete",
    "ready-mix concrete",
    "sand",
    "gravel",
    "trucking",
    "Central Valley",
    "Merced",
    "California",
    "aggregates",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        montserrat.variable,
        geistMonoHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
