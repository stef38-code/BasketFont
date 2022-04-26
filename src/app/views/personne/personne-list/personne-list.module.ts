import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PersonneListRoutingModule} from './personne-list-routing.module';
import { PersonneListComponent } from './personne-list.component';
import {MaterialModule} from '../../../app-material.module';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [PersonneListComponent],
  imports: [
    CommonModule,
    PersonneListRoutingModule,
    MaterialModule,
    TableModule
  ]
})
export class PersonneListModule { }
