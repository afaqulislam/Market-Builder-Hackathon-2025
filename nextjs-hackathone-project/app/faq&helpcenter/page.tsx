"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I reset my password?",
    answer:
      "To reset your password, go to the login page, click &quot;Forgot Password,&quot; and follow the instructions sent to your email.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact support by using the form below or sending an email to support@example.com.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes, you can cancel your subscription anytime from your account settings.",
  },
];

export default function FAQHelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 mt-16 min-h-screen p-6 sm:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">
          FAQ & Help Center
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Find answers to common questions or contact our support team.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mb-8">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-600 text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-4 top-3 w-6 h-6 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* FAQ Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-200">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="py-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
                    />
                  </div>
                  {expandedIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-600 mt-2"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No results found for "{searchQuery}".
              </p>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contact Support
          </h2>
          <p className="text-gray-600 mb-6">
            Need further help? Fill out the form below, and we’ll get back to
            you as soon as possible.
          </p>
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          ) : (
            <p className="text-green-600 font-medium text-center">
              Thank you! Your message has been sent.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
