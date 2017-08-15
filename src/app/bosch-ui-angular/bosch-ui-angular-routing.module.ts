import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoschDataRangePickerComponent} from './bosch-data-range-picker/bosch-data-range-picker.component';
import {AngularSeedTickTockComponent} from './angular-seed-tick-tock/angular-seed-tick-tock.component';

const routes: Routes = [
  {
    path: 'bosch-data-range-picker',
    component: BoschDataRangePickerComponent,
    data: {
      title: 'Bosch-data-range-picker'
    }
  },
  {
    path: 'tick-tock',
    component: AngularSeedTickTockComponent,
    data: {
      title: 'Tick-Tock'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoschUiAngularRoutingModule { }
