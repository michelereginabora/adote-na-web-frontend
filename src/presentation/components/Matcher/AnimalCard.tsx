import React from 'react';
import { FaHeart, FaComment, FaMapMarkerAlt, FaDog, FaCat, FaPaw } from 'react-icons/fa';

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

const getSpeciesIcon = (species: string) => {
  switch (species) {
    case 'dog':
      return <FaDog className="text-blue-500" />;
    case 'cat':
      return <FaCat className="text-orange-500" />;
    default:
      return <FaPaw className="text-green-500" />;
  }
};

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          className="w-full h-42 object-cover"
          src={animal.photos[0]}
          alt={`${animal.name}`}
        />
        <div className="absolute top-0 right-0 bg-white rounded-bl-lg px-2 py-1 m-2">
          {getSpeciesIcon(animal.species)}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-gray-800">{animal.name}</div>
        <p className="text-gray-600 text-sm mb-2">
          {translateSpecies(animal.species)} • {translateGender(animal.gender)}
        </p>
        <p className="text-gray-500 text-xs flex items-center mb-4">
          <FaMapMarkerAlt className="mr-1" /> {animal.location}
        </p>
        {animal.description && (
          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Sobre mim:</span> {animal.description}
          </p>
        )}
      </div>
      <div className="px-6 pt-2 pb-4 flex justify-center space-x-4">
        <button className="bg-red-500 text-white rounded-full p-3 hover:bg-red-600 transition-colors duration-300">
          <FaHeart className="h-5 w-5" />
        </button>
        <button className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 transition-colors duration-300">
          <FaComment className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;