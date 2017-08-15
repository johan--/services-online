import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TickTockModule} from 'bosch-angular2-ui-library';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {InternalLayoutComponent} from './core/internal-layout/internal-layout.component';
import {HomeComponent} from './core/home/home.component';
import {ExternalLayoutComponent} from './core/external-layout/external-layout.component';
import {ErrorComponent} from './core/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    InternalLayoutComponent,
    HomeComponent,
    ExternalLayoutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TickTockModule.forRoot(),
    NgbModule.forRoot(),
    TranslateModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
