// components/Header.js
import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Features', 'How It Works', 'User Experiences', 'FAQ'];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white backdrop-blur-md shadow-lg text-gray-900'
          : 'bg-transparent text-white'
        }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section - Logo above text */}
          <div className="flex flex-col items-center justify-center">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <img src='/images/logo2.png' alt="WeeCha Logo" className="w-20 h-auto" />
            </div>
            {/* Tagline below logo */}
            <p className={`text-xs transition-colors duration-500 mt-1 ${isScrolled ? 'text-purple-600' : 'text-white/80'
              }`}>
              Connecting The World
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className={`transition-all duration-300 hover:scale-105 ${isScrolled
                    ? 'text-gray-700 hover:text-purple-600'
                    : 'text-white/90 hover:text-white'
                  }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 ${isScrolled
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-white/20 backdrop-blur-sm'
                }`}
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled
                ? 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
                : 'text-white hover:text-white/80 hover:bg-white/10'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 py-5 rounded-xl transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-xl border border-gray-200'
                : 'bg-black/80 backdrop-blur-md shadow-xl border border-white/20'
              }`}
          >
            <div className="flex flex-col space-y-4 px-4">
              {/* Logo and tagline in mobile menu - centered */}
              <div className="flex flex-col items-center pb-4 border-b border-gray-100 dark:border-white/10">
                <img src='/images/logo2.png' alt="WeeCha Logo" className="w-14 h-auto mb-2" />
                <p className="text-sm text-purple-600 dark:text-purple-400">Connecting The World</p>
              </div>

              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  className={`py-3 transition-all duration-300 hover:pl-3 border-b ${isScrolled
                      ? 'border-gray-100 text-gray-700 hover:text-purple-600'
                      : 'border-white/10 text-white hover:text-purple-300'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-2">
                <button
                  className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${isScrolled
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-white/20'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Download className="w-4 h-4" />
                  <span>Download App</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;