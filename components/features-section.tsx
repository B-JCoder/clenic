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
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why Choose <span className="text-primary">Serene Minds Wellness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the values that make our care unique, compassionate, and impactful.
          </p>
        </div>

        {/* Custom Layout for 5 features */}
        <div className="grid gap-8">
          {/* Top Row - 2 features */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.slice(0, 2).map((feature, index) => (
              <Card key={index} className="p-8 text-center glass-card card-hover flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${accentClasses[index % 3]}`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Middle Highlighted Feature */}
          <div>
            <Card className="p-10 text-center glass-card card-hover border-primary shadow-lg max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-primary/10 text-primary shadow-primary-glow mx-auto">
                {(() => {
                  const Icon = features[2].icon
                  return <Icon className="h-10 w-10" />
                })()}
              </div>
              <h3 className="text-xl font-bold mb-4">{features[2].title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{features[2].description}</p>
            </Card>
          </div>

          {/* Bottom Row - 2 features */}
          <div className="grid md:grid-cols-2 gap-8 ">
            {features.slice(3).map((feature, index) => (
              <Card key={index} className="p-8 text-center  glass-card card-hover flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${accentClasses[(index + 1) % 3]}`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <Button onClick={handleBookAppointment} size="lg" className="px-8 font-bold btn-shine shadow-primary-glow">
            <Calendar className="h-5 w-5 mr-2" />
            Book Online Appointment
          </Button>
          <Button
            onClick={handleGetQuote}
            variant="outline"
            size="lg"
            className="px-8 font-bold bg-transparent btn-shine"
          >
            <FileText className="h-5 w-5 mr-2" />
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
