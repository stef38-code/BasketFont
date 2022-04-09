import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EquipeListeComponent} from './equipe-liste/equipe-liste.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', component: EquipeListeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
