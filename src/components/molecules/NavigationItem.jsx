import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

const NavigationItem = ({ to, children, onClick, className }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary",
          isActive && "bg-primary/10 text-primary",
          className
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default NavigationItem;