import { useState, useEffect } from "react";
import { Sprout, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-2 py-1"
            data-testid="link-logo"
          >
            <Sprout className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl tracking-tight text-foreground">
              Wright Way <span className="text-primary">Lawn Service</span>
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground/60 hover:text-primary font-medium transition-colors"
              data-testid="link-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/60 hover:text-primary font-medium transition-colors"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground/60 hover:text-primary font-medium transition-colors"
              data-testid="link-gallery"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground/60 hover:text-primary font-medium transition-colors"
              data-testid="link-reviews"
            >
              Reviews
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="default"
              className="rounded-full"
              data-testid="button-get-quote-desktop"
            >
              Get a Free Quote
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-3 text-base font-medium text-foreground hover-elevate active-elevate-2 rounded-md"
              data-testid="link-home-mobile"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-3 text-base font-medium text-foreground hover-elevate active-elevate-2 rounded-md"
              data-testid="link-services-mobile"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-3 py-3 text-base font-medium text-foreground hover-elevate active-elevate-2 rounded-md"
              data-testid="link-gallery-mobile"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left px-3 py-3 text-base font-medium text-foreground hover-elevate active-elevate-2 rounded-md"
              data-testid="link-reviews-mobile"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-3 text-base font-bold text-primary bg-primary/10 rounded-md hover-elevate active-elevate-2"
              data-testid="button-get-quote-mobile"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
