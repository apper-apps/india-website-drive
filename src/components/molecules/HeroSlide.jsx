import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@/components/atoms/Button";

const HeroSlide = ({ image, title, subtitle, ctaText, ctaAction, isActive }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.warn(`Failed to load hero image: ${image}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative h-full">
      {/* Fallback gradient background */}
      <div 
        className={`absolute inset-0 transition-transform duration-700 ${
          imageError || !imageLoaded 
            ? 'bg-gradient-to-br from-primary via-secondary to-accent' 
            : 'bg-gray-900'
        }`}
        style={{ 
          transform: isActive ? 'scale(1)' : 'scale(1.1)'
        }}
      />
      
      {/* Main background image */}
      {!imageError && (
        <img
          src={image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            transform: isActive ? 'scale(1)' : 'scale(1.1)'
          }}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {title}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
            
            {ctaText && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  variant="accent"
                  size="lg"
                  onClick={ctaAction}
                  className="shadow-xl hover:shadow-2xl"
                >
                  {ctaText}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;