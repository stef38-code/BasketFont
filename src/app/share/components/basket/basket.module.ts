import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieDropDownComponent } from './categorie-drop-down/categorie-drop-down.component';
import {PrimeNgModule} from '../../../app-primeng.module';
import {MaterialModule} from '../../../app-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CategorieDropDownComponent],
  exports: [
    CategorieDropDownComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BasketModule { }
