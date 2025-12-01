import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1576043147576-9280628e3b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Freshly Mowed Lawn",
    caption: "Lawn Restoration",
    location: "Orange, NSW",
    service: "Residential Lawn Mowing"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1621538997424-699863459c9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Garden Bed",
    caption: "Garden Maintenance",
    location: "Orange, NSW",
    service: "Garden Bed Maintenance"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1558440788-b27e8a93e3d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Edging Work",
    caption: "Precision Edging",
    location: "Orange, NSW",
    service: "Lawn Edging"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1598887142487-3c83438f967f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Hedge Trimming",
    caption: "Hedge Trimming",
    location: "Orange, NSW",
    service: "Hedge & Shrub Maintenance"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Commercial Property",
    caption: "Commercial Work",
    location: "Orange, NSW",
    service: "Commercial Grounds Maintenance"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1615965416553-6ce862086e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Clean Up",
    caption: "Green Waste Removal",
    location: "Orange, NSW",
    service: "Cleanup Service"
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm" data-testid="text-gallery-label">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" data-testid="text-gallery-title">
            Recent Transformations
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-md"
              data-testid={`button-gallery-item-${image.id}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold text-lg">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0" data-testid="dialog-gallery-lightbox">
          {selectedImage && (
            <>
              <DialogTitle className="sr-only">{selectedImage.caption}</DialogTitle>
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  data-testid="img-lightbox-image"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                  onClick={() => setSelectedImage(null)}
                  data-testid="button-close-lightbox"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="text-lightbox-caption">
                  {selectedImage.caption}
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p data-testid="text-lightbox-location">
                    <span className="font-semibold">Location:</span> {selectedImage.location}
                  </p>
                  <p data-testid="text-lightbox-service">
                    <span className="font-semibold">Service:</span> {selectedImage.service}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
