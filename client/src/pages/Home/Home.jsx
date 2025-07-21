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
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center mx-5 md:mx-10">
        <h1 className="text-5xl sm:text-4xl md:text-5xl 2xl:text-6xl font-serif font-extrabold leading-tight mb-6 tracking-wide">
          {/* Custom text shadow for glow */}
          <p>Cinematic Trust in Luxury</p>
          <p>Real Estate</p>
        </h1>
        <p className="text-xl sm:text-lg md:text-xl 2xl:text-2xl mx-auto mb-10 leading-snug">
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
