import { Card } from "@/components/ui/card"
import { ClipboardList, Pill, MessageCircle, Lightbulb, ArrowRight } from "lucide-react"

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

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="p-8 bg-secondary/5 border-secondary/20">
          <div className="flex items-start gap-4">
            <ArrowRight className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Specialized Referrals</h3>
              <p className="text-muted-foreground leading-relaxed">
                When appropriate, we provide referrals for long-term or specialized therapy to ensure you receive the
                most comprehensive care for your specific needs.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
