import {AnimalLandingPage } from '../entities/Animal';

export interface AnimalRepository {
  getAnimalsForLandingPage(): Promise<AnimalLandingPage[]>;
}