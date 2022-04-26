import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import * as featureActions from './actions';
import {CategoriesService} from '../../../core/service';

@Injectable()
export class CategoriesStoreEffects {
  constructor(private dataService: CategoriesService, private actions$: Actions) {
  }

  @Effect()
  loadCategorieRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypesCategorie.LOAD_REQUEST
    ),
    startWith(new featureActions.LoadRequestAction()),
    switchMap(action =>
      this.dataService
        .get()
        .pipe(
          map(
            items  =>
            {
              console.log("reponse", items);
              return new featureActions.LoadSuccessAction({items} );
            }
          ),
          catchError(error =>
            observableOf(new featureActions.LoadFailureAction( error ))
          )
        )
    )
  );

}
