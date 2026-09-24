import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';

import { PokemonService } from '../../services/pokemon.service';

interface Pokemon {
  name: string;
  url: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-search',
  styleUrl: './search.scss',
  templateUrl: './search.html',
})
export class PokemonSearchComponent implements OnInit, OnDestroy {
  pokemonName = '';

  pokemonList: Pokemon[] = [];

  suggestions: Pokemon[] = [];

  private searchSubject = new Subject<string>();

  private searchSubscription!: Subscription;

  @Output()
  pokemonSearched = new EventEmitter<string>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((pokemons) => {
      this.pokemonList = pokemons;
    });

    this.searchSubscription = this.searchSubject
      .pipe(
        debounceTime(300),

        distinctUntilChanged(),
      )
      .subscribe((texto) => {
        if (!texto) {
          this.suggestions = [];
          return;
        }

        this.suggestions = this.pokemonList
          .filter((pokemon) => pokemon.name.startsWith(texto))
          .slice(0, 8);
      });
  }

  onPokemonNameChange(): void {
    const texto = this.pokemonName.trim().toLowerCase();

    if (!texto) {
      this.suggestions = [];
      return;
    }

    this.suggestions = this.pokemonList
      .filter((pokemon) => pokemon.name.toLowerCase().startsWith(texto))
      .slice(0, 8);
  }

  formatPokemonName(name: string): string {
    return name.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  selectPokemon(name: string): void {
    this.pokemonName = name;

    this.suggestions = [];

    this.onSearch();
  }

  onSearch(): void {
    const name = this.pokemonName.trim().toLowerCase();

    if (!name) {
      return;
    }

    this.pokemonSearched.emit(name);
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
