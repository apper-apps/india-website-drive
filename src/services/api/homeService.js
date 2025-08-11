import sliderData from "@/services/mockData/sliderImages.json";
import homePhotos from "@/services/mockData/homePhotos.json";
import statsData from "@/services/mockData/stats.json";

export const homeService = {
  getSliderImages: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return sliderData.map(slide => ({
      ...slide,
      ctaText: slide.ctaText || "Learn More"
    }));
  },

  getHomePhotos: async () => {
    await new Promise(resolve => setTimeout(resolve, 250));
    return homePhotos.slice(0, 6); // Show first 6 photos on home page
  },

  getStats: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return statsData;
  }
};