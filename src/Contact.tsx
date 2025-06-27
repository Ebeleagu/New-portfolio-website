import React, { useState, ChangeEvent, FormEvent } from "react";
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

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

      alert(" Message sent!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className=" p-10 w-full font-mono text-white h-[100vh]">
      <h1 className="text-4xl text-center font-bold mb-6">Contact Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <div
          className="flex sm:flex-row flex-col justify-center md:space-x-5 mb-8 sm:max-w-2xl
         w-[100%]  sm:gap-3 gap-6"
        >
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            aria-label="First Name"
            className="border-b border-gray-400 outline-none p-2 flex-grow placeholder-gray-500 hover:border-blue-500 focus:border-black transition duration-200 w-[100%] sm:w-[50%]"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            aria-label="Last Name"
            className="border-b border-gray-400 outline-none p-2 flex-grow placeholder-gray-500 hover:border-blue-500 focus:border-black transition duration-200 w-full sm:w-[50%]"
            required
          />
        </div>
        <div className="flex flex-col mb-8 w-full max-w-2xl">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            aria-label="Email Address"
            className="border-b border-gray-400 outline-none p-2 mb-8 placeholder-gray-500 hover:border-blue-500 focus:border-black transition duration-200 w-full"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of Message"
            aria-label="Subject"
            className="border-b border-gray-400 outline-none p-2 mb-8 placeholder-gray-500 hover:border-blue-500 focus:border-black transition duration-200 w-full"
            required
          />
          <div className="mt-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              aria-label="Message"
              className="border-b border-gray-400 outline-none p-2 flex-grow placeholder-gray-500 hover:border-blue-500 focus:border-black transition duration-200 h-[25vh] w-full"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 p-3 rounded-full text-white transition-transform transform hover:scale-105 active:scale-95 w-full max-w-xs disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </main>
  );
};

export default Contact;
