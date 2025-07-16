import { motion } from "framer-motion";

const Loading = ({ type = "default" }) => {
  if (type === "hero") {
    return (
      <div className="relative h-[500px] bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="animate-skeleton h-16 w-64 bg-white/20 rounded-lg" />
        </div>
      </div>
    );
  }

  if (type === "gallery") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-skeleton h-64 bg-gray-200 rounded-lg" />
        ))}
      </div>
    );
  }

  if (type === "chart") {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="animate-skeleton h-8 w-48 bg-gray-200 rounded mb-6" />
        <div className="space-y-4">
          <div className="animate-skeleton h-12 w-full bg-gray-200 rounded" />
          <div className="ml-8 space-y-2">
            <div className="animate-skeleton h-10 w-3/4 bg-gray-200 rounded" />
            <div className="animate-skeleton h-10 w-1/2 bg-gray-200 rounded" />
          </div>
          <div className="ml-16 space-y-2">
            <div className="animate-skeleton h-8 w-2/3 bg-gray-200 rounded" />
            <div className="animate-skeleton h-8 w-1/2 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loading;