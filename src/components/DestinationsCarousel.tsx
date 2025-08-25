import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const destinations = [
  {
    id: 1,
    name: 'Caribbean',
    description: 'Crystal clear waters, white sand beaches, and tropical paradise await in the Caribbean.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Beach', 'Tropical', 'Relaxation'],
    link: 'https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1'
  },
  {
    id: 2,
    name: 'Alaska',
    description: 'Majestic glaciers, wildlife encounters, and breathtaking mountain scenery in the Last Frontier.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Wildlife', 'Glaciers', 'Adventure'],
    link: 'https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1'
  },
  {
    id: 3,
    name: 'Mediterranean',
    description: 'Ancient ruins, charming coastal towns, and rich cultural experiences across Europe.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Culture', 'History', 'Food'],
    link: 'https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1'
  },
  {
    id: 4,
    name: 'Mexico',
    description: 'Vibrant culture, beautiful beaches, and ancient Mayan ruins along the Mexican coast.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Beach', 'Culture', 'Adventure'],
    link: 'https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1'
  },
  {
    id: 5,
    name: 'Bahamas',
    description: 'Pristine beaches, crystal-clear waters, and endless sunshine in the Bahamas.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Beach', 'Relaxation', 'Water Sports'],
    link: 'https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1'
  }
];

const DestinationsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing cruise destinations that will create memories to last a lifetime
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={destinations[currentIndex].image}
                  alt={destinations[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                      {destinations[currentIndex].name}
                    </h3>
                    <p className="text-lg lg:text-xl mb-6 text-gray-200">
                      {destinations[currentIndex].description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {destinations[currentIndex].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={destinations[currentIndex].link}
                      className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Explore {destinations[currentIndex].name}
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            {isAutoPlaying ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsCarousel;
