import { AnimalLandingPage } from '../entities/Animal';
import { AnimalRepository } from '../repositories/AnimalRepository';


export class GetAnimalsUseCase {
  constructor(private animalRepository: AnimalRepository) {}

  execute(): Promise<AnimalLandingPage[]> {
    return this.animalRepository.getAnimalsForLandingPage();
  }
}