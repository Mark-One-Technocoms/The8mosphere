import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroBackgroundVideo from "../../assets/videos/real-estate.mp4";

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        autoPlay
        loop
        muted
        playsInline
        src={HeroBackgroundVideo}
        // Fallback for browsers that don't support video or if video path is incorrect
        // You can also add a poster image for faster loading/fallback
        // poster="/path/to/your/hero-background-image.jpg"
      >
        Your browser does not support the video tag.
      </video>
      {/* Optional: Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Layer */}
      <section className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-down">
          Welcome to <span className="text-blue-500">8mosphere</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light italic mb-8 drop-shadow animate-fade-in-up">
          A creative agency for luxury real estate, powered by story, mood, and
          style.
        </p>
        <p className="text-lg md:text-xl font-medium mb-10 drop-shadow animate-fade-in-up">
          We don’t just market property. We design the feeling of ownership.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up">
          <Button variant="default" size="lg" className="text-md font-semibold">
            <Link to="/portfolio">View Our Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-md font-semibold text-white border-white"
          >
            <Link to="/request-access">Request Access</Link>
          </Button>
        </div>
        <p className="text-sm text-gray-200 font-medium mt-3 animate-fade-in-up">
          By invitation only.
        </p>
      </section>
    </div>
  );
};

export default Home;
