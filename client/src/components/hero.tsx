import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/image_1764581064975.png";

export function Hero() {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md border-primary/30 text-white hover:bg-primary/30"
              data-testid="badge-rating"
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">5-Star Rated</span>
            </Badge>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-md border border-secondary/40 text-white rounded-full hover:bg-secondary/30 transition-colors"
              data-testid="badge-phone-numbers"
            >
              <a href="tel:0402025585" className="text-sm font-medium hover:underline" data-testid="link-phone-1">
                0402 025 585
              </a>
              <span className="text-sm font-medium">•</span>
              <a href="tel:0411110070" className="text-sm font-medium hover:underline" data-testid="link-phone-2">
                0411 110 070
              </a>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
            You <span className="text-secondary">GROW</span> it, We'll <span className="text-secondary">MOW</span> it!
          </h1>
          
          <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl" data-testid="text-hero-description">
            Family-owned and fully insured. From mowing and edging to gardening, pressure washing, and light pruning—we handle it all with care and precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-6 shadow-lg"
              data-testid="button-request-quote"
            >
              Request a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:text-white hover:border-white/40"
              data-testid="button-find-on-maps"
            >
              <a
                href="https://maps.google.com/?cid=16507038338935083205"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MapPin className="h-5 w-5" />
                Find Us on Maps
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
    </section>
  );
}
