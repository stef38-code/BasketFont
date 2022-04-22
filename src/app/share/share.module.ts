import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from './layout';
import {RootStoreModule} from './store/root-store.module';
import {ComponentsModule} from './components/components.module';

const SHARE_MODULES = [
  LayoutModule,
  RootStoreModule,
  ComponentsModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SHARE_MODULES
  ],
  exports: SHARE_MODULES,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShareModule { }
