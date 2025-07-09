import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { fitCriteria } from "../../constants";
import JoinUsImage1 from "../../assets/images/join-1.jpg";
import JoinUsImage2 from "../../assets/images/join-2.jpg";

const JoinUs = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 sm:gap-20 lg:gap-28">
        {/* Left Column: Images */}
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-start space-y-6 md:space-y-0 relative animate-fade-in-up">
          {/* Image 1 */}
          <div className="w-64 sm:w-88 md:w-68 lg:w-84 xl:w-96 h-auto rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ml-12 md:ml-24 relative group overflow-hidden">
            <img
              src={JoinUsImage2}
              alt="Luxury Property Interior"
              className="w-full h-auto rounded-xl object-cover"
            />
            {/* Overlay effect */}
            <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-10 transition-opacity duration-300"></div>
          </div>

          {/* Image 2 */}
          <div className="w-64 sm:w-88 md:w-68 lg:w-84 xl:w-96 h-auto rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl relative group overflow-hidden -mt-32 md:-mt-32 lg:-mt-36 xl:-mt-40 -ml-28 md:ml-10 z-10">
            {" "}
            {/* Adjusted negative margins for general overlap */}
            <img
              src={JoinUsImage1}
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
            Want your space to enter the
            <span className="text-blue-600 px-2 rounded ml-2">8mosphere</span>?
          </h2>
          {/* Main Text */}
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
            We work by invitation and referral. If you have a property that
            deserves more than a spec sheet — let’s talk.
          </p>

          {/* Criteria List */}
          <div className="max-w-md mb-12">
            <p className="text-lg font-semibold mb-6 animate-fade-in-up delay-300">
              You’re a fit if you’re:
            </p>
            <ul className="space-y-4">
              {fitCriteria.map((criterion, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg animate-fade-in-up"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <CheckCircle2 className="size-6 text-blue-600 shrink-0 mt-1" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-700">
            <Button asChild size="lg" className="text-md font-semibold">
              <Link to="/membership/request-access">Request Access</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-md font-semibold"
            >
              <Link to="/send-referral">Send a Referral</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
