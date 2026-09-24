import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

export interface Pokemon {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http = inject(HttpClient);

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  private pokemonList$?: Observable<Pokemon[]>;

  getPokemon(nome: string) {
    return this.http.get(`${this.apiUrl}/${nome}`);
  }

  getPokemonList(): Observable<Pokemon[]> {

    if (!this.pokemonList$) {

      this.pokemonList$ = this.http
        .get<{ results: Pokemon[] }>(
          `${this.apiUrl}?limit=2000`
        )
        .pipe(
          map(response => response.results),
          shareReplay(1)
        );

    }

    return this.pokemonList$;
  }
}