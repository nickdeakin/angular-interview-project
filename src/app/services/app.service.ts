import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CatBreedDefinition} from '../interfaces/cat-breeds';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<CatBreedDefinition[]> {
    const headers = new HttpHeaders().set('x-api-key', environment.catApiToken);

    return this.http.get<CatBreedDefinition[]>('https://api.thecatapi.com/v1/breeds', {headers});
  }
}
