import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import {Joueur} from '../../../share/dto';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-joueur-edit',
  templateUrl: './joueur-edit.component.html',
  styleUrls: ['./joueur-edit.component.css']
})
export class JoueurEditComponent implements OnInit {
  public personForm: FormGroup;
  joueur: Joueur;

  constructor(public config: DynamicDialogConfig, private fb: FormBuilder) {
    this.joueur = this.config.data.userElement;
    this.personForm = this.fb.group({
      id: [],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dnaissance: ['', Validators.required],
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
    console.log(this.joueur);
    this.personForm.setValue(this.joueur);
  }

  ngOnInit(): void {
  }

}
