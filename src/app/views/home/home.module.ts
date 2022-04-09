import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardModule} from './dashboard/dashboard.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule
  ],
  exports: [
    DashboardModule
  ]
})
export class HomeModule {
}
