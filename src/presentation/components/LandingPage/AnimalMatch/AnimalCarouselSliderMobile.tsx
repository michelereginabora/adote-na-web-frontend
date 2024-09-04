import React, { useState, useEffect, useCallback } from 'react';
import { AnimalLandingPage } from '../../../../domain/entities/Animal';
import AnimalCard from '../../Matcher/AnimalCard';

interface AnimalCarouselSliderProps {
  animals: AnimalLandingPage[];
}

const AnimalCarouselSliderMobile: React.FC<AnimalCarouselSliderProps> = ({ animals }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const extendedAnimals = [...animals.slice(-1), ...animals, ...animals.slice(0, 1)];

  const handleTransitionEnd = useCallback(() => {
    if (currentIndex === extendedAnimals.length - 1) {
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setCurrentIndex(extendedAnimals.length - 2);
    }
  }, [currentIndex, extendedAnimals.length]);

  useEffect(() => {
    let interval: number;
    if (isAutoPlay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedAnimals.length);
      }, 3000);
    }
    return () => window.clearInterval(interval);
  }, [extendedAnimals.length, isAutoPlay]);

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative flex items-center overflow-hidden rounded-lg w-full">
        <div className="relative flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / extendedAnimals.length}%)`,
              width: `${extendedAnimals.length * 100}%`
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedAnimals.map((animal, index) => (
              <div
                key={`${animal.id}-${index}`}
                className="flex-shrink-0 w-[32%] h-full flex justify-center items-center mx-2 transition-all duration-1500"
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

export default AnimalCarouselSliderMobile;
