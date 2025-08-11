import aboutPhotos from "@/services/mockData/aboutPhotos.json";
import valuesData from "@/services/mockData/values.json";

export const aboutService = {
  getAboutPhotos: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return aboutPhotos;
  },

  getValues: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return valuesData;
  }
};