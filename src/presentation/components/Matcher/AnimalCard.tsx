import React from 'react';

interface AnimalCardProps {
  animal: {
    name: string;
    photos: string[];
    species: 'dog' | 'cat' | 'other';
    gender: 'male' | 'female';
    description?: string;
    location: string
  };
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <div className="animal-card">
      <h3>{animal.name}</h3>
      <div className="animal-photos">
        {animal.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`${animal.name}`} />
        ))}
      </div>
      <p>{animal.location}</p>
      <p>{animal.species}</p>
      <p>{animal.gender}</p>
      {animal.description && <p>Biografia: {animal.description}</p>}
    </div>
  );
};

export default AnimalCard;
