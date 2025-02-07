"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiStar, FiSearch, FiEdit, FiArchive, FiX } from "react-icons/fi";

interface Message {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  unread: boolean;
  starred: boolean;
  timestamp: string;
}

export default function InboxPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Customer Support",
      subject: "Rental Confirmation",
      preview: "Your rental confirmation is ready! 🚗",
      unread: true,
      starred: false,
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "Payment System",
      subject: "Invoice Generated",
      preview: "Invoice #1234 has been generated. 💳",
      unread: false,
      starred: true,
      timestamp: "Yesterday",
    },
    {
      id: 3,
      sender: "Car Maintenance",
      subject: "Service Reminder",
      preview: "Your car service is scheduled for next week. 🛠️",
      unread: true,
      starred: false,
      timestamp: "2 days ago",
    },
    {
      id: 4,
      sender: "Travel Updates",
      subject: "New Travel Deals",
      preview: "New travel deals are available! ✈️",
      unread: false,
      starred: false,
      timestamp: "3 days ago",
    },
    {
      id: 5,
      sender: "Feedback Team",
      subject: "We Value Your Opinion",
      preview: "We'd love to hear your feedback! 🌟",
      unread: true,
      starred: true,
      timestamp: "1 week ago",
    },
  ]);

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.preview.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === "unread") return matchesSearch && message.unread;
    if (filter === "starred") return matchesSearch && message.starred;
    return matchesSearch;
  });

  const toggleStar = (id: number) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, starred: !msg.starred } : msg
      )
    );
  };

  const markAsRead = (id: number) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, unread: false } : msg))
    );
  };

  return (
    <div className="min-h-screen mt-16 bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-700">Inbox</h1>
          <div className="flex space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="unread">Unread</option>
              <option value="starred">Starred</option>
            </select>
          </div>
        </div>

        {/* Message List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <AnimatePresence>
            {filteredMessages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer transition-colors duration-150 ${
                  message.unread ? "bg-blue-50" : ""
                }`}
                onClick={() => {
                  setSelectedMessage(message);
                  markAsRead(message.id);
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStar(message.id);
                      }}
                    >
                      <FiStar
                        className={`${message.starred ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                      />
                    </motion.button>
                    <div>
                      <p
                        className={`font-semibold ${message.unread ? "text-gray-900" : "text-gray-700"}`}
                      >
                        {message.sender}
                      </p>
                      <p
                        className={`text-sm ${message.unread ? "font-semibold text-gray-800" : "text-gray-600"}`}
                      >
                        {message.subject}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">
                      {message.timestamp}
                    </span>
                    {message.unread && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-600 truncate">
                  {message.preview}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Message Detail Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  {selectedMessage.subject}
                </h2>
                <button onClick={() => setSelectedMessage(null)}>
                  <FiX className="text-gray-500 hover:text-gray-700" />
                </button>
              </div>
              <p className="text-gray-600 mb-2">
                From: {selectedMessage.sender}
              </p>
              <p className="text-gray-500 mb-4">{selectedMessage.timestamp}</p>
              <p className="text-gray-800">{selectedMessage.preview}</p>
              <div className="mt-6 flex justify-end space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  Reply
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
                  Forward
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FiEdit className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        >
          <FiArchive className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
