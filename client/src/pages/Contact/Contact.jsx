import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Paperclip } from "lucide-react";
import { formFields } from "../../constants";

const Contact = () => {
  const location = useLocation();
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      propertyType: "",
      vibeAimingFor: "",
    },
    mode: "onBlur",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const onSubmit = async (values) => {
    console.log("Form values:", values);
    console.log("Attached file:", selectedFile);

    alert("Message submitted! (Check console for data)");
    form.reset();
    setSelectedFile(null);
  };

  return (
    <section
      className={`bg-gray-100 text-gray-900 py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center ${
        location.pathname !== "/" ? "pt-32" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <div className="md:flex md:items-start md:space-x-12">
          {/* Left Section: Headline & Description */}
          <div className="md:w-5/12 mb-12 md:mb-0">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg leading-tight animate-fade-in-down delay-100">
              Start With a Mood.
            </h2>
            {/* New Description */}
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-down delay-200">
              Tell us about your vision for your property's marketing. Whether
              it's a luxurious penthouse, a sprawling villa, or an innovative
              development, we're here to translate your aspirations into
              captivating visuals and compelling narratives. Share your desired
              aesthetic, the emotions you want to evoke, and any specific
              details that make your project unique. Let's create something
              extraordinary together.
            </p>
          </div>
          {/* Right Section: Contact Form */}
          <div className="md:w-7/12">
            <div className="bg-white p-16 rounded-xl shadow-lg border border-gray-200 animate-fade-in-up delay-300">
              {/* Pass the form instance to the Form component */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {formFields.map((field) => {
                    const IconComponent = field.icon;

                    return (
                      <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name}
                        rules={field.rules}
                        render={({ field: formField }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold mb-1 flex items-center gap-2">
                              {IconComponent && (
                                <IconComponent className="size-4 text-blue-600" />
                              )}
                              <span>
                                {field.label}
                                <span className="text-red-500 ml-1">
                                  {field.rules?.required && "*"}
                                </span>
                              </span>
                            </FormLabel>
                            <FormControl>
                              {field.component === "input" ? (
                                <Input
                                  type={field.type}
                                  placeholder={field.placeholder}
                                  {...formField}
                                  className=""
                                />
                              ) : (
                                <Textarea
                                  placeholder={field.placeholder}
                                  rows={field.rows || 3}
                                  {...formField}
                                  className=""
                                />
                              )}
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                  })}

                  {/* Optional File Attachment */}
                  <div>
                    <Label
                      htmlFor="fileAttachment"
                      className="text-base font-semibold mb-3 flex items-center gap-2"
                    >
                      <Paperclip className="size-4 text-blue-600" />
                      <span>
                        Attach a file or reference images
                        <span className="text-sm text-gray-700 ml-1">
                          (Optional)
                        </span>
                      </span>
                    </Label>
                    <Input
                      type="file"
                      id="fileAttachment"
                      name="fileAttachment"
                      onChange={handleFileChange}
                      className="file:mr-3 file:px-3 file:rounded-full file:text-sm file:font-semibold file:bg-blue-500 cursor-pointer file:cursor-pointer file:text-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full text-base font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
