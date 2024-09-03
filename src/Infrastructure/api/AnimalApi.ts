import { AnimalDataSource } from '../../data/repositories/AnimalDataSource';
import { AnimalLandingPage } from '../../domain/entities/Animal';

export class AnimalApi implements AnimalDataSource {
  async getAnimalsForLandingPage(): Promise<AnimalLandingPage[]> {
    // Por enquanto, retornamos dados mockados
    return [
      { 
        id: "1",
        name: "Caramelo",
        photos: [
          "https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg"
        ],
        species: "dog",
        gender: "male",
        description: "Caramelo é um cão amigável e enérgico que adora brincar com crianças e outros animais de estimação.",
        location: "Guarapuava, PR"
      },
      { 
        id: "2",
        name: "Bob",
        photos: [
          "https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg"
        ],
        species: "dog",
        gender: "male",
        description: "Caramelo é um cão amigável e enérgico que adora brincar com crianças e outros animais de estimação.",
        location: "Guarapuava, PR"
      },
      { 
        id: "3",
        name: "Mel",
        photos: [
          "https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg"
        ],
        species: "dog",
        gender: "male",
        description: "Caramelo é um cão amigável e enérgico que adora brincar com crianças e outros animais de estimação.",
        location: "Guarapuava, PR"
      }
      
    ];
  }
}