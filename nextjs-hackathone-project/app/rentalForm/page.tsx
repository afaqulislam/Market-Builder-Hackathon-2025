"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CarDetails, RentalFormData } from "./rental";
import Image from "next/image";
import Link from "next/link"

const defaultCar: CarDetails = {
    id: "gt-r",
    name: "Nissan GT-R",
    image: "/preview-1.png",
    price: 80.00,
    rating: 4.5,
    reviews: 440
};

export default function RentalForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<Partial<RentalFormData>>({});
    const car = defaultCar;

    return (
        <div className="mx-auto mt-10  max-w-[1700px] px-4 py-8">
            <div className="flex flex-col lg:flex-row lg:gap-10">
                {/* Left Column - Form */}
                <div className="flex-1 space-y-6">
                    {/* Billing Info Section */}
                    <Card className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Billing Info</h2>
                            <p className="text-sm text-muted-foreground">Step 1 of 4</p>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">
                            Please enter your billing info
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" placeholder="Phone number" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" placeholder="Address" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="city">Town / City</Label>
                                <Input id="city" placeholder="Town or city" />
                            </div>
                        </div>
                    </Card>

                    {/* Rental Info Section */}
                    <Card className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Rental Info</h2>
                            <p className="text-sm text-muted-foreground">Step 2 of 4</p>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">
                            Please select your rental date
                        </p>
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="pickup"
                                        name="booking-type"
                                        defaultChecked
                                        className="w-4 h-4 accent-blue-600"
                                    />
                                    <label
                                        htmlFor="pickup"
                                        className="sm:text-lg font-bold text-black"
                                    >
                                        Pick-Up
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="pickup-location">Location</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your city" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ny">New York</SelectItem>
                                                <SelectItem value="la">Los Angeles</SelectItem>
                                                <SelectItem value="ch">Chicago</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="pickup-date">Date</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your date" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="today">Today</SelectItem>
                                                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="pickup-time">Time</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your time" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="9">9:00 AM</SelectItem>
                                                <SelectItem value="10">10:00 AM</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="dropoff"
                                        name="booking-type"
                                        className="w-4 h-4 accent-blue-600"
                                    />
                                    <label
                                        htmlFor="dropoff"
                                        className="sm:text-lg font-bold text-black"
                                    >
                                        Drop-Off
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="dropoff-location">Location</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your city" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ny">New York</SelectItem>
                                                <SelectItem value="la">Los Angeles</SelectItem>
                                                <SelectItem value="ch">Chicago</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="dropoff-date">Date</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your date" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="today">Today</SelectItem>
                                                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="dropoff-time">Time</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select your time" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="9">9:00 AM</SelectItem>
                                                <SelectItem value="10">10:00 AM</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Payment Method Section */}
                    <Card className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Payment Method</h2>
                            <p className="text-sm text-muted-foreground">Step 3 of 4</p>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">
                            Please enter your payment method
                        </p>
                        <RadioGroup defaultValue="credit-card" className="space-y-4">
                            <div className="flex items-center justify-between space-x-2 bg-muted p-4 rounded-lg">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="creditCart"
                                        name="booking-type"
                                        defaultChecked
                                        className="w-4 h-4 accent-blue-600"
                                    />
                                    <label
                                        htmlFor="creditCart"
                                        className="text-md font-bold text-black"
                                    >
                                        Credit Card
                                    </label>
                                </div>
                                <div className="mr-auto">
                                    <Image
                                        src="/visa.png"
                                        alt="Credit Card"
                                        width={40}
                                        height={40}
                                        className="opacity-100"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <div className="space-y-2">
                                    <Label htmlFor="card-number">Card Number</Label>
                                    <Input id="card-number" placeholder="Card number" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="expiration">Expiration Date</Label>
                                    <Input id="expiration" placeholder="MM / YY" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="card-holder">Card Holder</Label>
                                    <Input id="card-holder" placeholder="Card holder name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" placeholder="CVC" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between space-x-2 bg-muted p-4 rounded-lg">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="paypal"
                                        name="booking-type"
                                        defaultChecked
                                        className="w-4 h-4 accent-blue-600"
                                    />
                                    <label
                                        htmlFor="paypal"
                                        className="text-md font-bold text-black"
                                    >
                                        Paypal
                                    </label>
                                </div>
                                <div className="mr-auto">
                                    <Image
                                        src="/paypal.png"
                                        alt="Credit Card"
                                        width={70}
                                        height={70}
                                        className="opacity-100"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between space-x-2 bg-muted p-4 rounded-lg">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="bitcoin"
                                        name="booking-type"
                                        defaultChecked
                                        className="w-4 h-4 accent-blue-600"
                                    />
                                    <label
                                        htmlFor="bitcoin"
                                        className="text-md font-bold text-black"
                                    >
                                        Bitcoin                                    </label>
                                </div>
                                <div className="mr-auto">
                                    <Image
                                        src="/bitcoin.png"
                                        alt="Credit Card"
                                        width={70}
                                        height={70}
                                        className="opacity-100"
                                    />
                                </div>
                            </div>
                        </RadioGroup>
                    </Card>

                    {/* Confirmation Section */}
                    <Card className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Confirmation</h2>
                            <p className="text-sm text-muted-foreground">Step 4 of 4</p>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">
                            We are getting to the end. Just a few clicks and your rental is ready!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2 bg-muted p-4 rounded-lg">
                                <Checkbox id="marketing" className="border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" />
                                <Label htmlFor="marketing" className="text-sm">
                                    I agree with sending an Marketing and newsletter emails. No spam, promised!
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2 bg-muted p-4 rounded-lg">
                                <Checkbox id="terms" className="border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" />
                                <Label htmlFor="terms" className="text-sm">
                                    I agree with our terms and conditions and privacy policy.
                                </Label>
                            </div>
                        </div>
                        <Link href={"./detailsPage"}>
                            <button className="bg-[#3563E9] hover:bg-[#54A6FF] m-4 py-3 px-5 text-white rounded-[5px]">
                                Rent Now
                            </button>
                        </Link>
                        <div className="mt-8 flex items-start space-x-4">
                            <div className="mt-1 ">
                                <Image
                                    src="/rentalForm-check.png"
                                    alt="Security"
                                    width={30}
                                    height={30}
                                    className="opacity-100"
                                />
                            </div>
                            <div>
                                <p className="font-medium">All your data are safe</p>
                                <p className="text-sm text-muted-foreground">
                                    We are using the most advanced security to provide you the best experience ever.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right Column - Summary */}
                <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                    <Card className="p-6 sticky top-6">
                        <h2 className="text-lg font-semibold">Rental Summary</h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Prices may change depending on the length of the rental and the price of your rental car.
                        </p>

                        <div className="flex items-center mt-6">
                            <div className="relative w-20 h-20 bg-muted rounded-lg">
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-2xl font-bold">{car.name}</h3>
                                <div className="flex items-center mt-1">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(car.rating)
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted-foreground ml-2">
                                        {car.reviews}+ Reviewer
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t">
                            <div className="flex justify-between mb-2">
                                <p className="text-muted-foreground">Subtotal</p>
                                <p className="font-medium">${car.price.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between mb-6">
                                <p className="text-muted-foreground">Tax</p>
                                <p className="font-medium">$0.00</p>
                            </div>

                            <div className="relative">
                                <Input placeholder="Apply promo code" />
                                <Button
                                    variant="ghost"
                                    className="absolute right-0 top-0 h-full"
                                >
                                    Apply now
                                </Button>
                            </div>

                            <div className="mt-6 pt-6 border-t">
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-semibold">Total Rental Price</p>
                                    <p className="text-2xl font-bold">${car.price.toFixed(2)}</p>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Overall price and includes rental discount
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

