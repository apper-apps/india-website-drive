import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

{/* Logo */ }
<div className="flex items-center">
  <Link to="/" className="flex items-center space-x-3">
    <img
      src="https://content.jdmagicbox.com/v2/comp/delhi/k4/011pxx11.xx11.160322121532.x7k4/catalogue/techlopers-solutions-pvt-ltd-laxmi-nagar-delhi-logo-designers-ucan4jlj72.jpg"
      alt="Techlopers Solutions"
      className="h-12 w-auto"
    />
    
  </Link>
</div>

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