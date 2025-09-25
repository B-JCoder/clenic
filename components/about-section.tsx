"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Heart,
  Users,
  Target,
  Calendar,
  FileText,
} from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const approaches = [
    "Holistic & individualized care",
    "Collaborative treatment planning",
    "Supportive psychotherapy integrated with medication management",
    "Focused on empowerment, healing, and growth",
  ];

  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Warm, empathetic, and nonjudgmental environment for all patients",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description:
        "Treatment plans tailored to your unique needs and circumstances",
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Proven therapeutic approaches backed by clinical research",
    },
  ];

  const handleBookAppointment = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetQuote = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  <section
  id="about"
  className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
>
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/1200x/10/fa/a9/10faa9c5fbfc47729f475019e3b6fb7e.jpg')",
    }}
  />
  <div className="absolute inset-0 bg-black/70" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto">
    {/* Section heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
        About <span className="text-primary">Serene Minds Wellness</span>
      </h2>
      <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
        We believe in compassionate, holistic, and patient-centered mental health care
      </p>
    </div>

    {/* Two column layout */}
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Left Column */}
      <div className="flex flex-col gap-8">
        {/* Who We Are */}
        <Card className="p-8 bg-white/90 backdrop-blur-md h-full">
          <h3 className="text-2xl font-semibold mb-6">Who We Are</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At Serene Minds Wellness LLC, we provide comprehensive psychiatric services tailored
            to your unique needs. Led by a Board-Certified Psychiatric Mental Health Nurse
            Practitioner (PMHNP), our practice combines clinical expertise with genuine compassion.
          </p>

          <h4 className="text-lg font-semibold mb-4">Our Approach</h4>
          <div className="space-y-3 mb-6">
            {approaches.map((approach, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">{approach}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Our Mission */}
        <Card className="p-8 bg-white/90 backdrop-blur-md border-primary/20 h-full">
          <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At Serene Minds Wellness, we honor every story and nurture every mind,
            blending compassion, empathy, and holistic care to guide each individual
            toward clarity, balance, and lasting wellness.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleBookAppointment}
              className="px-6 h-11 bg-gradient-to-r from-[#B6A7D6] via-[#68a0a3] to-[#74c477ab]/70 flex items-center rounded-lg text-black font-semibold shadow-md"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
            <Button
              onClick={handleGetQuote}
              variant="outline"
              className="px-2 h-11 flex items-center rounded-lg hover:bg-gradient-to-r from-[#B6A7D6] via-[#68a0a3] to-[#74c477ab]/70 text-black font-semibold shadow-md"
            >
              <FileText className="h-4 w-4 mr-2" />
              Get a Quote
            </Button>
          </div>
        </Card>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-8">
        {/* Responsive Image */}
        <div className="relative overflow-hidden rounded-2xl w-full max-w-[500px] mx-auto h-[400px] sm:h-[500px] lg:h-[600px] shadow-xl shadow-blue-500/30">
          <Image
            src="/herimage.jpg"
            alt="Clinic room with chairs and plants"
            fill
            className="object-cover"
          />
        </div>

        {/* Our Story */}
        <Card className="p-6 bg-white/90 backdrop-blur-md border-primary/20 h-full">
          <h3 className="text-2xl font-semibold">Our Story</h3>
          <p className="text-muted-foreground leading-relaxed">
            Mental health shaped our journey personally and professionally. Growing up where
            mental health was taboo, our founder recognized the urgent need to destigmatize
            conversations and create spaces for healing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleBookAppointment}
              className="px-6 h-11 bg-gradient-to-r from-[#B6A7D6] via-[#68a0a3] to-[#74c477ab]/70 flex items-center rounded-lg text-black font-semibold shadow-md"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
            <Button
              onClick={handleGetQuote}
              variant="outline"
              className="px-2 h-11 flex items-center rounded-lg hover:bg-gradient-to-r from-[#B6A7D6] via-[#68a0a3] to-[#74c477ab]/70 text-black font-semibold shadow-md"
            >
              <FileText className="h-4 w-4 mr-2" />
              Get a Quote
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </div>
</section>


  );
}
