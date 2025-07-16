import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ 
  title = "No data available", 
  message = "There's nothing to display at the moment.", 
  actionLabel = "Learn More",
  onAction,
  icon = "FolderOpen"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <ApperIcon name={icon} className="w-10 h-10 text-primary" />
        </motion.div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        
        {onAction && (
          <Button
            onClick={onAction}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Empty;