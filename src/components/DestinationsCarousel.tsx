import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Caribbean",
    description: "Crystal clear waters, white sand beaches, and tropical paradise await in the Caribbean.",
    image: "/images/caribbean-1.jpg",
    tags: ["Family Friendly", "Beach", "Tropical"],
    link: "https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1"
  },
  {
    id: 2,
    name: "Alaska",
    description: "Majestic glaciers, wildlife encounters, and breathtaking mountain scenery.",
    image: "/images/alaska-1.jpg",
    tags: ["Adventure", "Wildlife", "Scenic"],
    link: "https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1"
  },
  {
    id: 3,
    name: "Mediterranean",
    description: "Ancient history, stunning architecture, and world-class cuisine.",
    image: "/images/mediterranean-1.jpg",
    tags: ["Culture", "History", "Luxury"],
    link: "https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1"
  },
  {
    id: 4,
    name: "Mexico",
    description: "Vibrant culture, beautiful beaches, and delicious cuisine.",
    image: "/images/mexico-1.jpg",
    tags: ["Culture", "Beach", "Food"],
    link: "https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1"
  },
  {
    id: 5,
    name: "Bahamas",
    description: "Pristine beaches, crystal clear waters, and endless sunshine.",
    image: "/images/bahamas-1.jpg",
    tags: ["Beach", "Relaxation", "Short Getaways"],
    link: "https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1"
  }
];

const DestinationsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + destinations.length) % destinations.length);
  };

  const currentDestination = destinations[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing destinations and find your perfect cruise experience.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-900/60 to-navy-900/40">
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-lg">{currentDestination.name}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white max-w-2xl mx-auto px-6">
                      <h3 className="text-4xl md:text-5xl font-bold mb-4">
                        {currentDestination.name}
                      </h3>
                      <p className="text-xl md:text-2xl mb-6 text-gray-200">
                        {currentDestination.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {currentDestination.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={currentDestination.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-500"
                      >
                        Explore {currentDestination.name} Cruises
                        <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-ocean-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ocean-500"
            aria-label="Previous destination"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ocean-500"
            aria-label="Next destination"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsCarousel;
