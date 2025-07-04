import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AboutImage from "../../assets/images/about.jpg";

const About = () => {
  const location = useLocation();

  return (
    <div
      className={`bg-gradient-to-br from-blue-50 via-white to-gray-200 text-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center ${
        location.pathname !== "/" ? "mt-20" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-12 items-start">
        {/* Left Content */}
        <div className="flex-1 text-left">
          {/* Headline */}
          <h1 className="font-playfair text-3xl/10 md:text-4xl/12 lg:text-5xl/16 font-extrabold mb-8">
            We’re not a brokerage. <br />
            We’re a{" "}
            <span className="text-blue-600 bg-blue-100 px-2 rounded">
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
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-blue-700 flex items-center gap-2">
              What Makes Us Different
            </h2>
            <ul className="space-y-4 text-lg text-gray-800">
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xl font-bold shadow-sm">
                  ✔
                </span>
                <span>No portals.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xl font-bold shadow-sm">
                  ✔
                </span>
                <span>No mass-market.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-xl font-bold shadow-sm">
                  ✔
                </span>
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

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={AboutImage}
            alt="Luxury real estate moodboard"
            className="rounded-xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
