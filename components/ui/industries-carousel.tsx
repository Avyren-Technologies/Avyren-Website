"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  className?: string;
}

interface IndustriesCarouselProps {
  heading?: string;
  description?: string;
  industries?: Industry[];
  className?: string;
}

const IndustriesCarousel = ({
  heading = "Industries We Serve",
  description = "Our solutions are ideal for construction sites, schools, marketing teams, manufacturing units, service providers, retail shops, healthcare providers, and more.",
  industries = [
    {
      id: "construction",
      name: "Construction",
      icon: "🏗️",
      description: "Site management and safety tracking",
      className: "h-16 w-16",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: "🏥",
      description: "Patient care and facility management",
      className: "h-16 w-16",
    },
    {
      id: "retail",
      name: "Retail",
      icon: "🛍️",
      description: "Inventory and customer management",
      className: "h-16 w-16",
    },
    {
      id: "education",
      name: "Education",
      icon: "🎓",
      description: "Student and campus management",
      className: "h-16 w-16",
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: "🏭",
      description: "Production and quality control",
      className: "h-16 w-16",
    },
    {
      id: "services",
      name: "Services",
      icon: "🔧",
      description: "Service delivery and scheduling",
      className: "h-16 w-16",
    },
    {
      id: "logistics",
      name: "Logistics",
      icon: "🚚",
      description: "Fleet and delivery management",
      className: "h-16 w-16",
    },
    {
      id: "hospitality",
      name: "Hospitality",
      icon: "🏨",
      description: "Guest services and operations",
      className: "h-16 w-16",
    },
  ],
}: IndustriesCarouselProps) => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-balance mb-4">
            {heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.8 })]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {industries.map((industry) => (
                <CarouselItem
                  key={industry.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <div className="mx-4 flex shrink-0 items-center justify-center">
                    <div className="p-6 bg-transparent dark:bg-background/80 backdrop-blur-sm rounded-2xl shadow-none dark:shadow-lg border-0 dark:border dark:border-border/50 hover:shadow-none dark:hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                          <span className="text-3xl">{industry.icon}</span>
                        </div>
                        <h3 className="font-heading font-semibold text-sm mb-2 group-hover:text-primary transition-colors duration-300">
                          {industry.name}
                        </h3>
                        <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { IndustriesCarousel };
