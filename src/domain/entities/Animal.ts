export interface Animal {
  id: string;
  name: string;
  photos: File[];
  video?: string;
  species: 'dog' | 'cat' | 'other';
  breed: string;
  age: string;
  size: 'small' | 'medium' | 'large';
  gender: 'male' | 'female';
  color?: string;
  weight?: string;
  location: string;

  healthHistory: {
    vaccines: { date: string; type: string }[];
    medicalConditions: string;
    medications: string;
    veterinaryTreatments: string;
  };

  temperamentBehavior: {
    generalBehavior: 'calm' | 'outgoing' | 'energetic' | 'reserved' | 'playful' | 'attached';
    behaviorWithOtherAnimals: string;
    behaviorWithChildren: string;
    energyLevel: 'low' | 'medium' | 'high';
  };

  description?: string;
}

export interface AnimalLandingPage {
  id: string;
  name: string;
  photos: string[]; //urls array
  species: 'dog' | 'cat' | 'other';
  gender: 'male' | 'female';
  location: string;
  description?: string;
}
