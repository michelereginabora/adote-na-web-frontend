import React, { useState } from 'react';
import { AnimalLandingPage } from '../../../../domain/entities/Animal';
import AnimalCard from '../../Matcher/AnimalCard';
import useSwipe from '../../../hooks/useSwipe';

interface AnimalCarouselSliderProps {
  animals: AnimalLandingPage[];
}

const AnimalCarouselSliderMobile: React.FC<AnimalCarouselSliderProps> = ({ animals }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, animals.length - 1));
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe(handleSwipeLeft, handleSwipeRight);

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative flex items-center overflow-hidden rounded-lg w-full">
        <div
          className="relative flex overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / animals.length}%)`,
              width: `${animals.length * 100}%`,
            }}
          >
            {animals.map((animal, index) => (
              <div
                key={`${animal.id}-${index}`}
                className="flex-shrink-0 w-[55%] flex justify-center items-center p-2"
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
