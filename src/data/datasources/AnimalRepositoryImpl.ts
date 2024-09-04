import { AnimalLandingPage } from '../../domain/entities/Animal';
import { AnimalRepository } from '../../domain/repositories/AnimalRepository';
import { AnimalDataSource } from '../repositories/AnimalDataSource';


export class AnimalRepositoryImpl implements AnimalRepository {
  constructor(private dataSource: AnimalDataSource) {}

  async getAnimalsForLandingPage(): Promise<AnimalLandingPage[]> {
    return this.dataSource.getAnimalsForLandingPage();
  }
}