import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleQuestionMark } from "lucide-react";
import { useLocation } from "react-router-dom";

// Import the form fields array
import { requestAccessFormFields } from "@/constants";

const RequestAccessPage = () => {
  const location = useLocation();

  // Initialize formData state from the requestAccessFormFields array
  const initialFormData = requestAccessFormFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Membership Inquiry Form Submitted:", formData);
    // Here you would typically send formData to your backend/API
    alert(
      "Thank you for your inquiry! A member of our team will be in touch shortly."
    );
    // Reset form after submission
    setFormData(initialFormData);
  };

  return (
    <div
      className={`bg-gray-50 text-gray-900 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center ${
        location.pathname !== "/" ? "pt-32" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 animate-fade-in-down">
          Find Out If Membership is Right For You
        </h1>

        {/* Introductory Text */}
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 animate-fade-in-up delay-100">
          Submit the form and a member of our team will be in touch to answer
          your questions and learn more about you.
        </p>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 animate-fade-in-up delay-200">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-left max-w-2xl mx-auto"
          >
            {requestAccessFormFields.map((field) => {
              return (
                <div key={field.name}>
                  {/* Label with dynamic icon */}
                  <Label
                    htmlFor={field.name}
                    className="text-base text-gray-800 font-semibold mb-2 flex items-center"
                  >
                    {field.icon && (
                      <field.icon className="size-4 text-blue-600" />
                    )}
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                    {/* Add asterisk for required fields */}
                  </Label>
                  {/* Render different input types */}
                  {field.type === "text" ||
                  field.type === "email" ||
                  field.type === "tel" ? (
                    <Input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className=""
                    />
                  ) : field.type === "textarea" ? (
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows="4"
                      required={field.required}
                      className=""
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="mt-1 p-3 border border-gray-300 rounded-md w-full bg-white focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">{field.placeholder}</option>{" "}
                      {/* Use placeholder as default option */}
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "radio" ? (
                    <div className="mt-2 space-y-3">
                      {field.options?.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            id={`${field.name}-${option.value}`} // Unique ID for radio options
                            name={field.name}
                            value={option.value}
                            checked={formData[field.name] === option.value}
                            onChange={handleChange}
                            required={field.required}
                            className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <label
                            htmlFor={`${field.name}-${option.value}`}
                            className="ml-3 text-base text-gray-700"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  ) : null}{" "}
                  {/* Fallback for unknown types */}
                </div>
              );
            })}

            {/* Consent Text (Static) */}
            <p className="text-sm text-gray-600 leading-relaxed pt-4">
              By submitting this form, you consent to receive marketing emails
              from 8MOSPHERE relating to content and events that may be of
              interest to you. You may unsubscribe at any time by following the
              instructions listed in any marketing email you receive from
              8MOSPHERE.
            </p>

            {/* Membership Criteria Text (Static, not from formFields array) */}
            <Popover>
              <PopoverTrigger className="flex gap-2 items-center">
                8MOSPHERE Membership Criteria{" "}
                <span>
                  <CircleQuestionMark className="size-5" />
                </span>
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To become a member of 8MOSPHERE, you must meet the following
                  criteria:
                </p>
                <ul className="list-disc list-inside text-sm pl-4">
                  <li>Be at least 18 years old.</li>
                  <li>Have a valid email address.</li>
                  <li>Agree to the terms and conditions.</li>
                </ul>
              </PopoverContent>
            </Popover>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full"
            >
              Submit Inquiry Form
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestAccessPage;
