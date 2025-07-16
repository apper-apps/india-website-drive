import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OrgChartNode from "@/components/molecules/OrgChartNode";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { organizationService } from "@/services/api/organizationService";

const OrganizationChart = () => {
  const [orgData, setOrgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadOrganizationData();
  }, []);

  const loadOrganizationData = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await organizationService.getOrganizationStructure();
      setOrgData(data);
    } catch (err) {
      setError("Failed to load organization structure. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleNode = (nodeId) => {
    const toggleNodeInTree = (nodes) => {
      return nodes.map(node => {
        if (node.id === nodeId) {
          return { ...node, expanded: !node.expanded };
        }
        if (node.children) {
          return { ...node, children: toggleNodeInTree(node.children) };
        }
        return node;
      });
    };

    setOrgData(toggleNodeInTree(orgData));
  };

  if (loading) {
    return <Loading type="chart" />;
  }

  if (error) {
    return <Error message={error} onRetry={loadOrganizationData} />;
  }

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Organization Structure</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team works together to create sustainable impact across communities in India.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-8 overflow-x-auto">
          <div className="min-w-[800px] flex justify-center">
            {orgData.map((rootNode) => (
              <OrgChartNode
                key={rootNode.id}
                node={rootNode}
                onToggle={toggleNode}
                level={0}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Click on the nodes to expand or collapse the organizational hierarchy
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizationChart;