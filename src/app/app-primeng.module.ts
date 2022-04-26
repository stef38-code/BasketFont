import {NgModule} from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';

const PRIMENG_MODULES = [DropdownModule];
@NgModule({
  imports: [...PRIMENG_MODULES],
  declarations: [],
  exports: [...PRIMENG_MODULES]
})
export class PrimeNgModule {
}
