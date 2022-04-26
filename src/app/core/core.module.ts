import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JoueursService} from './service';
import {CategoriesService} from './service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [JoueursService, CategoriesService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Vous devez importer le module principal uniquement dans le module racine');
    }
  }
}
