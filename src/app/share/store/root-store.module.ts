import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {JoueurModule} from './joueur';
import {StoreModule} from '@ngrx/store';
import {joueursReducer} from './joueur/reducers';
import {categoriesReducer} from './categorie/reducers';
import {JoueursStoreEffects} from './joueur/effects';
import {CategoriesStoreEffects} from './categorie/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JoueurModule,
    StoreModule.forFeature('joueurs', joueursReducer),
    StoreModule.forFeature('categories', categoriesReducer),
    EffectsModule.forFeature([JoueursStoreEffects, CategoriesStoreEffects]),
  ]
})
export class RootStoreModule { }
