// components/Features.js
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Live Streaming",
      description: "Watch and broadcast live streams anytime, anywhere with high-quality video and global reach."
    },
    {
      title: "Video & Voice Chat",
      description: "Connect instantly with friends using crystal-clear video and voice chat features."
    },
    {
      title: "Global Social Network",
      description: "Meet and chat with new people nearby or around the world without limits."
    },
    {
      title: "AI-Powered Experience",
      description: "Enjoy smart recommendations, content discovery, and personalized connections powered by AI."
    },
    {
      title: "Share Moments",
      description: "Capture and share beautiful moments to build your following and engage your audience."
    },
    {
      title: "Virtual Gifts & Earnings",
      description: "Earn income by live streaming and receiving virtual gifts from your friends and followers."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }}
      ></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Social Features That Connect the World
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From instant video chat to global live streaming and creative expression
          </p>
        </div>
        
        {/* Features Grid - 3 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-purple-500 group"
            >
              {/* Number Indicator */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div className="w-6 h-1 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-12 transition-all duration-300"></div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-lg font-medium opacity-90">Countries</div>
            </div>
            
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">AI</div>
              <div className="text-lg font-medium opacity-90">Powered Technology</div>
            </div>
            
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg font-medium opacity-90">Global Connection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;