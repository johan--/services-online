import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InternalLayoutComponent} from './core/internal-layout/internal-layout.component';
import {HomeComponent} from './core/home/home.component';
import {ExternalLayoutComponent} from './core/external-layout/external-layout.component';
import {ErrorComponent} from './core/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: InternalLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'demo',
        loadChildren: 'app/bosch-ui-angular/bosch-ui-angular.module#BoschUiAngularModule',
        data: {
          title: 'Demo'
        }
      }
    ]

  },
  {
    path: '',
    component: ExternalLayoutComponent,
    children: [
      {
        path: 'error/:error',
        component: ErrorComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
