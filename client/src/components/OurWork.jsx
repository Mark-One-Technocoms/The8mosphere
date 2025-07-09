import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { selectedProjects } from "../constants";
import { CarouselSlide } from "../components";

const OurWork = () => {
  return (
    <section className="bg-white text-gray-900 py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Headline - Adjusted text colors for white background */}
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 max-w-2xl place-self-center leading-tight animate-fade-in-down delay-100">
          Selected Projects
          <br className="sm:hidden" />
          {/* Changed accent color for light background */}
          <span className="text-blue-600 px-2 ml-2 rounded">
            Cinematic, editorial, always tailored
          </span>
        </h2>

        {/* Carousel Slide for projects */}
        <CarouselSlide contant={selectedProjects} />

        {/* Call to Action - Adjusted button style for white background */}
        <Button
          asChild
          variant="outline"
          size="lg"
          className="text-md font-semibold mt-10"
        >
          <Link to="/portfolio">View Full Portfolio</Link>
        </Button>
      </div>
    </section>
  );
};

export default OurWork;
