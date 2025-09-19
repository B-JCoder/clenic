import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Heart, Shield, Moon, Focus, Repeat, Zap, Users } from "lucide-react"

export function SpecialtiesSection() {
  const conditions = [
    { name: "Depression", icon: Heart },
    { name: "Bipolar Disorder", icon: Zap },
    { name: "Generalized Anxiety", icon: Brain },
    { name: "Panic Disorder", icon: Shield },
    { name: "Social Anxiety", icon: Users },
    { name: "Trauma & PTSD", icon: Shield },
    { name: "Sleep & Insomnia", icon: Moon },
    { name: "ADHD & ODD", icon: Focus },
    { name: "OCD", icon: Repeat },
    { name: "Stress & Life Transitions", icon: Brain },
    { name: "Self-esteem Issues", icon: Heart },
    { name: "Coping Challenges", icon: Brain },
  ]

  const methods = [
    "Cognitive Behavioral Therapy (CBT)",
    "Motivational Interviewing",
    "Supportive Therapy integrated with medication",
  ]

  return (
    <section id="specialties" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Specialties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We serve patients ages 12–55 managing a wide range of mental health conditions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Conditions We Treat */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Conditions We Treat</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <condition.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{condition.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> We are not currently seeing patients for opioid/drug/substance use disorders.
                </p>
              </div>
            </Card>
          </div>

          {/* Treatment Methods */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Treatment Methods</h3>
              <div className="space-y-3">
                {methods.map((method, index) => (
                  <Badge key={index} variant="secondary" className="block text-center py-2 px-4">
                    {method}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <h3 className="text-xl font-semibold mb-4">Age Range</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">12 - 55</div>
                <p className="text-sm text-muted-foreground">Years of age</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
