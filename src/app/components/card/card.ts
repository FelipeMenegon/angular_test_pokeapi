import { Component, Input } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  styleUrl: './card.scss',
  templateUrl: './card.html',
})
export class Card {
  @Input() pokeName: string = 'blastoise';
  @Input() pokeImage: string = '';

  pokemon: any;

  constructor(private pokemonService: PokemonService) {}

  getPokemon() {
    this.pokemonService.getPokemon(this.pokeName).subscribe((pokemon: any) => {
      this.pokemon = pokemon;
      this.pokeImage = pokemon.sprites.other.home.front_default;

      console.log('Pokemon:', this.pokemon);
      console.log('Tipo:', this.primaryType);
    });
  }

  get primaryType(): string {
    return this.pokemon?.types?.[0]?.type?.name ?? 'normal';
  }
}
