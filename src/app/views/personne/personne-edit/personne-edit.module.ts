import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonneEditComponent } from './personne-edit.component';
import {PersonneEditRoutingModule} from './personne-edit-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ShareModule} from '../../../share/share.module';
import {MaterialModule} from '../../../app-material.module';



@NgModule({
  declarations: [PersonneEditComponent],
  imports: [
    CommonModule,
    PersonneEditRoutingModule,
    ReactiveFormsModule,
    ShareModule,
    MaterialModule
  ]
})
export class PersonneEditModule { }
