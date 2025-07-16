import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Card = forwardRef(({ 
  className, 
  variant = "default",
  children,
  ...props 
}, ref) => {
  const variants = {
    default: "bg-white shadow-md hover:shadow-lg",
    elevated: "bg-white shadow-lg hover:shadow-xl",
    gradient: "bg-gradient-to-br from-primary/5 to-secondary/5 shadow-md hover:shadow-lg"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg transition-all duration-300 transform hover:scale-[1.02]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;