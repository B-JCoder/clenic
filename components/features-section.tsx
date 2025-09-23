"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Monitor, Award, Globe, CreditCard, Calendar, FileText } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Heart,
      title: "Warm & Empathetic Environment",
      description: "Nonjudgmental space where you can feel safe to share and heal",
    },
    {
      icon: Monitor,
      title: "Telehealth Convenience",
      description: "Receive quality care from the comfort of your own home",
    },
    {
      icon: Award,
      title: "Evidence-Based Treatment",
      description: "Proven therapeutic approaches backed by clinical research",
    },
    {
      icon: Globe,
      title: "Culturally Sensitive Care",
      description: "Stigma-free treatment that respects your background and values",
    },
    {
      icon: CreditCard,
      title: "Insurance-Friendly Billing",
      description: "Transparent billing with most major insurance providers accepted",
    },
  ]

  const handleBookAppointment = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleGetQuote = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const accentClasses = [
    "text-primary bg-primary/10 border border-primary/20 shadow-primary-glow",
    "text-secondary bg-secondary/10 border border-secondary/20 shadow-secondary-glow",
    "text-accent bg-accent/10 border border-accent/20 shadow-accent-glow",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            What Makes Us <span className="text-primary">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Experience the Serene Minds Wellness difference through our commitment to compassionate, accessible, and
            effective mental healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center glass-card card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${accentClasses[index % 3]}`}
              >
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{feature.description}</p>
              <div className="space-y-3">
                <Button onClick={handleBookAppointment} size="sm" className="w-full btn-shine shadow-primary-glow">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Online Appointment
                </Button>
                <Button
                  onClick={handleGetQuote}
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent btn-shine"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Get a Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
