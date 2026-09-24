import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  signal,
  computed,
  inject,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';

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
  showPokemonCard = signal<boolean>(true);
  loadingService = inject(LoadingService);

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
        this.showPokemonCard.set(true);

        console.log('Pokemon:', pokemon);
      },
      error: (error) => {
        console.error('Pokémon não encontrado:', error);
      },
    });
  }

  formatPokemonName(name: string): string {
    return name.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  closePokemonCard() {
    this.showPokemonCard.set(false);
    this.pokemon.set(null);
    this.pokeImage.set('');
    this.pokeid.set(null);
  }

  primaryType = computed(() => this.pokemon()?.types?.[0]?.type?.name ?? false);
  secondaryType = computed(() => this.pokemon()?.types?.[1]?.type?.name ?? false);
}
