import HeroImage from "../../assets/images/Hero_1.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white bg-black overflow-hidden"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for dark gradient effect */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-in">
          Cinematic Trust in Luxury Real Estate
        </h1>
        <p className="text-lg md:text-xl mb-10 animate-fade-in delay-200">
          We don’t broker or list. We build desire through mood, narrative, and
          emotional UX.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in delay-400">
          <a
            href="#"
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gold transition-all"
          >
            See a Cinematic Campaign
          </a>
          <a
            href="#"
            className="border border-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
          >
            Experience the Platform
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
