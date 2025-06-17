import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BannerCarouselProps {
  slides?: {
    id: number;
    imageUrl: string;
    alt: string;
  }[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({
  slides = [
    {
      id: 1,
      imageUrl:'/img/photo-1558981806-ec527fa84c39.jpg',
      alt: "High-performance motorcycle in garage",
    },
    {
      id: 2,
      imageUrl:
        "/img/photo-1568772585407-9361f9bf3a87.jpg",
      alt: "Motorcycle maintenance in garage",
    },
    {
      id: 3,
      imageUrl:
      "/img/photo-1568772585407-9361f9bf3a87.jpg",
      alt: "Custom motorcycle in workshop",
    },
  ],
}) => {
  return (
    <div className="relative w-full h-[600px] bg-[#101722]">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative w-full h-[600px] overflow-hidden">
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101722] to-transparent opacity-60"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="left-4 bg-white/20 hover:bg-white/30 border-none z-10"
          variant="outline"
        >
          <ChevronLeft className="h-6 w-6 text-[#00E8F8]" />
        </CarouselPrevious>

        <CarouselNext
          className="right-4 bg-white/20 hover:bg-white/30 border-none z-10"
          variant="outline"
        >
          <ChevronRight className="h-6 w-6 text-[#00E8F8]" />
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
