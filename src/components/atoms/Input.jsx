import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Input = forwardRef(({ 
  className, 
  type = "text", 
  error,
  ...props 
}, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500",
        error && "border-error focus:border-error",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;