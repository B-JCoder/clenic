"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardList, Pill, MessageCircle, Lightbulb, ArrowRight, Calendar, FileText } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: ClipboardList,
      title: "Comprehensive Psychiatric Evaluation",
      description:
        "Thorough assessment to understand your mental health needs and develop personalized treatment plans.",
    },
    {
      icon: Pill,
      title: "Medication Management",
      description:
        "Expert guidance on psychiatric medications, monitoring effectiveness, and adjusting treatments as needed.",
    },
    {
      icon: MessageCircle,
      title: "Brief Supportive Psychotherapy",
      description:
        "Therapeutic support integrated with medication management to address your emotional and psychological needs.",
    },
    {
      icon: Lightbulb,
      title: "Lifestyle & Coping Strategies",
      description:
        "Practical tools and techniques to help you manage stress, improve daily functioning, and build resilience.",
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We provide psychiatric care that blends therapy, diagnosis, treatment, and management of mental health
            conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 glass-card card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${accentClasses[index % 3]}`}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  
                    <Button onClick={handleBookAppointment} size="sm" className="px-6 h-11 bg-gradient-to-r from-[#B6A7D6] via-[#68a0a3] to-[#74c477ab]/70 flex items-center rounded-lg bg-primary hover:bg-primary/90 text-black text-sm font-semibold transition ease-linear btn-shine shadow-md">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                    <Button
                      onClick={handleGetQuote}
                      variant="outline"
                      size="sm"
                      className="px-2 h-11  flex items-center rounded-lg bg-transparent hover:bg-gradient-to-r from-[#B6A7D6] via-[#68a0a3] to-[#74c477ab]/70 text-black text-sm font-semibold transition ease-linear btn-shine shadow-md"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Get a Quote
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="p-8 bg-secondary/5 border-secondary/20 glass-card animate-fade-up">
          <div className="flex items-start gap-4">
            <ArrowRight className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Specialized Referrals</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When appropriate, we provide referrals for long-term or specialized therapy to ensure you receive the
                most comprehensive care for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleBookAppointment} size="sm" className="px-6 h-11 bg-gradient-to-r from-[#B6A7D6] via-[#68a0a3] to-[#74c477ab]/70 flex items-center rounded-lg bg-primary hover:bg-primary/90 text-black text-sm font-semibold transition ease-linear btn-shine shadow-md">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
                <Button onClick={handleGetQuote} variant="outline" size="sm" className="px-2 h-11  flex items-center rounded-lg bg-transparent hover:bg-gradient-to-r from-[#B6A7D6] via-[#68a0a3] to-[#74c477ab]/70 text-black text-sm font-semibold transition ease-linear btn-shine shadow-md">
                  <FileText className="h-4 w-4 mr-2" />
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
