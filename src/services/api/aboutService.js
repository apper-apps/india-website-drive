import { toast } from 'react-toastify';

export const aboutService = {
  getAboutPhotos: async () => {
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
          limit: 20,
          offset: 0
        }
      };
      
      const response = await apperClient.fetchRecords('about_photo', params);
      
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
        console.error("Error fetching about photos:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  },

  getValues: async () => {
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
          { field: { Name: "title" } },
          { field: { Name: "description" } }
        ],
        pagingInfo: {
          limit: 20,
          offset: 0
        }
      };
      
      const response = await apperClient.fetchRecords('value', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return [];
      }
      
      return response.data.map(value => ({
        Id: value.Id,
        icon: value.icon,
        title: value.title,
        description: value.description
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching values:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  }
};