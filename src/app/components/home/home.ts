;
import { Component, inject, input } from '@angular/core';
import { Card } from '../card/card';
import { PokemonSearchComponent } from "../search/search";

@Component({
  imports: [Card, PokemonSearchComponent],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {

  pokemonName = '';

  onPokemonSearched(name: string) {
    this.pokemonName = name;

    console.log(this.pokemonName);
  }
}
