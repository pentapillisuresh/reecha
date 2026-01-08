import React from 'react';
import { Star, MessageCircle, ThumbsUp, Video, Users } from 'lucide-react';

const UserReviews = () => {
  const reviews = [
    {
      id: 1,
      username: "Priya Sharma",
      time: "2 hours ago",
      rating: 5,
      comments: 12,
      likes: 24,
      review: "Made amazing friends from different states! The video chat quality is crystal clear and the interface is so user-friendly.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    },
    {
      id: 2,
      username: "Rahul Kumar",
      time: "5 hours ago",
      rating: 4,
      comments: 8,
      likes: 15,
      review: "Live streaming feature is fantastic! I can connect with my audience and make new friends simultaneously.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    },
    {
      id: 3,
      username: "Ananya Patel",
      time: "1 day ago",
      rating: 5,
      comments: 5,
      likes: 34,
      review: "Best social app in India! AI suggestions always match me with like-minded people from across the country.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    },
    {
      id: 4,
      username: "Arjun Singh",
      time: "1 day ago",
      rating: 4,
      comments: 3,
      likes: 9,
      review: "Perfect for making new friends across India. The interface is smooth and features are well-designed for Indian users.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    },
    {
      id: 5,
      username: "Sneha Reddy",
      time: "2 days ago",
      rating: 5,
      comments: 7,
      likes: 45,
      review: "Started live streaming and earning from my hobbies! The Indian community here is so supportive and engaging.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    },
    {
      id: 6,
      username: "Vikram Joshi",
      time: "2 days ago",
      rating: 4,
      comments: 4,
      likes: 17,
      review: "Safe platform for Indian youth. Made genuine connections with people sharing similar cultural background.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-purple-500 fill-purple-500' : 'text-gray-300'
              }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            User Experiences
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            See what our Indian community is saying about their WeeCha experience
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200"
            >
              {/* Review Image */}
              <div className="h-40 rounded-t-lg relative overflow-hidden group">
                <img
                  src={review.image}
                  alt={review.username}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Live Badge */}
                <div className="absolute top-3 left-3">
                  <div className="flex items-center space-x-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>Live</span>
                  </div>
                </div>

                {/* Time Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-gray-900 bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {review.time}
                  </span>
                </div>

                {/* User Info Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-sm font-bold">
                    {review.username.charAt(0)}
                  </div>
                  <span className="ml-2 text-white text-sm font-medium bg-black/40 px-2 py-1 rounded">
                    {review.username}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 flex items-center">
                      <Video className="w-4 h-4 mr-1 text-purple-600" />
                      {review.username}
                    </h3>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {review.review}
                  </p>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-xs font-medium">{review.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs font-medium">{review.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-medium">India</span>
                    </div>
                  </div>

                  <button className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded text-xs font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Stats */}
        <div className="mt-12 mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="text-white">
                <div className="text-3xl font-bold mb-2">4.8/5</div>
                <div className="text-sm opacity-90">Average Rating</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm opacity-90">Indian Users</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Live Connections</div>
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="px-6 py-2.5 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow">
            Join Indian Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;