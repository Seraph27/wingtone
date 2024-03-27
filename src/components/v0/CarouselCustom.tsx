import { Button } from "~/components/ui/button";
import { CardContent, Card } from "~/components/ui/card";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "~/components/ui/carousel";
import Image from "next/image";

export function CarouselCustom() {
  const images = [
    { name: "asd", link: "/images/img_forest.jpg" },
    { name: "asd", link: "/images/img_lights.jpg" },
    { name: "asd", link: "/images/img_mountains.jpg" },
    { name: "asd", link: "/images/img_snowtops.jpg" },
  ];
  return (
    <div className="flex items-center justify-center">
      <Carousel
        className="w-full mt-10 max-w-[1200px]"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6  max-h-[450px]">
                    <Image
                      alt={item.name}
                      className="rounded-lg object-cover"
                      height={720}
                      src={item.link}
                      style={{
                        aspectRatio: "16/9",
                        objectFit: "cover",
                      }}
                      width={1280}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
