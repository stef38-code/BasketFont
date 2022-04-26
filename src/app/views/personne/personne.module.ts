import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonneComponent} from './personne.component';
import {PersonneRoutingModule} from './personne-routing.module';
import {ShareModule} from '../../share/share.module';
import {TableModule} from 'primeng/table';
import {MaterialModule} from '../../app-material.module';
import {PanelModule} from 'primeng/panel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {BasketModule} from '../../share/components/basket/basket.module';

const PERSONNE_MODULES = [ PersonneComponent];

@NgModule({
  imports: [
    CommonModule,
    PersonneRoutingModule,
    ShareModule,
    TableModule,
    MaterialModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    AccordionModule,
    BasketModule,
  ],
  exports: [
    ...PERSONNE_MODULES
  ],
  declarations: [
    ...PERSONNE_MODULES
  ],
})
export class PersonneModule { }
