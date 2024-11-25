import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';

export const routes: Routes = [
    { path: '', component: PokedexComponent },
    { path: 'pokemon/:id', component: PokeDetailsComponent }
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }