import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {JoueurModule} from './joueur';
import {StoreModule} from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JoueurModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
