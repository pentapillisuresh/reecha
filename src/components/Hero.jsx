// components/Hero.js
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Download, Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const stripContainersRef = useRef([]);
  const contentRefs = useRef([]);

  const bannerItems = [
    {
      id: 1,
      title: "Meet & Chat New Friends without Limits",
      subtitle: "Connect Instantly Worldwide",
      description: "AI-powered social platform connecting users globally",
      image: "/images/banner1.jpg",
      color: "#8B5CF6",
      buttonText: "Download App"
    },
    {
      id: 2,
      title: "Live Streaming & Video Chat",
      subtitle: "Broadcast Anytime, Anywhere",
      description: "Watch and broadcast live streams in real-time",
      image: "/images/banner2.jpg",
      color: "#8B5CF6",
      buttonText: "Start Streaming"
    },
    {
      id: 3,
      title: "Safe & Creative Social Environment",
      subtitle: "Positive Online Community",
      description: "Secure platform with premium video features",
      image: "/images/banner3.jpg",
      color: "#8B5CF6",
      buttonText: "Join Now"
    }
  ];

  const STRIP_COUNT = 16;

  useGSAP(() => {
    gsap.set(slidesRef.current, {
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none'
    });

    gsap.set(slidesRef.current[0], {
      opacity: 1,
      visibility: 'visible',
      pointerEvents: 'auto'
    });

    slidesRef.current.forEach((slide, slideIndex) => {
      if (slide) {
        const existingContainers = slide.querySelectorAll('.strip-container, .strips-master');
        existingContainers.forEach(container => container.remove());

        const stripsMaster = document.createElement('div');
        stripsMaster.className = 'strips-master absolute inset-0 z-0 overflow-hidden';

        const stripsContainer = document.createElement('div');
        stripsContainer.className = 'strip-container absolute inset-0 flex';
        stripsContainer.style.cssText = `
          width: 100%;
          height: 100%;
          transform: translateZ(0);
        `;

        const stripWidth = 100 / STRIP_COUNT;

        for (let i = 0; i < STRIP_COUNT; i++) {
          const strip = document.createElement('div');
          strip.className = 'strip absolute top-0 h-full overflow-hidden';
          strip.style.cssText = `
            width: ${stripWidth + 0.1}%;
            left: ${(i * stripWidth)}%;
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            will-change: transform;
          `;

          const innerContainer = document.createElement('div');
          innerContainer.className = 'strip-inner absolute inset-0';
          innerContainer.style.cssText = `
            width: ${STRIP_COUNT * 100}%;
            left: -${(i * 100)}%;
            transform: translateZ(0);
          `;

          const img = document.createElement('img');
          img.src = bannerItems[slideIndex].image;
          img.alt = bannerItems[slideIndex].title;
          img.className = 'absolute top-0 left-0 w-full h-full object-cover';
          img.style.cssText = `
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          `;

          const tempImg = new Image();
          tempImg.src = bannerItems[slideIndex].image;
          tempImg.onload = () => {
            gsap.set(img, { opacity: 1 });
          };

          innerContainer.appendChild(img);
          strip.appendChild(innerContainer);
          stripsContainer.appendChild(strip);
        }

        stripsMaster.appendChild(stripsContainer);
        slide.prepend(stripsMaster);

        if (!stripContainersRef.current[slideIndex]) {
          stripContainersRef.current[slideIndex] = [];
        }
        stripContainersRef.current[slideIndex] = Array.from(stripsContainer.children);

        gsap.set(stripContainersRef.current[slideIndex], {
          y: '0%',
          opacity: 1,
          scaleY: 1
        });
      }
    });

    setTimeout(() => {
      animateSlideIn(0);
    }, 100);
  }, { scope: containerRef });

  const animateSlideIn = (slideIndex) => {
    if (!stripContainersRef.current[slideIndex] || !slidesRef.current[slideIndex]) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      onStart: () => {
        gsap.set(slidesRef.current[slideIndex], {
          opacity: 1,
          visibility: 'visible',
          pointerEvents: 'auto'
        });
      },
      onComplete: () => setIsAnimating(false)
    });

    gsap.set(stripContainersRef.current[slideIndex], {
      y: '-110%',
      opacity: 0,
      scaleY: 0.3
    });

    const centerIndex = Math.floor(STRIP_COUNT / 2);

    stripContainersRef.current[slideIndex].forEach((strip, i) => {
      const distanceFromCenter = Math.abs(i - centerIndex);
      const delay = distanceFromCenter * 0.03;
      const xOffset = (i - centerIndex) * 0.5;

      tl.to(strip, {
        y: '0%',
        x: `${xOffset}%`,
        opacity: 1,
        scaleY: 1,
        duration: 1.4,
        ease: "power3.out",
        delay: delay,
        clearProps: "x"
      }, 0);
    });

    if (contentRefs.current[slideIndex]) {
      tl.fromTo(contentRefs.current[slideIndex],
        {
          y: 60,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: "power3.out",
          delay: 0.8
        },
        0
      );
    }

    return tl;
  };

  const animateSlideOut = (slideIndex, direction = 'down') => {
    if (!stripContainersRef.current[slideIndex]) return;

    const tl = gsap.timeline();

    if (contentRefs.current[slideIndex]) {
      tl.to(contentRefs.current[slideIndex], {
        y: direction === 'down' ? 40 : -40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.in"
      }, 0);
    }

    const centerIndex = Math.floor(STRIP_COUNT / 2);

    stripContainersRef.current[slideIndex].forEach((strip, i) => {
      const distanceFromCenter = Math.abs(i - centerIndex);
      const delay = distanceFromCenter * 0.02;
      const yOffset = direction === 'down' ? '110%' : '-110%';
      const xOffset = (i - centerIndex) * 2;

      tl.to(strip, {
        y: yOffset,
        x: `${xOffset}%`,
        opacity: 0,
        scaleY: 0.5,
        duration: 1,
        ease: "power3.in",
        delay: delay + 0.1
      }, 0);
    });

    tl.set(slidesRef.current[slideIndex], {
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none'
    }, '+=0.1');

    return tl;
  };

  const goToSlide = async (nextIndex) => {
    if (isAnimating || nextIndex === currentSlide) return;

    setIsAnimating(true);

    const direction = nextIndex > currentSlide ? 'down' : 'up';

    const masterTl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        setCurrentSlide(nextIndex);
      }
    });

    masterTl.add(animateSlideOut(currentSlide, direction));
    masterTl.add(animateSlideIn(nextIndex), 0.5);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % bannerItems.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + bannerItems.length) % bannerItems.length;
    goToSlide(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen text-white overflow-hidden bg-black"
    >
      {bannerItems.map((item, index) => (
        <div
          key={item.id}
          ref={el => slidesRef.current[index] = el}
          className="absolute inset-0"
        >
          <div className="relative z-30 h-full flex items-center justify-center">
            <div
              ref={el => contentRefs.current[index] = el}
              className="text-center px-4 max-w-3xl mx-auto"
            >
              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                    AI Powered Social Platform
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {item.title}
                  </h1>

                  <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-purple-300">
                    {item.subtitle}
                  </h2>

                  <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 shadow-xl">
                    <Download className="w-5 h-5" />
                    <span className="text-lg">{item.buttonText}</span>
                  </button>

                  <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <Play className="w-5 h-5" />
                    <span className="text-lg">Watch Demo</span>
                  </button>
                </div>

                <div className="pt-4">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="flex items-center space-x-3 px-6 py-3 bg-black/80 backdrop-blur-sm rounded-xl hover:bg-black transition-all duration-300 hover:scale-105 border border-gray-700">
                      <FaApple className="w-6 h-6 text-white" />
                      <div className="text-left">
                        <div className="text-xs text-gray-400">Download on</div>
                        <div className="text-white font-semibold">App Store</div>
                      </div>
                    </button>
                    <button className="flex items-center space-x-3 px-6 py-3 bg-black/80 backdrop-blur-sm rounded-xl hover:bg-black transition-all duration-300 hover:scale-105 border border-gray-700">
                      <FaGooglePlay className="w-5 h-5 text-white" />
                      <div className="text-left">
                        <div className="text-xs text-gray-400">Get it on</div>
                        <div className="text-white font-semibold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-2">
          {bannerItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className="relative"
            >
              <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-white'
                  : 'bg-white/40 hover:bg-white/60'
                } ${isAnimating ? 'opacity-50' : ''}`}>
                {index === currentSlide && (
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-30 bg-purple-500"
                  ></div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${isAnimating ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:scale-110'
          }`}
      >
        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </div>
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${isAnimating ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:scale-110'
          }`}
      >
        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <ArrowRight className="w-5 h-5" />
        </div>
      </button>

      <div className="absolute top-6 right-6 z-40 text-right">
        <div className="text-xl font-bold">
          <span className="text-white">{currentSlide + 1}</span>
          <span className="text-white/30 mx-1">/</span>
          <span className="text-white/30">{bannerItems.length}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;