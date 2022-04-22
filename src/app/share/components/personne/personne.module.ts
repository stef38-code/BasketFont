import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonneCiviliteComponent} from './personne-civilite/personne-civilite.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [PersonneCiviliteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    PersonneCiviliteComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PersonneModule {
}
