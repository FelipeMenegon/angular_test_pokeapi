import { Component, Input, OnChanges, SimpleChanges, signal, computed } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  styleUrl: './card.scss',
  templateUrl: './card.html',
})
export class Card implements OnChanges {

  @Input() pokeName: string = '';

  pokemon = signal<any>(null);
  pokeImage = signal<string>('');
  pokeid = signal<any>(null);

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokeName'] && this.pokeName) {
      this.getPokemon();
    }
  }

  getPokemon(): void {
    this.pokemonService.getPokemon(this.pokeName).subscribe({
      next: (pokemon: any) => {
        this.pokemon.set(pokemon);
        this.pokeImage.set(pokemon.sprites.other.home.front_default);
        this.pokeid.set(pokemon.id);

        console.log('Pokemon:', pokemon);
      },
      error: (error) => {
        console.error('Pokémon não encontrado:', error);
      }
    });
  }

  primaryType = computed(() => this.pokemon()?.types?.[0]?.type?.name ?? false);
  secondaryType = computed(() => this.pokemon()?.types?.[1]?.type?.name ?? false);
}