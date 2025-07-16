import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import FormField from "@/components/molecules/FormField";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { contactService } from "@/services/api/contactService";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await contactService.submitMessage(formData);
      
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setErrors({});
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
            placeholder="Enter your full name"
          />
          <FormField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
            placeholder="Enter your email address"
          />
        </div>

        <FormField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          required
          placeholder="What is this regarding?"
        />

        <FormField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
          multiline
          rows={6}
          placeholder="Tell us more about your inquiry..."
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <ApperIcon name="Loader2" className="w-5 h-5" />
              </motion.div>
              Sending...
            </>
          ) : (
            <>
              <ApperIcon name="Send" className="w-5 h-5" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;