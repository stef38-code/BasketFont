import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import {RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {LayoutModule} from './share/layout/layout.module';
import {HomeModule} from './views/home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FlexLayoutModule,
    ShareModule,
    CoreModule,
    LayoutModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
