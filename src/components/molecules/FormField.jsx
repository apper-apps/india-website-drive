import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/TextArea";
import { cn } from "@/utils/cn";

const FormField = ({ 
  label, 
  type = "text", 
  required, 
  error, 
  multiline,
  className,
  ...props 
}) => {
  const InputComponent = multiline ? TextArea : Input;
  
  return (
    <div className={cn("space-y-2", className)}>
      <Label required={required}>{label}</Label>
      <InputComponent
        type={type}
        error={error}
        {...props}
      />
      {error && (
        <p className="text-error text-sm animate-slide-down">{error}</p>
      )}
    </div>
  );
};

export default FormField;