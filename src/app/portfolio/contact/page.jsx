"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Mail,
  User,
  Send,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await emailjs.send(
          "service_7d96cjr",
          "template_6jsy3vn",
          formData,
          "3g7fmoqhPZJraRgJ4"
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: "top-center",
          className: "bg-emerald-50 dark:bg-emerald-900",
        });
      } catch (error) {
        toast.error("Oops! Something went wrong. Please try again.", {
          position: "top-center",
        });
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-500 to-emerald-500 text-transparent bg-clip-text mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s create something
            extraordinary together.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Form Section */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  Send Me a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg pl-10 
                        border transition-colors duration-200
                        ${
                          errors.name
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-200 dark:border-gray-700 focus:border-lime-500 dark:focus:border-lime-500"
                        }
                        text-gray-800 dark:text-gray-200`}
                    />
                    <User className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg pl-10 
                        border transition-colors duration-200
                        ${
                          errors.email
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-200 dark:border-gray-700 focus:border-lime-500 dark:focus:border-lime-500"
                        }
                        text-gray-800 dark:text-gray-200`}
                    />
                    <Mail className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg pl-10 
                        border transition-colors duration-200
                        ${
                          errors.subject
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-200 dark:border-gray-700 focus:border-lime-500 dark:focus:border-lime-500"
                        }
                        text-gray-800 dark:text-gray-200`}
                    />
                    <MessageSquare className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  </div>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg 
                      border transition-colors duration-200
                      ${
                        errors.message
                          ? "border-red-500 dark:border-red-500"
                          : "border-gray-200 dark:border-gray-700 focus:border-lime-500 dark:focus:border-lime-500"
                      }
                      text-gray-800 dark:text-gray-200`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-lime-500 to-emerald-500 text-white rounded-lg 
                    hover:from-lime-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center space-x-2
                    disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="relative bg-gradient-to-br from-lime-500 to-emerald-500 p-8 lg:p-12 text-white">
              <div className="absolute top-0 right-0 p-6">
                <Sparkles className="w-8 h-8 text-white/20" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Let&apos;s Build Something Amazing Together!
                  </h2>
                  <p className="text-lime-50 mb-8 leading-relaxed">
                    Whether you have a groundbreaking idea, need technical
                    expertise, or just want to explore possibilities, I&apos;m
                    here to help turn your vision into reality. Let&apos;s
                    create innovative solutions that make a difference.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-lime-50 hover:text-white transition-colors group cursor-pointer">
                      <Mail className="w-6 h-6" />
                      <div>
                        <p className="font-medium">Email Me At</p>
                        <p className="group-hover:underline">
                          contact@yourdomain.com
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-sm text-lime-50">
                    Available for freelance opportunities, full-time positions,
                    and collaborative projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
