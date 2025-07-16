import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";

const HeroSlide = ({ image, title, subtitle, ctaText, ctaAction, isActive }) => {
  return (
    <div className="relative h-full">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{ 
          backgroundImage: `url(${image})`,
          transform: isActive ? 'scale(1)' : 'scale(1.1)'
        }}
      />
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