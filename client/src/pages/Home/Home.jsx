import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/Hero_1.jpg";
import MobileHeroImage from "../../assets/images/mobile_hero_1.jpg";
import Button from "../../components/Generic/Button";
import { Mouse, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${HeroImage})` }}
      />
      {/* Mobile Background */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${MobileHeroImage})` }}
      />

      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold leading-tight mb-6 tracking-wide">
          {/* Custom text shadow for glow */}
          Cinematic Trust in Luxury Real Estate
        </h1>
        <p className="text-xl md:text-2xl mb-10 leading-snug max-w-3xl mx-auto">
          We don’t broker or list. We build desire through mood, narrative, and
          emotional UX.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          <Link to="">
            <Button type="primary" size="lg" label="See a Cinematic Campaign" />
          </Link>
          <Link to="">
            <Button
              type="secondary"
              size="lg"
              label="Experience the Platform"
            />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-5 z-10 animate-bounce">
        <Mouse className="size-8" />
        <ChevronDown className="size-8 -translate-y-1.5" />
      </div>
    </section>
  );
};

export default Hero;
