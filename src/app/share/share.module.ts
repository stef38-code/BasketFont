import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule} from './layout';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RootStoreModule} from './store/root-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RootStoreModule
  ]
})
export class ShareModule { }
