import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Do you provide therapy only?",
      answer:
        "Therapy is often integrated into treatment but not offered as a standalone service at this time. Our approach combines brief supportive psychotherapy with medication management for comprehensive care.",
    },
    {
      question: "What age groups do you serve?",
      answer:
        "We serve patients ages 12–55. Our practice is designed to address the unique mental health needs across adolescence, young adulthood, and middle age.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes — most major insurance providers are accepted, including Aetna, BCBS, Cigna, UnitedHealthcare, and many more. We also accept self-pay options.",
    },
    {
      question: "How are sessions conducted?",
      answer:
        "We offer convenient, secure telehealth video sessions that typically last 60 minutes. This allows you to receive quality care from the comfort of your own home.",
    },
    {
      question: "Do you accept self-pay?",
      answer:
        "Yes, we accept major credit cards, HSA/FSA, and cash payments for those who prefer to pay out-of-pocket or whose insurance is not accepted.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling us at (407) 693-7055 or using our contact form below. We will get back to you promptly to discuss your needs and schedule your first session.",
    },
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first visit will be a comprehensive psychiatric evaluation where we discuss your mental health history, current concerns, and treatment goals. This helps us develop a personalized treatment plan tailored to your needs.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Find answers to common questions about our services and approach
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
