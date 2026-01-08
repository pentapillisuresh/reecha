import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Download & Sign Up",
      description: "Download Reecha app and register instantly with phone number or social account",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Create Your Profile",
      description: "Set up your profile, add photos, and customize your preferences",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Connect Instantly",
      description: "Start chatting with new people nearby or around the world with one tap",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Go Live & Stream",
      description: "Start live streaming to your followers and interact in real-time",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "5",
      title: "Share & Earn",
      description: "Share your moments, engage your audience, and earn through virtual gifts",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            How Reecha Works
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Simple steps to start connecting and sharing on our social platform
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Connector Line */}
            <div className="absolute left-20 right-20 top-8 h-0.5 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30"></div>

            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Step Circle */}
                  <div className="relative mb-4 z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                      <span className="text-gray-900 font-bold text-xs">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="max-w-md mx-auto">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                      <span className="text-gray-900 font-bold text-xs">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* App Store Badges */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Get started today</p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center space-x-3 px-5 py-3 rounded-lg bg-black text-white transition-all duration-300 hover:scale-105 shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.76 3.28-.76 2 .76 3.3.73 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.68-4.04z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </button>
            <button className="flex items-center space-x-3 px-5 py-3 rounded-lg bg-black text-white transition-all duration-300 hover:scale-105 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 20.5V3.5C3 2.67 3.67 2 4.5 2h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5zm6-10.5l4.5 3-4.5 3V10z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;