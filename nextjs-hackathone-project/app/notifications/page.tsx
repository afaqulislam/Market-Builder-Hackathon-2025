"use client";

import { useState } from "react";
import { Bell, CheckCircle, Trash2, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Special Discount",
      text: "Nissan GT-R is on discount for rent: $80.00/day (actual price $100)",
      isRead: false,
      type: "discount",
    },
    {
      id: 2,
      title: "New Offer",
      text: "Rent a luxury car and get a free upgrade!",
      isRead: false,
      type: "offer",
    },
    {
      id: 3,
      title: "Limited Time Deal",
      text: "SUV rentals starting at $50/day!",
      isRead: false,
      type: "deal",
    },
  ]);

  const handleMarkAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleDelete = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  const handleDeleteAll = () => {
    setNotifications([]);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "discount":
        return "bg-blue-100 text-blue-800";
      case "offer":
        return "bg-blue-200 text-blue-900";
      case "deal":
        return "bg-blue-300 text-blue-950";
      default:
        return "bg-blue-50 text-blue-700";
    }
  };

  return (
    <div className="min-h-screen mt-16 bg-blue-50 p-4 md:p-8">
      <Card className="max-w-4xl mx-auto border-blue-200 shadow-lg shadow-blue-100">
        <CardHeader className="bg-blue-500 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold flex items-center">
              <Bell className="mr-2" /> Your Notifications
            </CardTitle>
            <CardDescription className="text-blue-100">
              {notifications.length} unread notification
              {notifications.length !== 1 && "s"}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="bg-white">
          <AnimatePresence>
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`mb-4 ${notification.isRead ? "bg-blue-50" : "bg-white"} border-blue-200`}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg mb-1 text-blue-800">
                          {notification.title}
                        </h3>
                        <p className="text-blue-600">{notification.text}</p>
                        <Badge
                          className={`mt-2 ${getTypeColor(notification.type)}`}
                        >
                          {notification.type}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleMarkAsRead(notification.id)}
                          disabled={notification.isRead}
                          className="border-blue-300 hover:bg-blue-100"
                        >
                          <CheckCircle
                            className={
                              notification.isRead
                                ? "text-blue-500"
                                : "text-blue-300"
                            }
                          />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDelete(notification.id)}
                          className="border-blue-300 hover:bg-blue-100"
                        >
                          <Trash2 className="text-blue-500" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {notifications.length === 0 && (
            <div className="text-center py-8">
              <X className="mx-auto text-blue-400 mb-4" size={48} />
              <p className="text-blue-500 text-lg">
                No notifications available.
              </p>
            </div>
          )}

          {notifications.length > 0 && (
            <div className="flex justify-end space-x-4 mt-6">
              <Button
                variant="outline"
                onClick={handleMarkAllAsRead}
                className="border-blue-500 text-blue-500 hover:bg-blue-50"
              >
                Mark All as Read
              </Button>
              <Button
                variant="destructive"
                onClick={handleDeleteAll}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Delete All
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
