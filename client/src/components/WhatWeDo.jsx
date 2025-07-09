import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { serviceSnapshorts } from "../constants";
import ServicesSnapshotImage1 from "../assets/images/service-snapshot-1.jpg";
import ServicesSnapshotImage2 from "../assets/images/service-snapshot-2.jpg";

const WhatWeDo = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 sm:gap-20 lg:gap-28">
        {/* Left Column: Images */}
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-start space-y-6 md:space-y-0 relative animate-fade-in-up">
          {/* Image 1 */}
          <div className="w-64 sm:w-88 md:w-68 lg:w-84 xl:w-96 h-auto rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ml-12 md:ml-24 relative group overflow-hidden">
            <img
              src={ServicesSnapshotImage1}
              alt="Luxury Property Interior"
              className="w-full h-auto rounded-xl object-cover"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-10 transition-opacity duration-300"></div>
          </div>

          {/* Image 2 */}
          <div className="w-52 sm:w-76 md:w-56 lg:w-72 xl:w-84 h-auto rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl relative group overflow-hidden -mt-52 md:-mt-52 lg:-mt-80 xl:-mt-96 -ml-28 md:ml-10 z-10">
            {" "}
            {/* Adjusted negative margins for general overlap */}
            <img
              src={ServicesSnapshotImage2}
              alt="Modern Architecture Design"
              className="w-full h-auto rounded-xl object-cover"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-10 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Right Column: Existing Content (Headline, Services, CTA) */}
        <div className="w-full md:w-3/5 text-center md:text-left mt-12 md:mt-0">
          {/* Headline */}
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 leading-tight animate-fade-in-down delay-100">
            We brand property like
            <span className="text-blue-600 px-2 rounded ml-2">
              fashion, film, and art.
            </span>
          </h2>

          {/* Services Snapshot */}
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-6 text-lg md:text-xl leading-relaxed text-left max-w-3xl mx-auto md:mx-0 mb-16">
            {serviceSnapshorts.map((serviceSnapshort, index) => (
              <li
                key={serviceSnapshort.title || index}
                className="flex items-start gap-3"
              >
                {serviceSnapshort.icon && (
                  <serviceSnapshort.icon className="size-6 text-blue-600 shrink-0 mt-1" />
                )}
                <span>
                  <p className="font-semibold">{serviceSnapshort.title}</p>
                  <p className="text-gray-700">
                    {serviceSnapshort.description}
                  </p>
                </span>
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-md font-semibold"
          >
            <Link to="/services">Explore Full Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
