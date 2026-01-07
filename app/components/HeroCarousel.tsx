"use client";

import React, { useState, useEffect } from "react";
import { ImPriceTag } from "react-icons/im";
import { IoLogoXbox } from "react-icons/io5";
import { FaSteam } from "react-icons/fa";

interface BackgroundData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
}

const DynamicBackgroundCarousel: React.FC = () => {
  const backgrounds: BackgroundData[] = [
    {
      id: 1,
      title: "ELDEN RING NIGHTREIGN",
      subtitle: "A Standalone Cooperative Adventure",
      description:
        "A new darkness has enveloped the Lands Between, challenging players to unite against overwhelming odds.",
      price: "43.56",
      image: "/bg1.webp",
    },
    {
      id: 2,
      title: "CYBERPUNK LEGENDS",
      subtitle: "Neon-Soaked Future Awaits",
      description:
        "Step into a world where technology and humanity collide in spectacular fashion.",
      price: "59.99",
      image: "/bg2.webp",
    },
    {
      id: 3,
      title: "MYSTIC REALMS",
      subtitle: "Fantasy Adventure Unleashed",
      description:
        "Embark on an epic journey through mystical lands filled with ancient magic and legendary creatures.",
      price: "49.99",
      image: "/bg3.webp",
    },
    {
      id: 4,
      title: "SPACE ODYSSEY",
      subtitle: "Galactic Exploration Begins",
      description:
        "Navigate through the cosmos and discover alien worlds in this immersive space adventure.",
      price: "54.99",
      image: "/bg4.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSlideEffectActive, setIsSlideEffectActive] = useState(false);

  const SLIDE_DURATION = 5000;

  // Preload images
  useEffect(() => {
    backgrounds.forEach((bg) => {
      const img = new Image();
      img.src = bg.image;
    });
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (!isPlaying) return;

    setProgress(0);
    setIsSlideEffectActive(false);

    // Progress animation - smooth 60fps
    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + 0.4); // 0.4% every 20ms = 100% in 5s
    }, 20);

    // Auto slide change
    const slideTimeout = setTimeout(() => {
      // Start slide effect animation
      setIsSlideEffectActive(true);

      // After slide effect, change slide
      setTimeout(() => {
        const next = (currentIndex + 1) % backgrounds.length;
        setIsTransitioning(true);
        setNextIndex(next);

        // Complete transition
        setTimeout(() => {
          setCurrentIndex(next);
          setIsTransitioning(false);
          setProgress(0);
          setIsSlideEffectActive(false);
        }, 600);
      }, 300);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimeout);
    };
  }, [isPlaying, currentIndex]);

  // Manual navigation - no slide effect
  const changeSlide = (newIndex: number) => {
    if (newIndex === currentIndex || isTransitioning) return;

    setIsTransitioning(true);
    setNextIndex(newIndex);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
      setProgress(0);
      setIsSlideEffectActive(false);
    }, 600);
  };

  const handleNext = () => changeSlide((currentIndex + 1) % backgrounds.length);
  const handlePrev = () =>
    changeSlide((currentIndex - 1 + backgrounds.length) % backgrounds.length);

  const currentBg = backgrounds[currentIndex];
  const nextBg = backgrounds[nextIndex];

  return (
    <section
      className="relative w-full h-[500px] 1000:h-[700px] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Featured games carousel"
    >
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }
        .slide-effect {
          animation: slideRight 0.3s ease-out forwards;
        }
      `}</style>

      {/* Current Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${currentBg.image})` }}
      />

      {/* Next Background - for transition */}
      {isTransitioning && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${nextBg.image})`,
            animation: "fadeIn 0.6s ease-in-out forwards",
          }}
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 flex 800:px-0 px-8 flex-col justify-center items-start h-full mx-auto max-w-[720px] 990:max-w-[940px] 1200:max-w-[1140px] 1640:max-w-[1310px] 1920:max-w-[1590px]">
        <div
          className={`transition-all relative duration-700 ${isTransitioning ? "opacity-0 " : "opacity-100 "
            }`}
        >
          {/* Controls & Progress */}
          <div className="absolute bottom-0 left-0">
            <div className="w-[320px]">
              {/* Progress Bars */}
              <div className="flex gap-1" role="group" aria-label="Carousel navigation">
                {backgrounds.map((_, index) => (
                  <div key={index} className="flex-1 relative group">
                    <button
                      className="h-[2px] bg-white/20 rounded-full cursor-pointer overflow-hidden w-full"
                      onClick={() => changeSlide(index)}
                      aria-label={`Go to slide ${index + 1}: ${backgrounds[index].title}`}
                      aria-current={index === currentIndex ? "true" : "false"}
                    >
                      {/* Progress bar - chỉ hiện khi là slide hiện tại và không đang transition */}
                      {index === currentIndex && !isTransitioning && (
                        <div
                          className={`h-full bg-[#46ca43] rounded-full transition-all ${isSlideEffectActive ? "slide-effect" : ""
                            }`}
                          style={{
                            width: `${Math.min(progress, 100)}%`,
                            transition: isSlideEffectActive
                              ? "none"
                              : "width 20ms linear",
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </button>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {backgrounds[index].title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h1 className="text-[32px] font-bold text-white mb-4 tracking-tight">
            {currentBg.title}
          </h1>
          <p className="text-[16px] text-gray-300 max-w-[440px] mb-4 leading-relaxed">
            {currentBg.description}
          </p>

          <div className="flex items-center pb-5">
            {/* Price */}
            <div className="w-[120px] flex flex-col ">
              <div className="text-[14px] translate-y-2 text-[#9ba1a2] gap-x-2 flex items-center ">
                <ImPriceTag />
                <span>From</span>
              </div>
              <div className="text-[32px] gap-x-2 text-white flex items-center ">
                <span>$</span>
                <span>32.59</span>
              </div>
            </div>
            {/* Chia */}
            <div className="h-14 w-[1px] bg-[#686768]"></div>
            {/* Flatforms */}
            <div className="flex flex-col gap-y-3 px-4">
              <span className="flex block items-center text-[#9ba1ab]  text-[14px]">
                Flatforms
              </span>
              <div className="flex text-white items-center gap-x-3">
                <IoLogoXbox />
                <FaSteam />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicBackgroundCarousel;
