;
import { Component, inject, input } from '@angular/core';
import { Card } from '../card/card';
import { PokemonSearchComponent } from "../search/search";
import { Loading } from "../loading/loading";
import { LoadingService } from '../../services/loading.service';

@Component({
  imports: [Card, PokemonSearchComponent, Loading],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {

  pokemonName = '';

  loadingService = inject(LoadingService);

  onPokemonSearched(name: string) {
    this.pokemonName = name;

    console.log(this.pokemonName);
  }
}
