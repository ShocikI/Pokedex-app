import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDataService } from '../../services/poke-data.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokedex',
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
  standalone: true
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokeDataService: PokeDataService) { }

  ngOnInit(): void {
    this.pokeDataService.getPokemonList().subscribe((data: any) => {
      this.pokemons = data.results
    })
  }
}
