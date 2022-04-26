import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonneCiviliteComponent} from './personne-civilite/personne-civilite.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../app-material.module';


@NgModule({
  declarations: [PersonneCiviliteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    PersonneCiviliteComponent
  ]
/*  ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],*/
})
export class PersonneModule {
}
