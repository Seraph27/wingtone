import { Button } from "~/components/ui/button"
import { CardContent, Card } from "~/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "~/components/ui/carousel"
import Image from "next/image"

export function CarouselCustom() {
  const images = [
    {name: "asd", link: '/images/img_forest.jpg'},
    {name: "asd", link: '/images/img_lights.jpg'},
    {name: "asd", link: '/images/img_mountains.jpg'},
    {name: "asd", link: '/images/img_snowtops.jpg'}
  ];
  return (
    <div className="flex items-center justify-center">  
      <Carousel className="w-full max-w-6xl"  opts={{loop: true}}>
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6 gap-4 flex-col">
                    <Image
                      alt={item.name}
                      className="object-cover rounded-lg"
                      height={300}
                      src={item.link}
                      style={{
                        aspectRatio: "16/9",
                        objectFit: "contain",
                      }}
                      width={900}
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
  )
}
