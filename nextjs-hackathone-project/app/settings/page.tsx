"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, Bell, Palette, LogOut, Save } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully.",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen mt-16 bg-blue-50 p-4 md:p-8">
      <Card className="max-w-4xl mx-auto border-blue-200">
        <CardHeader className="bg-blue-500 text-white rounded-t-lg">
          <CardTitle className="text-3xl font-bold">Settings</CardTitle>
          <CardDescription className="text-blue-100">
            Manage your account settings and preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-blue-100">
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="preferences"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Preferences
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <SettingsSection icon={User} title="Profile Settings">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        defaultValue="John Doe"
                        className="border-blue-200 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="johndoe@example.com"
                        className="border-blue-200 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      defaultValue="+1 234 567 890"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>
              </SettingsSection>
            </TabsContent>
            <TabsContent value="security">
              <SettingsSection icon={Lock} title="Account Security">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Enter new password"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm new password"
                      className="border-blue-200 focus:border-blue-500"
                    />
                  </div>
                </div>
              </SettingsSection>
            </TabsContent>
            <TabsContent value="preferences">
              <SettingsSection icon={Palette} title="Preferences">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger className="w-[180px] border-blue-200 focus:border-blue-500">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="theme">Dark Mode</Label>
                    <Switch
                      id="theme"
                      className="bg-gray-300 data-[state=checked]:bg-blue-600"
                    />
                  </div>
                </div>
              </SettingsSection>
            </TabsContent>
            <TabsContent value="notifications">
              <SettingsSection icon={Bell} title="Notifications">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="emailNotifications">
                      Email Notifications
                    </Label>
                    <Switch
                      id="emailNotifications"
                      defaultChecked
                      className="bg-gray-300 data-[state=checked]:bg-blue-600"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="pushNotifications">
                      Push Notifications
                    </Label>
                    <Switch
                      id="pushNotifications"
                      defaultChecked
                      className="bg-gray-300 data-[state=checked]:bg-blue-600"
                    />
                  </div>
                </div>
              </SettingsSection>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            <LogOut className="mr-2 h-4 w-4" /> Log Out
          </Button>
          <Button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";

function SettingsSection({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-blue-200">
        <CardHeader className="bg-blue-100">
          <CardTitle className="text-2xl font-semibold flex items-center text-blue-700">
            <Icon className="mr-2" /> {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">{children}</CardContent>
      </Card>
    </motion.div>
  );
}
