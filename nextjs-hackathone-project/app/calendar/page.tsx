"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiCalendar, FiClock, FiMapPin, FiPlus, FiX } from "react-icons/fi";

const localizer = momentLocalizer(moment);

interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
  location?: string;
}

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Car Service Appointment",
      start: new Date(2024, 2, 20, 10, 0),
      end: new Date(2024, 2, 20, 11, 0),
      location: "Auto Service Center",
    },
    {
      id: 2,
      title: "Client Meeting",
      start: new Date(2024, 2, 22, 14, 30),
      end: new Date(2024, 2, 22, 15, 30),
      location: "Conference Room A",
    },
    {
      id: 3,
      title: "Rental Pickup",
      start: new Date(2024, 2, 25, 9, 0),
      end: new Date(2024, 2, 25, 10, 0),
      location: "Rental Office",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const chartData = [
    { name: "Jan", rentals: 12 },
    { name: "Feb", rentals: 18 },
    { name: "Mar", rentals: 15 },
    { name: "Apr", rentals: 22 },
    { name: "May", rentals: 20 },
    { name: "Jun", rentals: 25 },
  ];

  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const eventStyleGetter = (event: Event) => {
    const style = {
      backgroundColor: "#3b82f6",
      borderRadius: "5px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

  return (
    <div className="min-h-screen mt-16 bg-gray-50 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
          Rental Calendar
        </h1>
        <p className="text-lg text-center text-gray-600">
          Manage your rentals and appointments in one place.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6"
        >
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            views={[Views.MONTH, Views.WEEK, Views.DAY]}
            className="rounded-lg"
            onSelectEvent={handleSelectEvent}
            eventPropGetter={eventStyleGetter}
          />
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {events.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => handleSelectEvent(event)}
                >
                  <h3 className="font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-sm text-gray-600">
                    {moment(event.start).format("MMMM D, YYYY h:mm A")}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Monthly Rentals
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="rentals" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedEvent.title}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX size={24} />
                </button>
              </div>
              <div className="space-y-3">
                <p className="flex items-center text-gray-600">
                  <FiCalendar className="mr-2" />
                  {moment(selectedEvent.start).format("MMMM D, YYYY")}
                </p>
                <p className="flex items-center text-gray-600">
                  <FiClock className="mr-2" />
                  {moment(selectedEvent.start).format("h:mm A")} -{" "}
                  {moment(selectedEvent.end).format("h:mm A")}
                </p>
                {selectedEvent.location && (
                  <p className="flex items-center text-gray-600">
                    <FiMapPin className="mr-2" />
                    {selectedEvent.location}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
      >
        <FiPlus size={24} />
      </motion.button>
    </div>
  );
}
