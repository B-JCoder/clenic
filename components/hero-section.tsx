import Link from "next/link"
import { Heart, Shield, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
<section
  className="relative py-16 bg-gradient-to-r from-[#ffffeo]/20 via-[#68a0a3] to-[#74c477ab]/70 animate-fade-up"
  id="home"
>
  {/* background image with low opacity */}
  <div
    className="absolute inset-0 bg-cover bg-center -z-20 opacity-20"
    style={{
      backgroundImage:
        "url('https://i.pinimg.com/1200x/10/fa/a9/10faa9c5fbfc47729f475019e3b6fb7e.jpg')",
    }}
  />
  
  {/* bg overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-white/10 to-white/10 backdrop-blur-sm" />

  <div className="mx-auto lg:max-w-5xl w-full px-5 sm:px-10 md:px-12 text-center">
    {/* Main Heading */}
    <h1
      className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-foreground
        after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:rounded-lg after:bg-primary after:w-12"
    >
      Serene Minds Wellness
    </h1>

    {/* Sub Heading */}
    <h2 className="mt-6 font-display font-semibold text-xl sm:text-2xl md:text-3xl text-foreground">
      Compassionate Psychiatric Care. Wherever You Are.
    </h2>

    {/* Paragraph */}
    <div className="mt-6 max-w-2xl mx-auto text-foreground/80 space-y-4">
      <p>
        Holistic, patient-centered mental healthcare blending psychotherapy,
        medication management, and support.
      </p>
      <p>
        Evidence-based psychiatric care serving ages 12–55 through secure
        telehealth across Florida.
      </p>
    </div>

    {/* CTA Button */}
    <div className="mt-8 flex justify-center">
      <Link
        href="#contact"
        className="px-8 h-12 bg-gradient-to-r from-[#B6A7D6] via-[#68a0a3] to-[#74c477ab]/70 flex items-center rounded-lg hover:opacity-90 text-black text-base font-semibold transition ease-linear btn-shine shadow-md"
      >
        Book Appointment
      </Link>
    </div>

    {/* Small Info */}
    <div className="mt-3 text-foreground/70 text-sm">
      First session 60 mins • Follow-up 30 mins
    </div>

    {/* Stats */}
    <div className="grid grid-cols-3 gap-6 mt-8 max-w-xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
          6+ years
        </h2>
        <span className="text-foreground/70">Experience</span>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
          500+
        </h2>
        <span className="text-foreground/70">Patients Served</span>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
          95%
        </h2>
        <span className="text-foreground/70">Satisfaction</span>
      </div>
    </div>

    {/* Feature Cards */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      <div className="flex items-start gap-x-3 p-5 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition">
        <span className="min-w-max text-primary p-3 rounded-lg bg-primary/10 border border-primary/20">
          <Heart className="w-6 h-6" />
        </span>
        <div className="text-left">
          <span className="font-semibold text-foreground text-lg">Evidence-Based Care</span>
          <p className="text-foreground/70 text-sm">
            Comprehensive psychiatric treatment using proven therapeutic approaches
          </p>
        </div>
      </div>

      <div className="flex items-start gap-x-3 p-5 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition">
        <span className="min-w-max text-secondary p-3 rounded-lg bg-secondary/10 border border-secondary/20">
          <Users className="w-6 h-6" />
        </span>
        <div className="text-left">
          <span className="font-semibold text-foreground text-lg">Telehealth Access</span>
          <p className="text-foreground/70 text-sm">
            Convenient, secure online sessions from the comfort of your home
          </p>
        </div>
      </div>

      <div className="flex items-start gap-x-3 p-5 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition">
        <span className="min-w-max text-accent p-3 rounded-lg bg-accent/10 border border-accent/20">
          <Shield className="w-6 h-6" />
        </span>
        <div className="text-left">
          <span className="font-semibold text-foreground text-lg">Insurance Accepted</span>
          <p className="text-foreground/70 text-sm">
            Most major insurance plans accepted for accessible mental healthcare
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
