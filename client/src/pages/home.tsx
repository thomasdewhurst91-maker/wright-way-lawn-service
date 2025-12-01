import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Reviews } from "@/components/reviews";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
