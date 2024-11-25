import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=151`);
  }

  getPokemonDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
