import { Star, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    id: 1,
    name: "Michael S.",
    initials: "M",
    role: "Local Guide",
    timeAgo: "2 months ago",
    rating: 5,
    text: "Excellent service. The team arrived on time and did a fantastic job with the mowing and edging. They even cleaned up all the clippings properly. Will definitely be using them again.",
    color: "bg-orange-500"
  },
  {
    id: 2,
    name: "Sarah J.",
    initials: "S",
    role: "Local Guide",
    timeAgo: "5 months ago",
    rating: 5,
    text: "Highly recommend Wright Way. Honest, reliable and fair pricing. It's hard to find good tradies these days but these guys are the real deal. My garden has never looked better.",
    color: "bg-blue-500"
  },
  {
    id: 3,
    name: "David P.",
    initials: "D",
    role: "Customer",
    timeAgo: "1 year ago",
    rating: 5,
    text: "Great communication and professional finish. They take pride in their work which shows. Very happy with the regular maintenance schedule.",
    color: "bg-primary"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-reviews-title">
              What Our Customers Say
            </h2>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-2xl font-bold text-foreground" data-testid="text-average-rating">5.0</span>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="fill-current w-5 h-5" />
                ))}
              </div>
              <a
                href="https://maps.google.com/?cid=16507038338935083205"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium ml-2"
                data-testid="link-google-reviews"
              >
                See all reviews on Google
              </a>
            </div>
          </div>
          <Button
            variant="outline"
            asChild
            className="flex items-center gap-2"
            data-testid="button-write-review"
          >
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJQ0OwbzOIUwERxdD6RenHFOU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PenTool className="h-4 w-4" />
              Write a Review
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="border-card-border hover-elevate transition-shadow" data-testid={`card-review-${review.id}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarFallback className={`${review.color} text-white font-bold`}>
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-sm" data-testid={`text-reviewer-name-${review.id}`}>
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <span>{review.role}</span>
                      <span>•</span>
                      <span>{review.timeAgo}</span>
                    </div>
                  </div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google"
                    className="w-5 h-5 opacity-50"
                  />
                </div>
                <div className="flex text-yellow-400 mb-3 text-xs">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="fill-current w-4 h-4" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-review-content-${review.id}`}>
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
