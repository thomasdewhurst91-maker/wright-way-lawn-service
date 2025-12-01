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
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/20 backdrop-blur-md border-primary/30 text-white hover:bg-primary/30"
            data-testid="badge-rating"
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">5-Star Rated in Orange, NSW</span>
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
            The <span className="text-primary">Wright Way</span> to Care for Your Lawn.
          </h1>
          
          <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl" data-testid="text-hero-description">
            Professional mowing, garden maintenance, and landscaping services. We treat your lawn like our own.
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

      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
