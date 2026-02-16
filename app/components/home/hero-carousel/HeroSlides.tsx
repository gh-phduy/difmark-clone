import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { HERO_SLIDES } from "@/lib/constants/hero";

interface HeroSlidesProps {
  setApi: (api: CarouselApi) => void;
  current: number;
  onIndicatorClick: (index: number) => void;
}

export function HeroSlides({
  setApi,
  current,
  onIndicatorClick,
}: HeroSlidesProps) {
  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
      className="h-full w-full"
    >
      <CarouselContent>
        {HERO_SLIDES.map((slide) => (
          <CarouselItem key={slide.id} className="h-[450px]">
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src={slide.image}
                alt={slide.alt || slide.id}
                fill
                className="object-cover"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-6 h-12 w-12 border-none bg-black/40 text-white shadow-xl backdrop-blur-md transition-all hover:bg-black/60 active:scale-95" />
      <CarouselNext className="right-6 h-12 w-12 border-none bg-black/40 text-white shadow-xl backdrop-blur-md transition-all hover:bg-black/60 active:scale-95" />
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/40 px-3 py-2 backdrop-blur-md">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => onIndicatorClick(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              current === index
                ? "w-8 bg-[#ccff00]"
                : "w-2 bg-white/30 hover:bg-white/60",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
