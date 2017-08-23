import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InternalLayoutComponent } from './internal-layout/internal-layout.component';
import { ExternalLayoutComponent } from './external-layout/external-layout.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ErrorComponent } from './error/error.component';
import { FootNavComponent } from './foot-nav/foot-nav.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    TranslateModule
  ],
  declarations: [
    HomeComponent,
    InternalLayoutComponent,
    ExternalLayoutComponent,
    TopNavComponent,
    ErrorComponent,
    FootNavComponent
  ]
})
export class CoreModule { }
