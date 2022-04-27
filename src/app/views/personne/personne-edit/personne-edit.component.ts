import {Component, OnDestroy, OnInit} from '@angular/core';
import {Joueur} from '../../../share/dto';
import {Store} from '@ngrx/store';
import {JoueursStoreSelectors, JoueursStoreState} from '../../../share/store/joueur';
import {Observable, Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-personne-edit',
  templateUrl: './personne-edit.component.html',
  styleUrls: ['./personne-edit.component.css']
})
export class PersonneEditComponent implements OnInit, OnDestroy {
  joueurObservable$: Observable<Joueur>;
  idObservable$: Observable<number>;
  joueur: Joueur ;
   /* = {
    FIELD20: '',
    FIELD21: '',
    FIELD22: '',
    adresse: '',
    catgeorie: 0,
    cp: '',
    dnaissance: '',
    domicile: '',
    email: '',
    emailmeremineur: '',
    emailperemineur: '',
    nlicence: '',
    nom: '',
    portable: '',
    prenom: '',
    pro: '',
    sexe: '',
    taille: '',
    telmeremineur: '',
    telperemineur: '',
    ville: '',
    id: null
  };*/
  id: number | null;

  public personForm: FormGroup;
  private subJoueur: Subscription;
  private subId: Subscription;

  constructor(private store$: Store<JoueursStoreState.State>,
              private fb: FormBuilder) {
    this.personForm = this.fb.group({
      id: [],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dnaissance: [''],
      sexe: ['', Validators.required],
      nlicence: ['', Validators.required],
      catgeorie: ['', Validators.required],
      adresse: ['', Validators.required],
      cp: ['', Validators.required],
      ville: ['', Validators.required],
      taille: ['', Validators.required],
      email: ['', Validators.required],
      portable: ['', Validators.required],
      domicile: ['', Validators.required],
      pro: ['', Validators.required],
      telmeremineur: ['', Validators.required],
      emailmeremineur: ['', Validators.required],
      telperemineur: ['', Validators.required],
      emailperemineur: ['', Validators.required],
      FIELD20: ['', Validators.required],
      FIELD21: ['', Validators.required],
      FIELD22: ['', Validators.required]
    });

    this.idObservable$ = this.store$.select(
      JoueursStoreSelectors.getIDJoueursSelected
    );

  }


  ngOnInit(): void {

    this.subId = this.idObservable$.subscribe(
      id => {
        this.id = id;
      }
    );
    this.joueurObservable$ = this.store$.select(
      JoueursStoreSelectors.selectById(this.id)
    );
    this.subJoueur = this.joueurObservable$.subscribe(joueur => {
      this.joueur = joueur;
      if (this.id) {
        this.personForm.setValue(this.joueur);
      }
    });
  }

  ngOnDestroy(): void {
    this.subJoueur.unsubscribe();
    this.subId.unsubscribe();
  }
}
