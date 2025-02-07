"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
  FaPlus,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

type TransactionStatus = "Completed" | "Pending" | "Failed";

interface Transaction {
  id: number;
  amount: string;
  date: string;
  status: TransactionStatus;
  description: string;
  category: string;
}

export default function ReimbursePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<TransactionStatus | "All">(
    "All"
  );

  const transactions: Transaction[] = [
    {
      id: 1,
      amount: "$150.00",
      date: "2024-03-15",
      status: "Completed",
      description: "Team lunch meeting",
      category: "Meals",
    },
    {
      id: 2,
      amount: "$200.50",
      date: "2024-03-14",
      status: "Pending",
      description: "Office supplies",
      category: "Supplies",
    },
    {
      id: 3,
      amount: "$75.25",
      date: "2024-03-13",
      status: "Failed",
      description: "Taxi fare",
      category: "Transportation",
    },
    {
      id: 4,
      amount: "$350.00",
      date: "2024-03-12",
      status: "Completed",
      description: "Conference registration",
      category: "Events",
    },
    {
      id: 5,
      amount: "$80.75",
      date: "2024-03-15",
      status: "Pending",
      description: "Client dinner",
      category: "Meals",
    },
  ];

  const getStatusIcon = (status: TransactionStatus) => {
    switch (status) {
      case "Completed":
        return <FaCheckCircle className="text-green-500" />;
      case "Pending":
        return <FaExclamationCircle className="text-yellow-500" />;
      case "Failed":
        return <FaTimesCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  const filteredTransactions = transactions.filter(
    (transaction) =>
      (filterStatus === "All" || transaction.status === filterStatus) &&
      (transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        transaction.amount.includes(searchTerm) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen mt-16 bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-blue-700">
            Reimbursement Management
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search transactions..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filterStatus}
                onChange={(e) =>
                  setFilterStatus(e.target.value as TransactionStatus | "All")
                }
              >
                <option value="All">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-600 font-semibold">Total Reimbursed</p>
              <p className="text-3xl font-bold text-blue-700">$500.00</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-600 font-semibold">Pending</p>
              <p className="text-3xl font-bold text-yellow-700">$281.25</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-600 font-semibold">Rejected</p>
              <p className="text-3xl font-bold text-red-700">$75.25</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <AnimatePresence>
            {filteredTransactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-full">
                      {getStatusIcon(transaction.status)}
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-gray-800">
                        {transaction.amount}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-700">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {transaction.category}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      transaction.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : transaction.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Floating Action Button (FAB) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
        onClick={() => setIsModalOpen(true)}
      >
        <FaPlus className="text-2xl" />
      </motion.button>

      {/* New Reimbursement Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
            >
              <h2 className="text-2xl font-bold mb-4">
                New Reimbursement Request
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="$0.00"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Enter description"
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  >
                    <option>Meals</option>
                    <option>Transportation</option>
                    <option>Supplies</option>
                    <option>Events</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
