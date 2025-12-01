import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import lawn1 from "@assets/image_1764581064975.png";
import lawn2 from "@assets/image_1764581075804.png";
import lawn3 from "@assets/image_1764581085781.png";
import lawn4 from "@assets/image_1764581094397.png";
import lawn5 from "@assets/image_1764581104754.png";
import lawn6 from "@assets/image_1764581118530.png";
import lawn7 from "@assets/image_1764581134396.png";
import lawn8 from "@assets/image_1764581599344.png";
import lawn9 from "@assets/image_1764581610862.png";
import lawn10 from "@assets/image_1764581619347.png";
import lawn11 from "@assets/image_1764581630779.png";
import lawn12 from "@assets/image_1764581838723.png";
import lawn13 from "@assets/image_1764581847781.png";
import lawn14 from "@assets/image_1764581856412.png";
import lawn15 from "@assets/image_1764581868405.png";
import lawn16 from "@assets/image_1764581908859.png";
import lawn17 from "@assets/image_1764581918389.png";
import lawn18 from "@assets/image_1764581933096.png";
import lawn19 from "@assets/image_1764581943925.png";
import lawn20 from "@assets/image_1764581957059.png";
import lawn21 from "@assets/image_1764581965774.png";
import lawn22 from "@assets/image_1764581974451.png";
import lawn23 from "@assets/image_1764581984893.png";
import lawn24 from "@assets/image_1764582014840.png";
import lawn25 from "@assets/image_1764582023892.png";
import lawn26 from "@assets/image_1764582032238.png";
import lawn27 from "@assets/image_1764582041963.png";
import lawn28 from "@assets/image_1764582052755.png";
import lawn29 from "@assets/image_1764582062754.png";
import lawn30 from "@assets/image_1764582071948.png";
import lawn31 from "@assets/image_1764582081670.png";
import lawn32 from "@assets/image_1764582097910.png";
import lawn33 from "@assets/image_1764582105305.png";
import lawn34 from "@assets/image_1764582112960.png";
import lawn35 from "@assets/image_1764582124133.png";

const galleryImages = [
  {
    id: 1,
    src: lawn1,
    alt: "Freshly Mowed Lawn with Garden Bed",
    caption: "Lawn Maintenance",
    location: "Orange, NSW",
    service: "Residential Lawn Mowing"
  },
  {
    id: 2,
    src: lawn2,
    alt: "Commercial Property Landscaping",
    caption: "Commercial Landscaping",
    location: "Orange, NSW",
    service: "Commercial Grounds Maintenance"
  },
  {
    id: 3,
    src: lawn3,
    alt: "Garden Bed with Flowers",
    caption: "Garden Maintenance",
    location: "Orange, NSW",
    service: "Garden Bed Maintenance"
  },
  {
    id: 4,
    src: lawn4,
    alt: "Hedge Trimming",
    caption: "Hedge Trimming",
    location: "Orange, NSW",
    service: "Hedge & Shrub Maintenance"
  },
  {
    id: 5,
    src: lawn5,
    alt: "Large Property Lawn Care",
    caption: "Property Maintenance",
    location: "Orange, NSW",
    service: "Residential Lawn Care"
  },
  {
    id: 6,
    src: lawn6,
    alt: "Manicured Garden Pathway",
    caption: "Garden & Pathway",
    location: "Orange, NSW",
    service: "Garden Design & Maintenance"
  },
  {
    id: 7,
    src: lawn7,
    alt: "Brick Pathway Landscaping",
    caption: "Pathway Maintenance",
    location: "Orange, NSW",
    service: "Garden Edging & Paths"
  },
  {
    id: 8,
    src: lawn8,
    alt: "Paver Pathway with Decorative Pots",
    caption: "Garden Pathway",
    location: "Orange, NSW",
    service: "Garden Design & Maintenance"
  },
  {
    id: 9,
    src: lawn9,
    alt: "Front Garden with Tropical Plants",
    caption: "Tropical Garden",
    location: "Orange, NSW",
    service: "Garden Bed Design"
  },
  {
    id: 10,
    src: lawn10,
    alt: "Tiered Garden with Railway Sleepers",
    caption: "Tiered Garden Design",
    location: "Orange, NSW",
    service: "Landscaping & Retaining"
  },
  {
    id: 11,
    src: lawn11,
    alt: "Pink Roses and Lawn Care",
    caption: "Rose Garden",
    location: "Orange, NSW",
    service: "Lawn & Garden Maintenance"
  },
  {
    id: 12,
    src: lawn12,
    alt: "Circular Paver Feature with Rose Bush",
    caption: "Feature Garden Bed",
    location: "Orange, NSW",
    service: "Garden Design & Paving"
  },
  {
    id: 13,
    src: lawn13,
    alt: "Hedge Trimming Side Yard",
    caption: "Side Yard Maintenance",
    location: "Orange, NSW",
    service: "Hedge Trimming & Lawn Care"
  },
  {
    id: 14,
    src: lawn14,
    alt: "Side Pathway with Pebbles",
    caption: "Pathway Landscaping",
    location: "Orange, NSW",
    service: "Garden Bed & Path Design"
  },
  {
    id: 15,
    src: lawn15,
    alt: "Hedge Trimming with Mulch Beds",
    caption: "Hedge & Mulch Work",
    location: "Orange, NSW",
    service: "Hedge Trimming & Mulching"
  },
  {
    id: 16,
    src: lawn16,
    alt: "Front Entry with Agapanthus",
    caption: "Entry Garden",
    location: "Orange, NSW",
    service: "Garden Maintenance"
  },
  {
    id: 17,
    src: lawn17,
    alt: "Large Tree and Open Lawn",
    caption: "Large Property Care",
    location: "Orange, NSW",
    service: "Tree & Lawn Maintenance"
  },
  {
    id: 18,
    src: lawn18,
    alt: "Feature Tree with Modern Landscaping",
    caption: "Contemporary Garden",
    location: "Orange, NSW",
    service: "Lawn & Feature Trees"
  },
  {
    id: 19,
    src: lawn19,
    alt: "Modern Home Front Garden",
    caption: "New Home Landscaping",
    location: "Orange, NSW",
    service: "Complete Garden Design"
  },
  {
    id: 20,
    src: lawn20,
    alt: "Feature Plant with Ornamental Grasses",
    caption: "Modern Feature Planting",
    location: "Orange, NSW",
    service: "Garden Design & Planting"
  },
  {
    id: 21,
    src: lawn21,
    alt: "Large Paver Patio with Curved Lawn",
    caption: "Backyard Oasis",
    location: "Orange, NSW",
    service: "Lawn & Patio Maintenance"
  },
  {
    id: 22,
    src: lawn22,
    alt: "Street Front Hedge Trimming",
    caption: "Front Hedge Work",
    location: "Orange, NSW",
    service: "Professional Hedge Trimming"
  },
  {
    id: 23,
    src: lawn23,
    alt: "Pristine Lawn with Feature Garden Bed",
    caption: "Premium Lawn Care",
    location: "Orange, NSW",
    service: "Lawn Mowing & Garden Beds"
  },
  {
    id: 24,
    src: lawn24,
    alt: "Corner Garden Bed with Modern Plantings",
    caption: "Modern Corner Garden",
    location: "Orange, NSW",
    service: "Garden Design & Mulching"
  },
  {
    id: 25,
    src: lawn25,
    alt: "Colorful Flower Garden with Foxgloves",
    caption: "Vibrant Flower Beds",
    location: "Orange, NSW",
    service: "Garden Planting & Care"
  },
  {
    id: 26,
    src: lawn26,
    alt: "Railway Sleeper Garden Edging",
    caption: "Garden Edging",
    location: "Orange, NSW",
    service: "Garden Bed Design"
  },
  {
    id: 27,
    src: lawn27,
    alt: "Front House Rose Bushes",
    caption: "Front Garden Roses",
    location: "Orange, NSW",
    service: "Lawn & Rose Care"
  },
  {
    id: 28,
    src: lawn28,
    alt: "Colorful Lilies Garden Display",
    caption: "Lily Garden",
    location: "Orange, NSW",
    service: "Flowering Garden Care"
  },
  {
    id: 29,
    src: lawn29,
    alt: "Pink Flowering Tree with Lawn Verge",
    caption: "Street Verge Care",
    location: "Orange, NSW",
    service: "Lawn Edging & Trees"
  },
  {
    id: 30,
    src: lawn30,
    alt: "Large Lawn with Irrigation System",
    caption: "Irrigation & Lawn Care",
    location: "Orange, NSW",
    service: "Large Property Maintenance"
  },
  {
    id: 31,
    src: lawn31,
    alt: "Side Yard with Paver Strips",
    caption: "Contemporary Side Yard",
    location: "Orange, NSW",
    service: "Lawn & Paver Maintenance"
  },
  {
    id: 32,
    src: lawn32,
    alt: "Manicured Lawn with Tall Hedge Backdrop",
    caption: "Backyard Perfection",
    location: "Orange, NSW",
    service: "Lawn & Hedge Maintenance"
  },
  {
    id: 33,
    src: lawn33,
    alt: "Backyard with Patio and Mature Trees",
    caption: "Backyard Retreat",
    location: "Orange, NSW",
    service: "Lawn & Tree Care"
  },
  {
    id: 34,
    src: lawn34,
    alt: "Rural Property with Native Trees",
    caption: "Rural Property Care",
    location: "Orange, NSW",
    service: "Large Property Maintenance"
  },
  {
    id: 35,
    src: lawn35,
    alt: "Lattice Screen with Climbing Roses",
    caption: "Garden Lattice & Roses",
    location: "Orange, NSW",
    service: "Garden Design & Care"
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
