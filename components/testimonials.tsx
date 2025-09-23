"use client";

import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "I finally feel heard and understood. My provider helped me take small but powerful steps toward managing my anxiety, and for the first time in years, I feel hopeful about the future.",
    name: "Emily R.",
    title: "California",
  },
  {
    quote:
      "The safe space created here allowed me to open up about struggles I’ve never shared before. I left each session with clear next steps and a sense of empowerment.",
    name: "Michael S.",
    title: "Texas",
  },
  {
    quote:
      "Compassionate, professional, and truly caring. My depression feels manageable now, and I’ve gained tools to handle everyday challenges.",
    name: "Sarah K.",
    title: "New York",
  },
  {
    quote:
      "I appreciate how much time was spent explaining my treatment options. I feel informed, supported, and more in control of my own care.",
    name: "David L.",
    title: "Florida",
  },
  {
    quote:
      "Telehealth sessions have been convenient and effective. Even though we meet virtually, I feel fully supported and understood.",
    name: "Jessica M.",
    title: "Illinois",
  },
];


export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who found support, healing, and
            empowerment with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 shadow-sm border bg-background hover:shadow-md transition"
            >
              <blockquote>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  “{testimonial.quote}”
                </p>
                <footer>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </footer>
              </blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

