import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import HeroImage_1 from "../../assets/images/hero_1.jpg";
import HeroImage_2 from "../../assets/images/join-1.jpg";
import HeroImage_3 from "../../assets/images/join-2.jpg";

const SwiperSlider = () => {
  return (
    <>
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          backgroundImage: `url(${HeroImage_1})`,
        }}
        data-swiper-parallax="-23%"
      ></div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        // parallax={true}
        // speed={1500}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        // spaceBetween={0}
        // slidesPerView={1}
        // navigation={true}
        // pagination={{ clickable: true }}
        // loop={true}
      >
        <SwiperSlide>
          <section
            className="relative min-h-screen flex items-center justify-center text-white bg-black overflow-hidden"
            style={{
              backgroundImage: `url(${HeroImage_1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for dark gradient effect */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-3xl">
              <h1
                className="text-3xl md:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in"
                data-swiper-parallax="-300"
              >
                Cinematic Trust in Luxury Real Estate
              </h1>
              <p
                className="text-lg md:text-xl mb-10 animate-fade-in delay-200"
                data-swiper-parallax="-400"
              >
                We don’t broker or list. We build desire through mood,
                narrative, and emotional UX.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in delay-400">
                <a
                  href="#campaign"
                  className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gold transition-all"
                  data-swiper-parallax="-1000"
                >
                  See a Cinematic Campaign
                </a>
                <a
                  href="#platform"
                  className="border border-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
                  data-swiper-parallax="-1200"
                >
                  Experience the Platform
                </a>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            // data-swiper-parallax="5%"
            className="relative min-h-screen flex items-center justify-center text-white bg-black overflow-hidden"
            style={{
              backgroundImage: `url(${HeroImage_2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for dark gradient effect */}
            <div className="absolute inset-0 bg-black/70 z-0" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl">
              <h1
                className="text-3xl md:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in"
                data-swiper-parallax="-300"
              >
                A creative agency & SaaS redefining luxury real estate through
                emotion
              </h1>
              <p
                className="text-lg md:text-xl mb-10 animate-fade-in delay-200"
                data-swiper-parallax="-400"
              >
                We don’t broker or list. We build desire through mood,
                narrative, and emotional UX.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in delay-400">
                <a
                  href="#campaign"
                  className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gold transition-all"
                  data-swiper-parallax="-1000"
                >
                  See a Cinematic Campaign
                </a>
                <a
                  href="#platform"
                  className="border border-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
                  data-swiper-parallax="-1200"
                >
                  Experience the Platform
                </a>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            // data-swiper-parallax="5%"
            className="relative min-h-screen flex items-center justify-center text-white bg-black overflow-hidden"
            style={{
              backgroundImage: `url(${HeroImage_3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for dark gradient effect */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-3xl">
              <h1
                className="text-4xl md:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-in"
                data-swiper-parallax="-300"
              >
                Cinematic Trust in Luxury Real Estate
              </h1>
              <p
                className="text-lg md:text-xl mb-10 animate-fade-in delay-200"
                data-swiper-parallax="-400"
              >
                We don’t broker or list. We build desire through mood,
                narrative, and emotional UX.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in delay-400">
                <a
                  href="#campaign"
                  className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gold transition-all"
                  data-swiper-parallax="-1000"
                >
                  See a Cinematic Campaign
                </a>
                <a
                  href="#platform"
                  className="border border-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
                  data-swiper-parallax="-1200"
                >
                  Experience the Platform
                </a>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
