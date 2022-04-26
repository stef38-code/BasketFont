import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Categorie, Joueur} from '../../dto';


export const featureAdapter: EntityAdapter<Categorie> = createEntityAdapter<Categorie>({
  selectId: model => model.id,
  sortComparer: (a: Categorie, b: Categorie): number =>
    a.id > b.id ? 1 : -1
});

export interface State extends EntityState<Categorie> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
