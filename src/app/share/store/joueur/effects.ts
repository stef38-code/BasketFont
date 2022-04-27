import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import * as featureActions from './actions';
import {JoueursService} from '../../../core/service';


@Injectable()
export class JoueursStoreEffects {
  constructor(private dataService: JoueursService, private actions$: Actions) {
  }

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new featureActions.LoadRequestAction()),
    switchMap(action =>
      this.dataService
        .get()
        .pipe(
          map(
            items  =>
            {
              /*console.log("reponse", items);*/
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
