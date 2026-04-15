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
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false)
  const [sending, setSending] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    // Simulate form submission (frontend only)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-400 to-emerald-500" />
        <CardContent className="flex flex-col items-center gap-4 py-16 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10 text-green-600 animate-scale-in dark:text-green-400">
            <CheckCircle className="size-8" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold">
              Message Sent!
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Thank you for reaching out. Our team will get back to you as soon
              as possible.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="mt-2"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-amber-400 to-primary" />
      <CardHeader>
        <CardTitle className="font-heading text-xl">
          Send Us a Message
        </CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you shortly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Row */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                id="first-name"
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input
                id="last-name"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(209) 555-0123"
              />
            </div>
          </div>

          {/* Department */}
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select>
              <SelectTrigger id="department">
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="quality">Quality Control</SelectItem>
                <SelectItem value="general">General Question</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="How can we help you?"
              required
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project or question..."
              rows={5}
              required
              className="resize-none"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full gap-2 sm:w-auto"
            disabled={sending}
          >
            {sending ? (
              <>
                <span className="size-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                Sending...
              </>
            ) : (
              <>
                <Send className="size-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
