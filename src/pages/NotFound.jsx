import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center justify-center gap-6 sm:gap-8 min-h-screen bg-primary-black relative">
      {/* Blurry Animated Background */}
      <div
        className="absolute inset-0 opacity-30 animate-blur-shift z-0"
        style={{
          background: `radial-gradient(circle, #CFC8B8 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary-black/80 to-transparent z-0"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center">
        {/* SVG Icon (Broken Book) */}

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent-v bg-clip-text text-transparent font-semibold">
          ERROR 404
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-primary-white max-w-md sm:max-w-lg md:max-w-xl">
          Oops! The page you’re looking for seems to have vanished into the
          literary void. Double-check the URL or return to the safety of our
          homepage.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="btn btn-primary-v px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md text-primary-white hover:bg-primary-v/80 transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
