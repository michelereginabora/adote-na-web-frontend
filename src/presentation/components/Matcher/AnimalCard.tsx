import React from 'react';
import { FaHeart, FaComment, FaMapMarkerAlt } from 'react-icons/fa';

interface AnimalCardProps {
  animal: {
    name: string;
    photos: string[];
    species: 'dog' | 'cat' | 'other';
    gender: 'male' | 'female';
    description?: string;
    location: string;
  };
}

const translateSpecies = (species: string) => {
  switch (species) {
    case 'dog':
      return 'Cachorro';
    case 'cat':
      return 'Gato';
    case 'other':
    default:
      return 'Outro';
  }
};

const translateGender = (gender: string) => {
  switch (gender) {
    case 'male':
      return 'Macho';
    case 'female':
      return 'Fêmea';
    default:
      return gender;
  }
};

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <div className="max-w-[20rem] rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-46 object-cover"
        src={animal.photos[0]}
        alt={`${animal.name}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"><strong>{animal.name}</strong></div>
        <p className="text-gray-700 text-base">
          {translateSpecies(animal.species)}, {translateGender(animal.gender)}<br/>
          <span className="flex items-center pt-4">
            <FaMapMarkerAlt className="text-gray-600 mr-1" /> {animal.location}
          </span><br />
          {animal.description && (
            <>
              <strong>Sobre mim:</strong> {animal.description}
            </>
          )}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center space-x-4">
        <button className="bg-red-500 text-white rounded-full p-3 hover:bg-red-700">
          <FaHeart className="h-5 w-5" />
        </button>
        <button className="bg-green-500 text-white rounded-full p-3 hover:bg-green-700">
          <FaComment className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;
