import React, { useEffect, useState } from 'react';
import { AnimalLandingPage } from '../../../domain/entities/Animal';
import { GetAnimalsUseCase } from '../../../domain/usecases/GetAnimalUseCase';
import AnimalCard from '../Matcher/AnimalCard';

interface Props {
  getAnimalsUseCase: GetAnimalsUseCase;
}

const AnimalSection: React.FC<Props> = ({ getAnimalsUseCase }) => {
  const [animals, setAnimals] = useState<AnimalLandingPage[]>([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const fetchedAnimals = await getAnimalsUseCase.execute();
      setAnimals(fetchedAnimals);
    };
    fetchAnimals();
  }, [getAnimalsUseCase]);

  return (
    <div>
      <h2>Animais para Adoção</h2>
      <div className="animal-grid">
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalSection;