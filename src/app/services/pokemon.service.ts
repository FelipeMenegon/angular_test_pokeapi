import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class PokemonService {
  private http = inject(HttpClient);

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon(nome: string) {
    return this.http.get(`${this.apiUrl}/${nome}`);
  }
}
