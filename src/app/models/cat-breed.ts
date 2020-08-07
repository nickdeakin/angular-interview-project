import {CatBreedDefinition} from '../interfaces/cat-breeds';

export class CatBreed implements CatBreedDefinition {
  id: string;
  name: string;
  origin: string;
  life_span: string;
  wikipedia_url: string;

  constructor(values: CatBreedDefinition) {
    if (values) {
      Object.assign(this, values);
    }
  }
}
