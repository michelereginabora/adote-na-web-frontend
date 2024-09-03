import React, { useEffect, useState, useCallback } from 'react';
import { AnimalLandingPage } from '../../../../domain/entities/Animal';
import { GetAnimalsUseCase } from '../../../../domain/usecases/GetAnimalUseCase';
import AnimalCarouselSlider from './AnimalCarouselSlider';
import CarouselText from './CarouselText';


interface AnimalCarouselProps {
  getAnimalsUseCase: GetAnimalsUseCase;
}

const AnimalCarousel: React.FC<AnimalCarouselProps> = ({ getAnimalsUseCase }) => {
  const [animals, setAnimals] = useState<AnimalLandingPage[]>([]);

  const fetchAnimals = useCallback(async () => {
    try {
      const fetchedAnimals = await getAnimalsUseCase.execute();
      setAnimals(fetchedAnimals);
    } catch (error) {
      console.error('Failed to fetch animals:', error);
    }
  }, [getAnimalsUseCase]);

  useEffect(() => {
    fetchAnimals();
  }, [fetchAnimals]);

  return (
    <section className="flex flex-col md:flex-row py-10 bg-[var(--color-bg-dark)] mx-auto">
      <CarouselText />
      <AnimalCarouselSlider animals={animals} />
    </section>
  );
};

export default AnimalCarousel;