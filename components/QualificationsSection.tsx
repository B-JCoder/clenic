"use client";

import { Card } from "@/components/ui/card";
import { GraduationCap, FileBadge, CheckCircle2, Mail, Phone } from "lucide-react";

export default function QualificationsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-primary">Qualifications</span> & Credentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Backed by accredited education, professional memberships, and verified licensing,  
            I provide safe, compassionate, and effective care tailored to your needs.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Verified Card */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Verified License</h3>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-medium">Verified by Psychology Today</p>
                  <p className="text-muted-foreground text-sm">
                    License: Florida / APRN11032841
                  </p>
                  <p className="text-muted-foreground">Patience Amune</p>
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education & Years in Practice
              </h3>
              <p className="text-muted-foreground">Walden University</p>
            </Card>

            {/* Additional Credentials */}
            <Card className="p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                <FileBadge className="h-5 w-5 text-primary" />
                Additional Credentials
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Membership with American Psychiatric Nurses Association  
                  <span className="block text-xs">#390354</span>
                </li>
                <li>
                  Membership with Central Florida Advanced Nursing Practice Council  
                  <span className="block text-xs">#2674992</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Right Side */}
          <Card className="p-8 flex flex-col justify-between bg-primary/5 border-primary/20">
            <h3 className="text-2xl font-semibold mb-6">About Me</h3>
            <blockquote className="text-lg italic text-muted-foreground leading-relaxed mb-6">
              “I am committed to providing compassionate and effective support. My training
              and certifications allow me to offer personalized and individualized care tailored
              to your unique needs. I create a safe and supportive environment and I'm here
              to support you on your journey to mental wellness.”
            </blockquote>

            <div className="flex items-center gap-4 mb-6">
              <img
                src="/herimage.jpg"
                alt="Patience Amune"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Patience Amune</p>
                <p className="text-sm text-muted-foreground">
                  Psychiatric Nurse Practitioner, APRN, PMHNP, BC
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@example.com" className="underline">
                  Email me
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                Call with questions: <span className="font-semibold">(386) 260-0689</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
