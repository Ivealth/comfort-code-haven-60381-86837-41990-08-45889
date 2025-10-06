import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const FeatureCollaboration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background text-foreground font-body">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 h-16 bg-primary/95 backdrop-blur-sm">
        <div className="w-full px-5 h-full flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back</span>
          </button>

          <div className="text-lg font-heading text-white flex items-center">
            <span className="font-bold">Trovii</span>
            <span className="ml-1 font-body font-light text-white/90 text-xs tracking-tight">
              studsuit
            </span>
          </div>

          <div className="w-16"></div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              Premium Feature
            </div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary leading-tight mb-3">
              Grub on Demand
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Forget long queues or dodgy deliveries. Order hot, local food and focus on your studies — we'll handle the rest.
            </p>
          </div>

          {/* Feature Testimonial Carousel */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">Swipe to see more</span>
                <span className="text-primary animate-bounce text-lg">→</span>
              </div>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-3xl mx-auto"
            >
              <CarouselContent className="-ml-2">
                {/* Testimonial 1 */}
                <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-lg shadow-[0_8px_30px_rgba(220,38,38,0.3)] border border-primary/10 overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop" 
                        alt="Student testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="text-primary font-bold text-sm mb-2">Campus Eats</div>
                      <p className="text-foreground font-semibold text-sm mb-2 leading-snug">
                        "Fast delivery saved my study sessions"
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                        I can order between classes and have hot food delivered right to the library. No more skipping meals during exam weeks!
                      </p>
                      <p className="text-foreground text-[10px] font-semibold uppercase tracking-wide">
                        Sarah Chen, Sophomore
                      </p>
                    </div>
                  </div>
                </CarouselItem>

                {/* Testimonial 2 */}
                <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-lg shadow-[0_8px_30px_rgba(220,38,38,0.3)] border border-primary/10 overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" 
                        alt="Student testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="text-primary font-bold text-sm mb-2">Quick Bites</div>
                      <p className="text-foreground font-semibold text-sm mb-2 leading-snug">
                        "Best campus food app hands down"
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                        All my favorite local restaurants in one place. The tracking feature is amazing and delivery is always on time.
                      </p>
                      <p className="text-foreground text-[10px] font-semibold uppercase tracking-wide">
                        Marcus Johnson, Junior
                      </p>
                    </div>
                  </div>
                </CarouselItem>

                {/* Testimonial 3 */}
                <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-lg shadow-[0_8px_30px_rgba(220,38,38,0.3)] border border-primary/10 overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop" 
                        alt="Student testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="text-primary font-bold text-sm mb-2">Trovii Grub</div>
                      <p className="text-foreground font-semibold text-sm mb-2 leading-snug">
                        "Game changer for busy students"
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                        No more waiting in long cafeteria lines. I order ahead and pick it up or have it delivered to my dorm. So convenient!
                      </p>
                      <p className="text-foreground text-[10px] font-semibold uppercase tracking-wide">
                        Emily Rodriguez, Senior
                      </p>
                    </div>
                  </div>
                </CarouselItem>

                {/* Testimonial 4 */}
                <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-lg shadow-[0_8px_30px_rgba(220,38,38,0.3)] border border-primary/10 overflow-hidden h-full">
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop" 
                        alt="Student testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="text-primary font-bold text-sm mb-2">Student Dining</div>
                      <p className="text-foreground font-semibold text-sm mb-2 leading-snug">
                        "Reliable and affordable campus food"
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-2">
                        Great student discounts and the delivery zones cover every spot on campus. Perfect for late-night study sessions.
                      </p>
                      <p className="text-foreground text-[10px] font-semibold uppercase tracking-wide">
                        David Park, Freshman
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-xl p-6 md:p-8 text-center text-white">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">
              Ready to Order Your Next Meal?
            </h2>
            <p className="text-white/90 mb-4 max-w-xl mx-auto text-sm">
              Join thousands of students already enjoying hot, fresh meals delivered fast with Trovii
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="px-6 py-2.5 rounded-full bg-white text-primary text-xs font-semibold hover:bg-white/90 transition-colors"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white text-center text-xs py-6">
        <p>© 2025 Ivealth LTD – Empowering the next gen.</p>
      </footer>
    </div>
  );
};

export default FeatureCollaboration;
