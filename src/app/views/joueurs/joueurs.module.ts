import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoueurListeComponent } from './joueur-liste/joueur-liste.component';
import {JoueursRoutingModule} from './joueurs-routing.module';



@NgModule({
  declarations: [JoueurListeComponent],
  imports: [
    CommonModule,
    JoueursRoutingModule
  ]
})
export class JoueursModule { }
