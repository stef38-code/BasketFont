import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {JoueursStoreEffects} from './effects';
import {joueursReducer} from './reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('joueurs', joueursReducer),
    EffectsModule.forFeature([JoueursStoreEffects]),
  ]
})
export class JoueurModule { }
