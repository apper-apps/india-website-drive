import { toast } from 'react-toastify';

export const homeService = {
  getSliderImages: async () => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "image" } },
          { field: { Name: "title" } },
          { field: { Name: "subtitle" } },
          { field: { Name: "cta_text" } }
        ],
        pagingInfo: {
          limit: 10,
          offset: 0
        }
      };
      
      const response = await apperClient.fetchRecords('slider_image', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return [];
      }
      
      return response.data.map(slide => ({
        Id: slide.Id,
        image: slide.image,
        title: slide.title,
        subtitle: slide.subtitle,
        ctaText: slide.cta_text || "Learn More"
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching slider images:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  },

  getHomePhotos: async () => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "image" } },
          { field: { Name: "title" } },
          { field: { Name: "description" } }
        ],
        pagingInfo: {
          limit: 6,
          offset: 0
        }
      };
      
      const response = await apperClient.fetchRecords('home_photo', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return [];
      }
      
      return response.data.map(photo => ({
        Id: photo.Id,
        image: photo.image,
        title: photo.title,
        description: photo.description
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching home photos:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  },

  getStats: async () => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "icon" } },
          { field: { Name: "value" } },
          { field: { Name: "label" } },
          { field: { Name: "description" } }
        ],
        pagingInfo: {
          limit: 20,
          offset: 0
        }
      };
      
      const response = await apperClient.fetchRecords('stat', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return [];
      }
      
      return response.data.map(stat => ({
        Id: stat.Id,
        icon: stat.icon,
        value: stat.value,
        label: stat.label,
        description: stat.description
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching stats:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  }
};