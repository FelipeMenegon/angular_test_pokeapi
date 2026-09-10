import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-search',
  styleUrl: './search.scss',
  templateUrl: './search.html',
})
export class PokemonSearchComponent {
  pokemonName = '';

  @Output() pokemonSearched = new EventEmitter<string>();

  onSearch() {
    this.pokemonSearched.emit(this.pokemonName);
  }
}
