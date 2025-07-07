import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Mic, Zap, PenLine, Camera, Music, Lightbulb } from "lucide-react"; // More relevant icons

const EightVoicedDemo = () => {
  const location = useLocation();

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-black text-white py-24 md:py-32 text-center shadow-2xl ${
        location.pathname !== "/" ? "pt-32" : ""
      }`}
    >
      {/* Hero Section: Main Title & Explainer (More Impactful) */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg flex items-center justify-center gap-6 flex-wrap">
            <Mic className="size-12 md:size-20 text-blue-400" />
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
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-10 rounded-3xl shadow-2xl w-full max-w-7xl mx-auto mt-12">
        <div className="max-w-6xl mx-auto py-2 sm:py-3 lg:py-6">
          {/* Added max-w-6xl and mx-auto here */}
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            What 8Voiced Does
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Feature Card 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg">
              <Zap className="size-10 text-blue-500 mb-4 mx-auto" />
              <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                Emotional Vibe Scan
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our AI intuitively analyzes your space to grasp its inherent
                emotional atmosphere and unique character.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg">
              <PenLine className="size-10 text-blue-500 mb-4 mx-auto" />
              <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                Cinematic Scripting
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Generates a bespoke, poetic voiceover script that captures the
                essence of your property, designed to resonate deeply.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg">
              <Camera className="size-10 text-blue-500 mb-4 mx-auto" />
              <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                Visual & Audio Guidance
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Provides precise directives for cinematography, ambient sound
                design, and lighting to match the voiceover's mood.
              </p>
            </div>
            {/* Feature Card 4 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg">
              <Music className="size-10 text-blue-500 mb-4 mx-auto" />
              <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                Atmospheric Narration
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Delivers the voiceover in a perfectly modulated tone, ensuring
                your property's story moves prospective buyers.
              </p>
            </div>
            {/* Feature Card 5 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg">
              <Lightbulb className="size-10 text-blue-500 mb-4 mx-auto" />
              <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                Seamless Integration
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our process ensures that the 8Voiced output fits flawlessly into
                your overall marketing campaign.
              </p>
            </div>
          </div>
        </div>
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
