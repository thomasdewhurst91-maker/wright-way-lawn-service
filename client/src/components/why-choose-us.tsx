import { Award, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    id: "experience",
    icon: Award,
    title: "10+ Years Experience",
    description: "Mick's extensive background as a professional arborist brings expert knowledge to every job."
  },
  {
    id: "family-owned",
    icon: Users,
    title: "Family Owned & Operated",
    description: "Local Orange business that treats your property with the same care as our own."
  },
  {
    id: "safety-first",
    icon: Shield,
    title: "Safety First",
    description: "Snake awareness training, protective gear, and fully insured for your peace of mind."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm" data-testid="text-why-choose-label">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" data-testid="text-why-choose-title">
            The Wright Way Difference
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.id}
                className="text-center border-card-border hover-elevate transition-all"
                data-testid={`card-feature-${feature.id}`}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-feature-title-${feature.id}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${feature.id}`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
