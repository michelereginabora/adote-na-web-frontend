import { AnimalRepositoryImpl } from "../../data/datasources/AnimalRepositoryImpl";
import { GetAnimalsUseCase } from "../../domain/usecases/GetAnimalUseCase";
import { AnimalApi } from "../../Infrastructure/api/AnimalApi";


export const createGetAnimalsUseCase = (): GetAnimalsUseCase => {
  const api = new AnimalApi();
  const repository = new AnimalRepositoryImpl(api);
  return new GetAnimalsUseCase(repository);
};