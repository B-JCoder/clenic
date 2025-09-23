"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Users, Target, Calendar, FileText } from "lucide-react"

export function AboutSection() {
  const approaches = [
    "Holistic & individualized care",
    "Collaborative treatment planning",
    "Supportive psychotherapy integrated with medication management",
    "Focused on empowerment, healing, and growth",
  ]

  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Warm, empathetic, and nonjudgmental environment for all patients",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Treatment plans tailored to your unique needs and circumstances",
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Proven therapeutic approaches backed by clinical research",
    },
  ]

  const handleBookAppointment = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleGetQuote = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            About <span className="text-primary">Serene Minds Wellness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We believe in compassionate, holistic, and patient-centered mental health care
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Who We Are */}
          <div className="space-y-8">
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Serene Minds Wellness LLC, we provide comprehensive psychiatric services tailored to your unique
                needs. Led by a Board-Certified Psychiatric Mental Health Nurse Practitioner (PMHNP), our practice
                combines clinical expertise with genuine compassion.
              </p>

              <h4 className="text-lg font-semibold mb-4">Our Approach</h4>
              <div className="space-y-3 mb-6">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{approach}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleBookAppointment} className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Online Appointment
                </Button>
                <Button onClick={handleGetQuote} variant="outline" className="flex-1 bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Get a Quote
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Features + Our Story */}
          <div className="flex flex-col gap-8">
            {/* Features grid */}
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mental health shaped our journey personally and professionally. Growing up where mental health was
                taboo, our founder recognized the urgent need to destigmatize conversations and create spaces for
                healing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleBookAppointment} className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Online Appointment
                </Button>
                <Button onClick={handleGetQuote} variant="outline" className="flex-1 bg-transparent">
                  <FileText className="h-4 w-4 mr-2" />
                  Get a Quote
                </Button>
              </div>
            
            </Card>
           

            {/* Our Story */}
            
          </div>
        </div>
      </div>
    </section>
  )
}
