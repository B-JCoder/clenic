import Link from "next/link"
import { Heart, Shield, Users } from "lucide-react"

export function HeroSection() {
  return (
    <>
      <section className="py-8 bg-secondary/5 animate-fade-up" id="home">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="mx-auto text-center max-w-xl">
            <h1
              className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-foreground
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-primary after:w-4"
            >
              Serene Minds Wellness
            </h1>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-8 md:items-end">
            {/* Left copy/CTA column */}
            <div className="space-y-4 md:space-y-6 md:col-span-2 lg:col-span-1 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="font-display font-semibold text-2xl md:text-3xl text-foreground">
                Compassionate Psychiatric Care. Wherever You Are.
              </h1>
              <div className="text-foreground/70 space-y-3 mx-auto max-w-2xl lg:max-w-none">
                <p>
                  Holistic, patient-centered mental healthcare blending psychotherapy, medication management, and
                  support.
                </p>
                <p>Evidence-based psychiatric care serving ages 12–55 through secure telehealth across Florida.</p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="px-6 h-11 flex items-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm transition ease-linear btn-shine shadow-primary-glow"
                >
                  Book Appointment
                </Link>
              </div>
              <div className="text-foreground/70 text-sm">First session 60 mins • Follow-up 30 mins</div>
              <div className="grid grid-cols-3 w-full mt-2">
                <div>
                  <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">6+ years</h2>
                  <span className="text-foreground/70">Experience</span>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">500+</h2>
                  <span className="text-foreground/70">Patients Served</span>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">95%</h2>
                  <span className="text-foreground/70">Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Center media */}
            <div className="flex justify-center">
              <div className="relative max-w-full glass-card p-1 shadow-primary-glow animate-float">
                <div className="relative overflow-hidden rounded-[calc(var(--radius)-2px)] aspect-[4/5] w-[min(420px,95vw)]">
                  <iframe
                    title="Serene Minds Wellness hero video"
                    src="https://player.vimeo.com/video/1099165472?autoplay=1&muted=1&controls=0&background=1&app_id=122963"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* Right feature cards */}
            <div className="space-y-3 lg:space-y-6">
              <div className="flex items-start gap-x-2 p-3 lg:p-4 glass-card card-hover">
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
              <div className="flex items-start gap-x-2 p-3 lg:p-4 glass-card card-hover">
                <span className="min-w-max text-secondary p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                  <Users className="w-6 h-6" />
                </span>
                <div>
                  <span className="font-semibold text-foreground text-lg">Telehealth Access</span>
                  <p className="text-foreground/70">Convenient, secure online sessions from the comfort of your home</p>
                </div>
              </div>
              <div className="flex items-start gap-x-2 p-3 lg:p-4 glass-card card-hover">
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
    </>
  )
}
