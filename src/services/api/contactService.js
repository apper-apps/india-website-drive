import contactPhotos from "@/services/mockData/contactPhotos.json";
import contactInfo from "@/services/mockData/contactInfo.json";

export const contactService = {
  getContactPhotos: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return contactPhotos;
  },

  getContactInfo: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return contactInfo;
  },

  submitMessage: async (messageData) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Simulate successful submission
    return {
      success: true,
      message: "Message sent successfully",
      timestamp: new Date().toISOString()
    };
  }
};