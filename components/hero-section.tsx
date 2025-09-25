import Link from "next/link"
import { Heart, Shield, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      className="py-5 bg-gradient-to-r from-[#ffffeo]/20 via-[#68a0a3] to-[#74c477ab]/70 animate-fade-up"
      id="home"
    >
      {/* bg overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/10 via-white/10 to-white/10 backdrop-blur-sm" />
      

      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="mx-auto text-center max-w-xl mb-3">
          <h1
            className="relative font-semibold max-w-max mx-auto pb-2 font-display text-2xl sm:text-3xl md:text-4xl text-foreground
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-primary after:w-4"
          >
            Serene Minds Wellness
          </h1>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-10 md:items-end">
          {/* Left copy/CTA column */}
          <div className="space-y-5 md:col-span-2 lg:col-span-1 text-center lg:text-left">
            <h1 className="font-display font-semibold text-xl md:text-3xl text-foreground">
              Compassionate Psychiatric Care. Wherever You Are.
            </h1>
            <div className="text-foreground/80 space-y-3">
              <p>
                Holistic, patient-centered mental healthcare blending psychotherapy,
                medication management, and support.
              </p>
              <p>
                Evidence-based psychiatric care serving ages 12–55 through secure
                telehealth across Florida.
              </p>
            </div>
           <div className="flex justify-center lg:justify-start">
  <Link
    href="#contact"
    className="px-6 h-11 bg-gradient-to-r from-[#B6A7D6] via-[#68a0a3] to-[#74c477ab]/70 flex items-center rounded-lg bg-primary hover:bg-primary/90 text-black text-sm font-semibold transition ease-linear btn-shine shadow-md"
  >
    Book Appointment
  </Link>
</div>

            <div className="text-foreground/70 text-sm">
              First session 60 mins • Follow-up 30 mins
            </div>
            <div className="grid grid-cols-3 gap-6 mt-3">
              <div>
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                  6+ years
                </h2>
                <span className="text-foreground/70">Experience</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                  500+
                </h2>
                <span className="text-foreground/70">Patients Served</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                  95%
                </h2>
                <span className="text-foreground/70">Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Center video with controls */}
        <div className="flex justify-center mb-10">
  <div className="relative overflow-hidden rounded-2xl w-[min(900px,95vw)] h-[min(600px,60vh)] shadow-2xl shadow-blue-500/30 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-blue-500/20 before:to-purple-500/20 before:blur-2xl before:rounded-2xl before:z-[-1] transition-transform duration-500 hover:scale-[1.02]">
    <Image
      src="/jflogo.png"
      alt="Clinic room with chairs and plants"
      fill
      className="object-cover"
    />
  </div>
</div>


          {/* Right feature cards */}
          <div className="space-y-4 lg:space-y-6 mb-5">
            <div className="flex items-start gap-x-3 p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition">
              <span className="min-w-max text-primary p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Heart className="w-6 h-6" />
              </span>
              <div>
                <span className="font-semibold text-foreground text-lg">Evidence-Based Care</span>
                <p className="text-foreground/70">
                  Comprehensive psychiatric treatment using proven therapeutic approaches
                </p>
              </div>
            </div>

            <div className="flex items-start gap-x-3 p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition">
              <span className="min-w-max text-secondary p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                <Users className="w-6 h-6" />
              </span>
              <div>
                <span className="font-semibold text-foreground text-lg">Telehealth Access</span>
                <p className="text-foreground/70">
                  Convenient, secure online sessions from the comfort of your home
                </p>
              </div>
            </div>

            <div className="flex items-start gap-x-3 p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition">
              <span className="min-w-max text-accent p-3 rounded-lg bg-accent/10 border border-accent/20">
                <Shield className="w-6 h-6" />
              </span>
              <div>
                <span className="font-semibold text-foreground text-lg">Insurance Accepted</span>
                <p className="text-foreground/70">
                  Most major insurance plans accepted for accessible mental healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
