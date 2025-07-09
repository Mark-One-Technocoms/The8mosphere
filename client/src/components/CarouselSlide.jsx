import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselSlide = ({ contant }) => {
  return (
    <div className="mx-auto max-w-5xl">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {contant.map(({ title, location, image }, index) => (
            <CarouselItem key={index} className={`basis-3/5`}>
              <Card className="p-0">
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-7 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                    <h3 className="font-playfair text-2xl font-bold mb-1 drop-shadow-lg leading-tight">
                      {title}
                    </h3>
                    <p className="text-gray-100 text-sm">{location}</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
