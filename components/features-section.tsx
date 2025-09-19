import { Card } from "@/components/ui/card"
import { Heart, Monitor, Award, Globe, CreditCard } from "lucide-react"

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
