import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoueurListeComponent } from './joueur-liste/joueur-liste.component';
import {JoueursRoutingModule} from './joueurs-routing.module';
import {TableModule} from 'primeng/table';
import {MaterialModule} from '../../app-material.module';


@NgModule({
  declarations: [JoueurListeComponent],
    imports: [
        CommonModule,
        JoueursRoutingModule,
      TableModule,
      MaterialModule
   ]
})
export class JoueursModule { }
