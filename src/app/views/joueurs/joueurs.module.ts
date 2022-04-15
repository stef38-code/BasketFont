import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JoueurListeComponent} from './joueur-liste/joueur-liste.component';
import {JoueursRoutingModule} from './joueurs-routing.module';
import {TableModule} from 'primeng/table';
import {MaterialModule} from '../../app-material.module';
import {JoueurEditComponent} from './joueur-edit/joueur-edit.component';


@NgModule({
  declarations: [JoueurListeComponent, JoueurEditComponent],
  imports: [
    CommonModule,
    JoueursRoutingModule,
    TableModule,
    MaterialModule
  ]
})
export class JoueursModule { }
