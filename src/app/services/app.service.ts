import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CatBreedDefinition} from '../interfaces/cat-breeds';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<CatBreedDefinition[]> {
    return this.http.get<CatBreedDefinition[]>('https://api.thecatapi.com/v1/breeds');
  }
}
