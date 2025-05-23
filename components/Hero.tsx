"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const words = ["Developer👨🏾‍💻", "Designer🎨", "Video Editor📽️", "Innovator🚀"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url('/3d-rendering-abstract-black-white-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative image */}
      <Image
        src="/assets/metal1.png"
        alt="Metal Overlay"
        width={300}
        height={300}
        className="absolute z-30 -left-20 -top-20 opacity-40"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Main content */}
      <div className="relative z-20 px-4 max-w-3xl text-center">
        <p className="text-cyan-400 font-semibold text-lg md:text-xl mb-1 drop-shadow">
          Hey there, I&apos;m
        </p>

        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-2 drop-shadow-lg">
          Olamide
        </h1>

        <p className="text-gray-300 text-lg md:text-xl">I&apos;m a/an</p>

        {/* Slide-up animated text */}
        <div className="relative h-[96px] md:h-[112px] overflow-hidden mt-2 w-[280px] md:w-[360px] mx-auto">
          <div
            className="transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${index * 6}rem)` }}
          >
            {words.map((word, i) => (
              <div
                key={i}
                className="h-24 flex items-center justify-center font-bold text-3xl md:text-5xl text-cyan-400 drop-shadow-lg"
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div className="absolute bottom-6 right-6 z-20 animate-bounce text-cyan-400 text-sm font-medium">
        ↓ Scroll down
      </div>
    </div>
  );
};

export default Hero;
