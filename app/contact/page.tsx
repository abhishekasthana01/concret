import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CreditCard,
  MessageCircle,
  Users,
  Shield,
  HelpCircle,
  Printer,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Central Valley Concrete & Trucking",
  description:
    "Contact Central Valley Concrete & Trucking. Main office in Merced, CA. Sales, HR, Quality Control inquiries. FAQ for first-time customers. Credit applications available.",
}

const departments = [
  {
    name: "Sales",
    icon: MessageCircle,
    description: "Product inquiries & orders",
    phone: "209-723-8846",
  },
  {
    name: "HR",
    icon: Users,
    description: "Careers & employment",
    phone: "209-723-8846",
  },
  {
    name: "Quality Control",
    icon: Shield,
    description: "Product quality & testing",
    phone: "209-723-8846",
  },
  {
    name: "General Question",
    icon: HelpCircle,
    description: "How can we help you?",
    phone: "209-723-8846",
  },
]

const faqs = [
  {
    question: "How much concrete should I order?",
    answer:
      "If you need support, please contact concrete dispatch at 209-723-8846 and they can provide an exact measurement as well.",
  },
  {
    question: "What is Ready Mix concrete?",
    answer:
      "Ready-Mix concrete is concrete that is manufactured in a batching plant according to a set recipe, and then delivered to a worksite by mixing truck.",
  },
  {
    question: "What makes good quality concrete?",
    answer:
      "There are several basic requirements for good quality concrete: quality aggregates and cementitious materials, proper material proportioning, thorough mixing, skillful placing and finishing and proper curing. All of these requirements are important, and failure to satisfy any one of them will often result in a reduction in quality. Continuous testing ensures the materials we use meet and exceed project specifications. How concrete is proportioned helps determine its workability.",
  },
  {
    question: "Why is too much water harmful for concrete life?",
    answer:
      "Water is a key ingredient in concrete, however too much water will lower the strength of a concrete mixture. Excess water in concrete causes the bonds that hold the materials together to weaken.",
  },
  {
    question:
      "What are concrete requirements for house flat work, patio, walkway and driveways?",
    answer:
      "Different cities have different concrete requirements. We have knowledgeable representatives so, give us a call for help determining what specific needs your project has. We are happy to assist you!",
  },
  {
    question: "What is curing and how is it accomplished?",
    answer:
      "Curing is a chemical reaction between cement and water that makes concrete strong and durable. The purpose of curing is to make sure that little or no water is lost from the concrete during the early stages of this chemical reaction. CVC can provide products to help you tackle this important step.",
  },
  {
    question: "How do you find a good contractor?",
    answer:
      "Call CVC at 209-723-8846 for recommendations of qualified contractors.",
  },
  {
    question:
      "What performance should you expect from concrete placed around your home?",
    answer:
      "Good quality concrete — properly proportioned, mixed, placed, finished and cured — will give maintenance-free service for many years. Concrete work, properly done, will usually last much longer than the need for which it was originally installed.",
  },
  {
    question: "What kind of reinforcement should I use in my concrete?",
    answer:
      "Much of that depends on what the concrete is being used for. In most cases, concrete fiber mesh is an excellent no-hassle solution to providing additional strength. Call CVC for analysis of if fiber is a good fit for your project.",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 pt-28 pb-16 sm:pt-36 sm:pb-20">
        {/* Background accents */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Below are some frequently asked questions that many of our first
              time customers ask. If you have any troubles or find an issue that
              is not listed in this section, feel free to give us a call so that
              we can better serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept) => (
              <Card
                key={dept.name}
                className="group relative overflow-hidden text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <dept.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold">
                      {dept.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {dept.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`tel:${dept.phone}`} className="gap-1.5">
                      <Phone className="size-3" />
                      {dept.phone}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form - takes 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Side info - takes 2 columns */}
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-base font-semibold">
                  Prefer to talk?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our team of knowledgeable representatives is ready to assist
                  you with any questions about our products and services.
                </p>
                <div className="mt-4 space-y-3">
                  <a
                    href="tel:209-723-8846"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    📞 (209) 723-8846
                  </a>
                  <a
                    href="mailto:darla@centralvalleyconcrete.com"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    ✉️ darla@centralvalleyconcrete.com
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-base font-semibold">
                  Response Time
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We typically respond within 1 business day. For urgent
                  inquiries, please call us directly.
                </p>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="font-heading text-base font-semibold">
                  Office Hours
                </h3>
                <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Mon – Fri</span>
                    <span className="font-medium text-foreground">7AM – 5PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">7AM – 12PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info + Hours + Credit */}
      <section className="relative bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-6 lg:grid-cols-3">
            {/* Central Valley Concrete Office */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-amber-400" />
              <CardHeader>
                <CardTitle className="font-heading text-lg">
                  Central Valley Concrete
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary/60" />
                  <div className="text-muted-foreground">
                    <div>3823 N Hwy 59</div>
                    <div>Merced, CA 95348</div>
                  </div>
                </div>
                <a
                  href="tel:209-723-8846"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0 text-primary/60" />
                  (209) 723-8846
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Printer className="size-4 shrink-0 text-primary/60" />
                  Fax: (209) 384-2395
                </div>
              </CardContent>
            </Card>

            {/* Central Valley Trucking Office */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-amber-400 to-primary" />
              <CardHeader>
                <CardTitle className="font-heading text-lg">
                  Central Valley Trucking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary/60" />
                  <div className="text-muted-foreground">
                    <div>3371 N Hwy 59</div>
                    <div>Merced, CA 95348</div>
                  </div>
                </div>
                <a
                  href="tel:209-383-7292"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0 text-primary/60" />
                  (209) 383-7292
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Printer className="size-4 shrink-0 text-primary/60" />
                  Fax: (209) 725-8895
                </div>
              </CardContent>
            </Card>

            {/* Hours + Credit */}
            <div className="space-y-6">
              {/* Operation Hours */}
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-amber-400 to-primary" />
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 font-heading text-lg">
                    <Clock className="size-4 text-primary" />
                    Operation Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Monday – Friday
                    </span>
                    <span className="font-medium">7:00 AM – 5:00 PM</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">7:00 AM – 12:00 PM</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-muted-foreground">
                      Closed
                    </span>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Credit Application - centered below cards */}
          <div className="mx-auto mt-8 max-w-lg">
            <Card className="relative overflow-hidden border-primary/20 bg-primary/5">
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CreditCard className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold">
                    Credit Application
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Open an account with CVC or CVT. Call{" "}
                    <a
                      href="tel:209-723-8846"
                      className="font-medium text-primary hover:underline"
                    >
                      209-723-8846
                    </a>{" "}
                    or email our Credit Manager.
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="mailto:darla@centralvalleyconcrete.com"
                    className="gap-1.5"
                  >
                    <Mail className="size-3" />
                    Email Credit Manager
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <Separator className="mx-auto mt-8 max-w-xs" />
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-sm font-medium sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative border-t border-border bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our team is ready to help. Give us a call or visit our main office in
            Merced.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="h-12 px-8 text-base">
              <a href="tel:209-723-8846" className="gap-2">
                <Phone className="size-4" />
                Call Us: 209-723-8846
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-12 px-8 text-base">
              <a
                href="mailto:darla@centralvalleyconcrete.com"
                className="gap-2"
              >
                <Mail className="size-4" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
