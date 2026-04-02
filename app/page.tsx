export const dynamic = 'force-dynamic';

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedContent } from "@/components/ui/effects/animated-content"
import Aurora from "@/components/backgrounds/Aurora"
import ReactBitsHeroAurora from "@/components/ReactBitsHeroAurora"
import ParallaxImage from "@/components/ParallaxImage"
import ContactForm from "@/components/ContactForm"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import GalleryMasonry from "@/components/GalleryMasonry"
import LocationMap from "@/components/LocationMap"
import AccentDivider from "@/components/AccentDivider"

export default function HomePage() {
  return (
    <main>
      <AnimatedContent>
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Aurora />
          </div>
          <ReactBitsHeroAurora />
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover brightness-50"
              alt="cinematic wide shot of a luxury indian restaurant interior with warm ambient lighting, gold accents, and ornate rajasthani architecture"
              src="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577070/site-images/restaurant/10636732.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="text-6xl md:text-8xl mb-4 italic leading-tight text-secondary">
              The Soul of Rajasthan
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground tracking-widest mb-12 uppercase">
              Authentic flavors, royal heritage.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button className="rounded-xl px-10 py-6 text-lg font-bold">
                Book a Table
              </Button>
              <Button
                variant="outline"
                className="rounded-xl px-10 py-6 text-lg font-bold border-secondary/40 text-secondary bg-transparent"
              >
                View Menu
              </Button>
            </div>
          </div>
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-32 px-8 bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7 relative">
              <ParallaxImage>
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    alt="A distinguished elderly Indian chef in traditional white attire preparing spices in a dimly lit, authentic copper-filled kitchen"
                    src="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577351/site-images/team-people/12903244.jpg"
                  />
                </div>
              </ParallaxImage>
            </div>
            <div className="md:col-span-5">
              <h2 className="text-sm tracking-[0.3em] uppercase mb-6 text-primary">Our Heritage</h2>
              <h3 className="text-5xl mb-8 leading-tight">
                A Legacy Carved in Stone and Spice
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From the golden sands of Jaisalmer to the marble halls of Udaipur, our kitchen breathes the air of royalty...
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Every spice is hand-ground, every flame is tempered, and every dish is a tribute to the desert's vibrant soul.
              </p>
              <div className="italic text-secondary text-2xl">
                "We don't just serve food; we serve history on a platter."
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-32 bg-muted">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
              <h2 className="text-6xl mb-4">The Royal Menu</h2>
              <AccentDivider />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Tandoori", "Biryani", "Curries", "Thali"].map((title, i) => (
                <Card key={title} className="group relative overflow-hidden rounded-xl bg-card h-[500px] border-0">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75"
                    alt={title}
                    src={[
                      "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577054/site-images/restaurant/10207592.jpg",
                      "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577071/site-images/restaurant/10918163.jpg",
                      "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577086/site-images/restaurant/10148453.jpg",
                      "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577102/site-images/restaurant/12387873.jpg",
                    ][i]}
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-32 px-8">
          <TestimonialsAnimated
            title="Voices of the Connoisseurs"
            testimonials={[
              {
                quote: "The most authentic flavors I've encountered outside of Rajasthan itself.",
                name: "Elena Rodriguez",
                designation: "Guest",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577370/site-images/team-people/1181405.jpg",
              },
              {
                quote: "An immersive experience and a bygone era of luxury.",
                name: "James Arlington",
                designation: "Guest",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577358/site-images/team-people/1181401.jpg",
              },
            ]}
          />
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-32 bg-muted">
          <div className="max-w-4xl mx-auto px-8">
            <ContactForm headline="Reserve Your Throne" subheadline="Join us for an evening of royal indulgence" />
          </div>
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-24 px-8">
          <GalleryMasonry />
        </section>
      </AnimatedContent>

      <AnimatedContent>
        <section className="py-20 px-8 bg-muted">
          <LocationMap />
        </section>
      </AnimatedContent>
    </main>
  )
}
