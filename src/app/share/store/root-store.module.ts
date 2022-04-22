import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {JoueurModule} from './joueur';
import {StoreModule} from '@ngrx/store';
import {joueursReducer} from './joueur/reducers';
import {JoueursStoreEffects} from './joueur/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JoueurModule,
    StoreModule.forFeature('joueurs', joueursReducer),
    EffectsModule.forFeature([JoueursStoreEffects]),
  ]
})
export class RootStoreModule { }
