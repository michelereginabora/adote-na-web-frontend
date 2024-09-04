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
        description: "Eu sou um companheiro tranquilo. Com outros animais, eu sou bastante amigável. Eu sou inquieto com crianças. Meu nível de energia é alto.",
        location: "Guarapuava, PR"
      },
      { 
        id: "2",
        name: "Mel",
        photos: [
          "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/04/03/1457598896-gato-vira-lata.jpg"
        ],
        species: "cat",
        gender: "female",
        description: "Eu sou uma companheira reservada. Com outros animais, eu sou bastante neutra. Eu sou tolerante com crianças. Meu nível de energia é médio.",
        location: "Curitiba, PR"
      },
      { 
        id: "3",
        name: "Bob",
        photos: [
          "https://www.agrosete.com.br/wp-content/uploads/2017/06/Vira-latas-conquistam-coracao-de-brasileiros.jpg"
        ],
        species: "dog",
        gender: "male",
        description: "Eu sou um companheiro tranquilo. Com outros animais, eu sou bastante amigável. Eu sou inquieto com crianças. Meu nível de energia é baixo.",
        location: "São Paulo, SP"
      },
      { 
        id: "4",
        name: "Belinha",
        photos: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBv0jwdKsG69plmYnmfSgXyGTb_QDPPcXHw&s"
        ],
        species: "cat",
        gender: "female",
        description: "Eu sou uma companheira reservada. Com outros animais, eu sou bastante neutra. Eu sou tolerante com crianças. Meu nível de energia é médio.",
        location: "Porto Alegre, RS"
      },
      
    ];
  }
}