import {JoueursStoreState} from './joueur';
import {CategoriesStoreState} from './categorie';

export interface State {
  joueurs: JoueursStoreState.State;
  categories: CategoriesStoreState.State;
}
