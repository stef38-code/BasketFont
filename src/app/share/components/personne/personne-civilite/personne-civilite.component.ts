import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-personne-civilite',
  templateUrl: './personne-civilite.component.html',
  styleUrls: ['./personne-civilite.component.css']
})
export class PersonneCiviliteComponent implements OnInit {
  @Input() inputFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
