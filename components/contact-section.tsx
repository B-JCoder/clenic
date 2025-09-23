"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, Calendar } from "lucide-react"
import BookingForm from "./booking-form"

export function ContactSection() {
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ fullName: "", email: "", phone: "", message: "" })
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (407) 693-7055",
      href: "tel:+14076937055",
    },
    {
      icon: Mail,
      label: "Email",
      value: "patience@serenemindswellness.us",
      href: "mailto:patience@serenemindswellness.us",
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "Telehealth (serving Florida)",
      href: null,
    },
    {
      icon: Clock,
      label: "Session Length",
      value: "Usually 60 minutes",
      href: null,
    },
  ]

  if (showBookingForm) {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Button variant="outline" onClick={() => setShowBookingForm(false)} className="mb-4">
              ← Back to Contact
            </Button>
          </div>
          <BookingForm />
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Schedule your appointment today and take the first step toward a calmer, healthier you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
           <BookingForm />
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Business Information</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Business Name:</strong> Serene Minds Wellness LLC
                </p>
                <p>
                  <strong>Service Area:</strong> Florida (Telehealth)
                </p>
                <p>
                  <strong>Age Range:</strong> 12-55 years
                </p>
                <p>
                  <strong>Session Type:</strong> Secure video sessions
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Ready to Start?</h4>
                <p className="text-sm text-muted-foreground mb-4">Call us directly or book online</p>
                <div className="space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <a href="tel:+14076937055">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (407) 693-7055
                    </a>
                  </Button>
                  <Button onClick={() => setShowBookingForm(true)} variant="outline" size="lg" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Online
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
