import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PokeDataService } from '../../services/poke-data.service';
import { Pokemon } from '../../interfaces';
import { stat } from 'fs';
@Component({
  selector: 'app-poke-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './poke-details.component.html',
  styleUrl: './poke-details.component.css',
  standalone: true
})
export class PokeDetailsComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokeDataService: PokeDataService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.pokeDataService.getPokemonDetails(id).subscribe((data: Pokemon) => {
      const fetchedData = data;
      const pokeTypes = fetchedData.types.map(type => type.type.name)
      const pokeStats = fetchedData.stats.reduce((sum, stat) => sum + stat.base_stat, 0)
      this.pokemon = {
        order: fetchedData.order,
        name: fetchedData.name,
        types: pokeTypes,
        stats: pokeStats,
        sprite: fetchedData.sprites.front_default,
        weight: fetchedData.weight,
        height: fetchedData.height
      };
    })
  }
}
