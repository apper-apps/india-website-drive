import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const TextArea = forwardRef(({ 
  className, 
  error,
  rows = 4,
  ...props 
}, ref) => {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500 resize-y",
        error && "border-error focus:border-error",
        className
      )}
      {...props}
    />
  );
});

TextArea.displayName = "TextArea";

export default TextArea;