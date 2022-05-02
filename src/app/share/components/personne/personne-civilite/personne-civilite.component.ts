import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-personne-civilite',
  templateUrl: './personne-civilite.component.html',
  styleUrls: ['./personne-civilite.component.css']
})
export class PersonneCiviliteComponent implements OnInit {
  @Input() inputFormGroup: FormGroup;
  date1: FormControl;

  constructor() {

  }

  ngOnInit(): void {
    console.log('inputFormGroup:', this.inputFormGroup);
    console.log('dnaissance:', this.inputFormGroup.get('dnaissance').value);
    console.log('dnaissance:', typeof this.inputFormGroup.get('dnaissance'));
    this.date1 = this.inputFormGroup.get('dnaissance') as FormControl;
    console.log('date1', this.date1);
    this.date1.setValue(new Date('31/12/2021'));
    console.log('date1', this.date1);
  }

}
