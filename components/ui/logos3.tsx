"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by companies worldwide",
  logos = [
    {
      id: "logo-1",
      description: "Microsoft",
      image: "https://img.icons8.com/color/96/000000/microsoft.png",
      className: "h-12 w-12 rounded-full opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-2",
      description: "Google",
      image: "https://img.icons8.com/color/96/000000/google-logo.png",
      className: "h-12 w-12 rounded-full opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-3",
      description: "Amazon",
      image: "https://img.icons8.com/color/96/000000/amazon.png",
      className: "h-12 w-12 rounded-full opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-4",
      description: "Apple",
      image: "https://img.icons8.com/color/96/000000/mac-os.png",
      className: "h-12 w-12 rounded-full opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-5",
      description: "Meta",
      image: "https://img.icons8.com/color/96/000000/facebook-new.png",
      className: "h-12 w-12 rounded-full opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-6",
      description: "Netflix",
      image: "https://img.icons8.com/color/96/000000/netflix.png",
      className: "h-12 w-12 rounded-full opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-7",
      description: "Spotify",
      image: "https://img.icons8.com/color/96/000000/spotify.png",
      className: "h-12 w-12 rounded-full opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-8",
      description: "GitHub",
      image: "https://img.icons8.com/color/96/000000/github.png",
      className: "h-12 w-12 rounded-full opacity-60 hover:opacity-100 transition-opacity",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            {heading}
          </p>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-6 flex shrink-0 items-center justify-center">
                    <div className="w-24 h-24 p-4 bg-transparent dark:bg-background/80 backdrop-blur-sm rounded-full shadow-none dark:shadow-lg border-0 dark:border dark:border-border/50 hover:shadow-none dark:hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                      <span className="text-xs font-medium text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        {logo.description}
                      </span>
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

export { Logos3 };
