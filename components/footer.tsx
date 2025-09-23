import { Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="glass border-t border-border/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/jflogo.jpg"
                alt="Serene Minds Wellness logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain rounded"
              />
              <h3 className="text-xl font-bold">Serene Minds Wellness</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Compassionate psychiatric care wherever you are. Holistic, patient-centered mental healthcare for ages
              12–55 across Florida.
            </p>
            <div className="text-sm text-foreground/80">
              <p>First session: 60 mins · Follow-up: 30 mins</p>
              <p>Over 6 years experience in medical and psychiatric care</p>
            </div>
            <Link
              href="http://www.serenemindwellness.us"
              className="inline-flex w-fit items-center gap-2 text-primary hover:underline"
            >
              serenemindwellness.us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#specialties" className="text-muted-foreground hover:text-primary transition-colors">
                Specialties
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+14076937055" className="text-muted-foreground hover:text-primary transition-colors">
                  (407) 693-7055
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:patience@serenemindswellness.us"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  patience@serenemindswellness.us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Serene Minds Wellness LLC. All rights reserved. | HIPAA Compliant & Secure
          </p>
        </div>
      </div>
    </footer>
  )
}
