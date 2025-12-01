import { Flower2, Building2, Droplets, Check, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import lawnMowingImg from "@assets/image_1764581064975.png";
import gardenMaintenanceImg from "@assets/image_1764581085781.png";
import pressureWashingImg from "@assets/image_1764582014840.png";
import commercialImg from "@assets/image_1764581075804.png";

const services = [
  {
    id: "lawn-mowing",
    title: "Lawn Mowing",
    description: "Regular mowing services to keep your grass healthy and looking sharp. Includes edging and cleanup.",
    icon: Leaf,
    image: lawnMowingImg,
    features: ["Precision Cutting", "Edging Included", "Green Waste Removal"]
  },
  {
    id: "garden-maintenance",
    title: "Garden Maintenance",
    description: "Complete care for your flower beds and shrubs. Weeding, light pruning, and garden tidy-ups.",
    icon: Flower2,
    image: gardenMaintenanceImg,
    features: ["Light Pruning", "Weed Control", "Garden Tidy-Ups"]
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    description: "Professional pressure washing for driveways, paths, and outdoor surfaces. Restore your property's shine.",
    icon: Droplets,
    image: pressureWashingImg,
    features: ["Driveways & Paths", "Decks & Patios", "Exterior Cleaning"]
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "Reliable grounds keeping for businesses, strata, and commercial properties in Orange.",
    icon: Building2,
    image: commercialImg,
    features: ["Regular Schedule", "Professional Invoicing", "All Services Available"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm" data-testid="text-services-label">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" data-testid="text-services-title">
            Comprehensive Lawn Solutions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group overflow-hidden border-card-border hover-elevate transition-all"
                data-testid={`card-service-${service.id}`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 relative">
                  <div className="absolute -top-8 right-6 w-16 h-16 bg-background rounded-xl shadow-lg flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3" data-testid={`text-service-title-${service.id}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`text-service-description-${service.id}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
