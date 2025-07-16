import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  children, 
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg",
    secondary: "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white",
    accent: "bg-gradient-to-r from-accent to-orange-500 hover:from-accent/90 hover:to-orange-500/90 text-white shadow-lg",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary bg-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      ref={ref}
      className={cn(
        "font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;