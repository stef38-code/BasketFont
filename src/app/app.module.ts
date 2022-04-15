import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {ShareModule} from './share/share.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from './share/layout/layout.module';
import {HomeModule} from './views/home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from './app-material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ShareModule,
    CoreModule,
    LayoutModule,
    HomeModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelModule,
    MaterialModule,
    NgbModule,
    StoreDevtoolsModule.instrument({
      maxAge: 12, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
