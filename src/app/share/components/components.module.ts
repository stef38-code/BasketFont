import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonneModule} from './personne/personne.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonneModule
  ],
  exports: [PersonneModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {
}
