import React, { useState, useEffect } from 'react';
import { AnimalLandingPage } from '../../../../domain/entities/Animal';
import AnimalCard from '../../Matcher/AnimalCard';

interface AnimalCarouselSliderProps {
  animals: AnimalLandingPage[];
}

const AnimalCarouselSlider: React.FC<AnimalCarouselSliderProps> = ({ animals }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval: number;
    if (isAutoPlay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animals.length);
      }, 5000);
    }
    return () => window.clearInterval(interval);
  }, [animals.length, isAutoPlay]);


  return (
    <div className="w-full md:w-2/3 relative flex flex-col">
      <div className="relative flex items-center overflow-hidden rounded-lg mr-8">
        <div className="relative flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${animals.length * 100}%` }}
          >
            {animals.map((animal) => (
              <div
                key={animal.id}
                className="flex-shrink-0 lg:w-[60%] md:w-[80%] h-full flex justify-center items-center transition-all duration-2000"
              >
                <AnimalCard animal={animal} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalCarouselSlider;