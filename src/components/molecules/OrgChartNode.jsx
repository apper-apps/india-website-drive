import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const OrgChartNode = ({ node, onToggle, level = 0 }) => {
  const hasChildren = node.children && node.children.length > 0;
  
  const getLevelStyles = (level) => {
    const styles = {
      0: "bg-gradient-to-r from-primary to-secondary text-white shadow-lg",
      1: "bg-gradient-to-r from-secondary to-primary text-white shadow-md",
      2: "bg-white border-2 border-primary text-primary shadow-sm",
      3: "bg-gray-50 border border-gray-300 text-gray-700"
    };
    return styles[level] || styles[3];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div className={`
          px-6 py-4 rounded-lg font-medium text-center min-w-[200px] transition-all duration-200 transform hover:scale-105
          ${getLevelStyles(level)}
        `}>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm md:text-base">{node.title}</span>
            {hasChildren && (
              <Button
                onClick={() => onToggle(node.id)}
                className="p-1 bg-transparent hover:bg-white/20 text-current border-0 shadow-none transform-none hover:scale-100"
              >
                <ApperIcon 
                  name={node.expanded ? "ChevronUp" : "ChevronDown"} 
                  className="w-4 h-4"
                />
              </Button>
            )}
          </div>
        </div>
        
        {/* Connector line */}
        {hasChildren && node.expanded && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gray-400" />
        )}
      </div>

      {/* Children */}
      {hasChildren && node.expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 flex flex-col items-center"
        >
          {/* Horizontal line for multiple children */}
          {node.children.length > 1 && (
            <div className="w-full max-w-[600px] h-0.5 bg-gray-400 mb-6 relative">
              {node.children.map((_, index) => (
                <div
                  key={index}
                  className="absolute top-0 w-0.5 h-6 bg-gray-400"
                  style={{
                    left: `${((index + 1) / (node.children.length + 1)) * 100}%`,
                    transform: "translateX(-50%)"
                  }}
                />
              ))}
            </div>
          )}
          
          <div className="flex flex-wrap justify-center gap-8">
            {node.children.map((child) => (
              <OrgChartNode
                key={child.id}
                node={child}
                onToggle={onToggle}
                level={level + 1}
              />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default OrgChartNode;