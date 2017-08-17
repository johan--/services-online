import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InternalLayoutComponent } from './internal-layout/internal-layout.component';
import { ExternalLayoutComponent } from './external-layout/external-layout.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    InternalLayoutComponent,
    ExternalLayoutComponent,
    TopNavComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
