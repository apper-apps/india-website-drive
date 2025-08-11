import orgData from "@/services/mockData/organizationStructure.json";

export const organizationService = {
  getOrganizationStructure: async () => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return orgData;
  }
};