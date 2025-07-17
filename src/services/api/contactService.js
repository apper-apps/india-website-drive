import { toast } from 'react-toastify';

export const contactService = {
  getContactPhotos: async () => {
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
      
      const response = await apperClient.fetchRecords('contact_photo', params);
      
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
        console.error("Error fetching contact photos:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  },

  getContactInfo: async () => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "organization_name" } },
          { field: { Name: "street" } },
          { field: { Name: "city" } },
          { field: { Name: "state" } },
          { field: { Name: "country" } },
          { field: { Name: "postal_code" } },
          { field: { Name: "primary_phone" } },
          { field: { Name: "secondary_phone" } },
          { field: { Name: "primary_email" } },
          { field: { Name: "secondary_email" } },
          { field: { Name: "monday_hours" } },
          { field: { Name: "tuesday_hours" } },
          { field: { Name: "wednesday_hours" } },
          { field: { Name: "thursday_hours" } },
          { field: { Name: "friday_hours" } },
          { field: { Name: "saturday_hours" } },
          { field: { Name: "sunday_hours" } }
        ],
        pagingInfo: {
          limit: 1,
          offset: 0
        }
      };
      
      const response = await apperClient.fetchRecords('contact_info', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return {};
      }
      
      if (response.data && response.data.length > 0) {
        const info = response.data[0];
        return {
          Id: info.Id,
          organizationName: info.organization_name,
          address: {
            street: info.street,
            city: info.city,
            state: info.state,
            country: info.country,
            postalCode: info.postal_code
          },
          phone: {
            primary: info.primary_phone,
            secondary: info.secondary_phone
          },
          email: {
            primary: info.primary_email,
            secondary: info.secondary_email
          },
          hours: {
            monday: info.monday_hours,
            tuesday: info.tuesday_hours,
            wednesday: info.wednesday_hours,
            thursday: info.thursday_hours,
            friday: info.friday_hours,
            saturday: info.saturday_hours,
            sunday: info.sunday_hours
          }
        };
      }
      
      return {};
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching contact info:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return {};
    }
  },

  submitMessage: async (messageData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return {
        success: true,
        message: "Message sent successfully",
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error submitting message:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return {
        success: false,
        message: "Failed to send message"
      };
    }
  }
};