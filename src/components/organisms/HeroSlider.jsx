import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import HeroSlide from "@/components/molecules/HeroSlide";

const HeroSlider = ({ slides, autoPlay = true, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (autoPlay && slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="h-[500px] bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to IGD India</h2>
          <p className="text-xl">Empowering communities through sustainable development</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <HeroSlide
              {...slide}
              isActive={index === currentSlide}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
          >
            <ApperIcon name="ChevronLeft" className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
          >
            <ApperIcon name="ChevronRight" className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-125" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;