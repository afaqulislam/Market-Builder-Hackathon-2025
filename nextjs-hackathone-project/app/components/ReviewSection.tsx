"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Star, X, Upload } from "lucide-react";
import type React from "react"; // Added import for React

interface Review {
  id: number;
  name: string;
  date: string;
  role: string;
  text: string;
  image: string;
  rating: number;
  userId: string; // Assuming we have a way to identify users
}

const ReviewsSection: React.FC = () => {
  const [visibleReviews, setVisibleReviews] = useState<number>(2);
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Alex Stanton",
      date: "21 July 2022",
      role: "CEO at Bukalapak",
      text: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      image: "/profile.png",
      rating: 5,
      userId: "user1",
    },
    {
      id: 2,
      name: "Skylar Dias",
      date: "20 July 2022",
      role: "CEO at Amazon",
      text: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      image: "/review-2.png",
      rating: 4,
      userId: "user2",
    },
  ]);

  const [newReview, setNewReview] = useState<Partial<Review>>({
    name: "",
    role: "",
    text: "",
    rating: 0,
  });
  const [isAddingReview, setIsAddingReview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleShowMore = () => {
    setVisibleReviews((prev) => prev + 2);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewReview((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.text && newReview.rating) {
      const review: Review = {
        id: reviews.length + 1,
        name: newReview.name,
        date: new Date().toLocaleDateString(),
        role: newReview.role || "Customer",
        text: newReview.text,
        image: newReview.image || "/placeholder.svg",
        rating: newReview.rating,
        userId: `user${reviews.length + 1}`, // This should be replaced with actual user authentication
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: "", role: "", text: "", rating: 0 });
      setIsAddingReview(false);
    }
  };

  const handleDeleteReview = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div className="py-12 max-w-[1450px] mx-auto px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4 md:space-x-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Reviews</h2>
            <span className="text-white bg-[#3563E9] px-4 py-2 rounded-lg">
              {reviews.length}
            </span>
          </div>
          <button
            onClick={() => setIsAddingReview(true)}
            className="bg-[#3563E9] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Review
          </button>
        </div>

        {/* Add Review Form */}
        {isAddingReview && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role (optional)
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={newReview.role}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Review
                </label>
                <textarea
                  id="text"
                  name="text"
                  value={newReview.text}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <div className="flex space-x-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`cursor-pointer ${
                        star <= (newReview.rating || 0)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                      onClick={() => handleRatingChange(star)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image (optional)
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    Upload Image
                  </button>
                  {newReview.image && (
                    <Image
                      src={newReview.image || "/placeholder.svg"}
                      alt="Preview"
                      width={50}
                      height={50}
                      className="ml-4 rounded-full"
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAddingReview(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reviews Section */}
        <div className="bg-white shadow-md rounded-lg">
          {reviews.slice(0, visibleReviews).map((review) => (
            <div
              key={review.id}
              className="p-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full border-b last:border-none relative"
            >
              {/* User Image */}
              <div className="flex-shrink-0">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row justify-between">
                  <h3 className="text-lg md:text-xl font-bold">
                    {review.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between mt-2">
                  <p className="text-gray-400">{review.role}</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                  {review.text}
                </p>
              </div>

              {/* Delete button (only shown for the user's own reviews) */}
              {review.userId === "user1" && ( // Replace with actual user authentication
                <button
                  onClick={() => handleDeleteReview(review.id)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                  aria-label="Delete review"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}

          {/* "Show All" Button */}
          {visibleReviews < reviews.length && (
            <div className="text-center my-8">
              <button
                onClick={handleShowMore}
                className="flex items-center justify-center space-x-2 text-blue-600 hover:underline mx-auto"
              >
                <span>Show All</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.7l3.71-3.47a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
