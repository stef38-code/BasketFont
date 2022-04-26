import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonneModule} from './personne/personne.module';
import {BasketModule} from './basket/basket.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonneModule,
    BasketModule
  ],
  exports: [PersonneModule, BasketModule]
/*  ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],*/
})
export class ComponentsModule {
}
