import {Component, OnInit, ViewChild} from '@angular/core';
import {Joueur} from '../../../share/dto';
import {Observable} from 'rxjs';
import {JoueursService} from '../../../core/service';
import {PrimeNGConfig} from 'primeng/api';
import {Store} from '@ngrx/store';
import {JoueursStoreActions, JoueursStoreSelectors, JoueursStoreState} from '../../../share/store/joueur';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-joueur-liste',
  templateUrl: './joueur-liste.component.html',
  styleUrls: ['./joueur-liste.component.css']
})
export class JoueurListeComponent implements OnInit {

  myFeatureItems$: Observable<Joueur[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  joueurs: Joueur[];
  loading: boolean;
  cols;
  @ViewChild('dt') table: Table;
  selectedCustomers: any;

  constructor(
    private customerService: JoueursService, private primengConfig: PrimeNGConfig,
    private store$: Store<JoueursStoreState.State>
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'nom', header: 'Nom' },
      { field: 'prenom', header: 'Prenom' },
    ];
    this.myFeatureItems$ = this.store$.select(
      JoueursStoreSelectors.selectAll
    );

    this.error$ = this.store$.select(
      JoueursStoreSelectors.selectJoueursError
    );

    this.isLoading$ = this.store$.select(
      JoueursStoreSelectors.selectJoueursIsLoading
    );
    this.myFeatureItems$.subscribe(values => {
      this.joueurs = values;
      console.log('LOADING JOUEURS......', this.joueurs.length);
    });
    this.isLoading$.subscribe(loading => this.loading = loading);
    this.store$.dispatch(
      new JoueursStoreActions.LoadRequestAction()
    );
  }

  selectProduct(userElement: any): void {
    console.log(userElement);
  }

  clear(table: Table): void {
    table.clear();
  }
}
