import {AnimalLandingPage } from '../../domain/entities/Animal';

export interface AnimalDataSource {
  getAnimalsForLandingPage(): Promise<AnimalLandingPage[]>;
}