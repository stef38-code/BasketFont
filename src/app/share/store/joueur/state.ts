import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {Joueur} from '../../dto';


export const featureAdapter: EntityAdapter<Joueur> = createEntityAdapter<Joueur>({
  selectId: model => model.id,
  sortComparer: (a: Joueur, b: Joueur): number =>
    a.id > b.id ? 1 : -1
});

export interface State extends EntityState<Joueur> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
