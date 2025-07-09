import React, { useState } from "react";
import emailjs from "emailjs-com";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes without explicit event typing
  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission without explicit event typing
  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_e85hkrr",
        "template_08vm5qi",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "P5732EPqqQJCK1TEl"
      );
      setSuccessMessage("Your message has been sent successfully!");
      setErrorMessage("");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage(
        "There was an error sending your message. Please try again."
      );
      setSuccessMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className="p-10 w-full font-mono text-white md:h-[100vh]"
      id="Contact"
    >
      <h1 className="text-4xl text-center font-bold mb-6">Contact Form</h1>

      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        {/* Name Inputs */}
        <div className="flex sm:flex-row flex-col justify-center md:space-x-5 mb-8 sm:max-w-2xl w-full gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            aria-label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border-b border-gray-400 outline-none p-2 flex-grow placeholder-gray-500 hover:border-blue-500 focus:border-black transition duration-200 w-full sm:w-[50%]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            aria-label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border-b border-gray-400 outline-none p-2 flex-grow placeholder-gray-500 hover:border-blue-500 focus:border-black transition duration-200 w-full sm:w-[50%]"
          />
        </div>

        {/* Email & Subject */}
        <div className="flex flex-col mb-8 w-full max-w-2xl">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            aria-label="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-b border-gray-400 outline-none p-2 mb-8 placeholder-gray-500 hover:border-blue-500 focus:border-black transition duration-200 w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject of Message"
            aria-label="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border-b border-gray-400 outline-none p-2 mb-8 placeholder-gray-500 hover:border-blue-500 focus:border-black transition duration-200 w-full"
          />

          {/* Message Textarea */}
          <div className="mt-6">
            <textarea
              name="message"
              placeholder="Type your message here..."
              aria-label="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-b border-gray-400 outline-none p-2 h-[25vh] w-full placeholder-gray-500 hover:border-blue-500 focus:border-black transition duration-200 resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 p-3 rounded-full text-white transition-transform transform hover:scale-105 active:scale-95 w-full max-w-xs disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </main>
  );
};

export default Contact;
