import { useState } from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const PhotoGalleryItem = ({ image, title, description, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      variant="elevated"
      className="overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <ApperIcon name="Image" className="w-12 h-12 text-gray-400" />
          </div>
        )}
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <ApperIcon name="ZoomIn" className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </Card>
  );
};

export default PhotoGalleryItem;