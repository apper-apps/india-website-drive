import { toast } from 'react-toastify';

export const organizationService = {
  getOrganizationStructure: async () => {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });
      
      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "title" } },
          { field: { Name: "level" } },
          { field: { Name: "expanded" } }
        ],
        pagingInfo: {
          limit: 50,
          offset: 0
        }
      };
      
      const response = await apperClient.fetchRecords('organization_structure', params);
      
      if (!response.success) {
        console.error(response.message);
        toast.error(response.message);
        return [];
      }
      
      return response.data.map(org => ({
        id: org.Id.toString(),
        title: org.title,
        level: org.level,
        expanded: org.expanded,
        children: []
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching organization structure:", error?.response?.data?.message);
      } else {
        console.error(error.message);
      }
      return [];
    }
  }
};