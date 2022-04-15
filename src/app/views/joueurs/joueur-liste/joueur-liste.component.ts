import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Joueur} from '../../../share/dto';
import {Observable} from 'rxjs';
import {JoueursService} from '../../../core/service';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {Store} from '@ngrx/store';
import {JoueursStoreActions, JoueursStoreSelectors, JoueursStoreState} from '../../../share/store/joueur';
import {Table} from 'primeng/table';
import {JoueurEditComponent} from '../joueur-edit/joueur-edit.component';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-joueur-liste',
  templateUrl: './joueur-liste.component.html',
  styleUrls: ['./joueur-liste.component.scss'],
  providers: [DialogService, MessageService]
})
export class JoueurListeComponent implements OnInit, OnDestroy {
  ref: DynamicDialogRef;

  myFeatureItems$: Observable<Joueur[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  joueurs: Joueur[];
  loading: boolean;
  cols;
  @ViewChild('dt') table: Table;
  selectedCustomers: any;

  constructor(
    private customerService: JoueursService,
    private primengConfig: PrimeNGConfig,
    private store$: Store<JoueursStoreState.State>,
    public dialogService: DialogService,
    public messageService: MessageService
  ) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'nom', header: 'Nom'},
      {field: 'prenom', header: 'Prenom'},
      {field: 'sexe', header: 'Sexe'},
      {field: 'dnaissance', header: 'Date naissance'},
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
    });
    this.isLoading$.subscribe(loading => this.loading = loading);
    this.store$.dispatch(
      new JoueursStoreActions.LoadRequestAction()
    );
  }

  selectProduct(userElement: Joueur): void {
    console.log(userElement);
    this.ref = this.dialogService.open(JoueurEditComponent, {
      header: 'Edite une personne',
      width: '50%',
      contentStyle: {'max-height': '500px', overflow: 'auto'},
      baseZIndex: 10000,
      data: {userElement}
    });

    /*this.ref.onClose.subscribe((product: Product) =>{
      if (product) {
        this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
      }
    });*/
  }

  clear(table: Table): void {
    table.clear();

  }

  find(dt: Table, $event: Event): void {
    dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
