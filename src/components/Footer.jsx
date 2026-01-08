// components/Footer.js
import React from 'react';
import { Globe, Users, MessageCircle, Video } from 'lucide-react';
import { FaApple, FaGooglePlay, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start mb-6">
              <div className="mb-3">
                <img src='/images/logo2.png' alt="WeeCha Logo" className="w-24 h-auto" />
              </div>
              <p className="text-sm text-purple-400">
                Connecting The World
              </p>
            </div>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-6">
              One of the fastest-growing technology companies connecting users in 30+ countries.
              Powered by AI, our video-based social platform inspires one billion people's lives through
              global connections and creative expression.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm block">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm block">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm block">How It Works</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm block">User Experiences</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm block">FAQ</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-base font-bold mb-4 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-2"></span>
              Platform
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center">
                <Video className="w-3 h-3 mr-2" /> Live Streaming
              </li>
              <li className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center">
                <MessageCircle className="w-3 h-3 mr-2" /> Video Chat
              </li>
              <li className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center">
                <Users className="w-3 h-3 mr-2" /> Global Community
              </li>
              <li className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center">
                <Globe className="w-3 h-3 mr-2" /> 30+ Countries
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="text-base font-bold mb-4 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-2"></span>
              Download App
            </h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="w-6 h-6 flex items-center justify-center">
                  <FaApple className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <div className="w-6 h-6 flex items-center justify-center">
                  <FaGooglePlay className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 WeeCha. One of the fastest-growing technology companies with offices worldwide.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Globe className="w-4 h-4" />
              <span>30+ Countries • 4+ Offices & R&D Centers • AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;