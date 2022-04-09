import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipeListeComponent } from './equipe-liste/equipe-liste.component';
import {EquipesRoutingModule} from './equipes-routing.module';



@NgModule({
  declarations: [EquipeListeComponent],
  imports: [
    CommonModule,
    EquipesRoutingModule
  ]
})
export class EquipesModule { }
