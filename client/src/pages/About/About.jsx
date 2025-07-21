import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Meeting1Image from "../../assets/images/meeting-1.jpg";
import Meeting2Image from "../../assets/images/meeting-2.jpg";

const About = () => {
  const location = useLocation();

  return (
    <div
      className={`bg-gray-100 text-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden border border-red-500 ${
        location.pathname !== "/" ? "pt-36" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-12 items-start">
        {/* Left Content */}
        <div className="flex-1 text-left">
          {/* Headline */}
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold mb-8">
            We’re not a brokerage. <br />
            We’re a{" "}
            <span className="text-blue-600 px-2 rounded">
              moodboard in motion.
            </span>
          </h1>

          {/* About Us Section */}
          <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 text-gray-700">
            8mosphere is a creative agency for luxury real estate. We work with
            developers, agents, and private sellers who want more than marketing
            — they want atmosphere.
          </p>

          {/* What Makes Us Different Section */}
          <div className="border-l-4 border-blue-500 pl-8 mb-10">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-gray-900 flex items-center gap-2">
              What Makes Us Different
            </h2>
            <ul className="space-y-4 text-lg text-gray-800">
              <li className="flex items-center gap-3">
                <CheckCircle className="size-7 text-blue-500 shrink-0 mt-1" />
                <span>No portals.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="size-7 text-blue-500 shrink-0 mt-1" />
                <span>No mass-market.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="size-7 text-blue-500 shrink-0 mt-1" />
                <span>
                  Just cinematic, editorial-grade storytelling made to whisper
                  luxury.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              variant="default"
              size="lg"
              className="text-md font-semibold"
            >
              <Link to="/team">Meet the Team</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-md font-semibold"
            >
              <Link to="/why-8mosphere">Why 8mosphere Works</Link>
            </Button>
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-start space-y-6 md:space-y-0 relative animate-fade-in-up">
          {/* Image 1 */}
          <div className="w-64 border sm:w-88 md:w-68 lg:w-84 xl:w-96 h-auto rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ml-12 md:ml-24 relative group overflow-hidden">
            <img
              src={Meeting1Image}
              alt="Luxury Property Interior"
              className="w-full h-auto rounded-xl object-cover"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-10 transition-opacity duration-300"></div>
          </div>

          {/* Image 2 */}
          <div className="w-52 sm:w-76 md:w-56 lg:w-72 xl:w-84 h-auto rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl relative group overflow-hidden -mt-72 md:-mt-52 lg:-mt-80 xl:-mt-96 -ml-40 md:ml-10 z-10">
            {" "}
            {/* Adjusted negative margins for general overlap */}
            <img
              src={Meeting2Image}
              alt="Modern Architecture Design"
              className="w-full h-auto rounded-xl object-cover"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-10 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
