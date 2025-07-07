import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Mic, Zap, PenLine, Camera, Music, Lightbulb } from "lucide-react"; // More relevant icons

const EightVoicedDemo = () => {
  const location = useLocation();

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-black text-white py-24 md:py-32 text-center shadow-2xl ${
        location.pathname !== "/" ? "" : ""
      }`}
    >
      {/* Hero Section: Main Title & Explainer (More Impactful) */}
      <section className="">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg flex items-center justify-center gap-6 flex-wrap">
            <Mic className="size-12 md:size-20 text-blue-400 animate-pulse" />
            Introducing
            <span className="text-white bg-blue-800 bg-opacity-30 px-4 py-2 rounded-xl border border-blue-600 shadow-lg">
              8Voiced
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light italic mb-8 max-w-3xl mx-auto drop-shadow-md">
            Our cinematic AI that lets real estate speak mood.
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            8voiced turns your property into a feeling — using voice, sound, and
            style. It doesn’t talk about square footage. It speaks to the heart.
          </p>
        </div>
      </section>

      {/* What It Does Section (Feature Grid) */}
      <section className="bg-white px-12 py-10 rounded-xl shadow-lg w-full max-w-5xl place-self-center mt-12">
        <h2 className="font-playfair text-xl md:text-2xl font-bold mb-8 text-gray-900 text-center">
          How It Works:
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-base md:text-lg text-gray-800">
          <li className="flex gap-3">
            <Zap className="size-5 text-blue-500 shrink-0 mt-1" />
            <span>Scans emotional vibe of your space.</span>
          </li>
          <li className="flex gap-3">
            <PenLine className="size-5 text-blue-500 shrink-0 mt-1" />
            <span>Writes a cinematic voiceover script.</span>
          </li>
          <li className="flex gap-3">
            <Camera className="size-5 text-blue-500 shrink-0 mt-1" />
            <span>Guides shoot, music, and lighting.</span>
          </li>
          <li className="flex gap-3">
            <Music className="size-5 text-blue-500 shrink-0 mt-1" />
            <span>Narrates your home to move buyers.</span>
          </li>
        </ul>
      </section>

      {/* Sample Line Section (More Prominent) */}
      <section className="bg-gradient-to-r from-gray-950 via-blue-800 to-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center shadow-xl my-16">
        <div className="max-w-3xl mx-auto">
          <p className="font-playfair text-xl md:text-2xl font-bold mb-6 opacity-80">
            A Glimpse of the 8Voiced Narrative:
          </p>
          <p className="font-playfair text-4xl md:text-5xl italic font-semibold leading-tight drop-shadow-md">
            “You belong to this dusk. The stone remembers your footsteps.”
          </p>
        </div>
      </section>

      {/* Call to Action (Dedicated Section) */}
      <section className="text-center px-2">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
            Ready for Your Property to Speak?
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-8">
            Let's create a narrative that moves hearts and minds.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-white border-white"
          >
            <Link to="/contact">DM Us “8voiced me.”</Link>
          </Button>
          <p className="text-md md:text-lg m-6">
            Property, now narrated by desire.
          </p>
          <Button asChild variant="default" size="lg" className="">
            <Link to="/8voiced">See 8voiced in Action</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EightVoicedDemo;
