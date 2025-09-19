import { Heart, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Serene Minds Wellness</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Compassionate psychiatric care wherever you are. Holistic, patient-centered mental healthcare for ages
              12-55 across Florida.
            </p>
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

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Serene Minds Wellness LLC. All rights reserved. | HIPAA Compliant & Secure
          </p>
        </div>
      </div>
    </footer>
  )
}
