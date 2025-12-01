import { Sprout, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">Wright Way Lawn Service</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional lawn care and garden maintenance services in Orange, NSW. Family-owned and operated with over 10 years of experience.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-quick-links-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-gallery"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-reviews"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-contact"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-contact-heading">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400" data-testid="text-footer-address">
                  30 Coombes Pl<br />
                  Orange NSW 2800
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:0402025585" className="text-gray-400 hover:text-primary transition-colors" data-testid="link-footer-phone-1">
                    0402 025 585
                  </a>
                  <a href="tel:0411110070" className="text-gray-400 hover:text-primary transition-colors" data-testid="link-footer-phone-2">
                    0411 110 070
                  </a>
                </div>
              </li>
              <li>
                <p className="text-gray-400 text-xs" data-testid="text-footer-hours">
                  Mon - Fri: 7:30 AM - 5:00 PM
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm" data-testid="text-copyright">
            &copy; 2024 Wright Way Lawn Service. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-1" data-testid="text-footer-tagline">
            Servicing Orange & Surrounding Areas
          </p>
        </div>
      </div>
    </footer>
  );
}
