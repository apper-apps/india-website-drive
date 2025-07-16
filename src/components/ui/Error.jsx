import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <ApperIcon name="AlertCircle" className="w-8 h-8 text-error" />
        </motion.div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Oops! Something went wrong</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        
        {onRetry && (
          <Button
            onClick={onRetry}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <ApperIcon name="RefreshCw" className="w-4 h-4" />
            Try Again
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Error;