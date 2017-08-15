import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {BoschUiAngularRoutingModule} from './bosch-ui-angular-routing.module';
import {BoschDataRangePickerComponent} from './bosch-data-range-picker/bosch-data-range-picker.component';
import {AngularSeedTickTockComponent} from './angular-seed-tick-tock/angular-seed-tick-tock.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TickTockModule} from 'bosch-angular2-ui-library';
import { DemoComponentComponent } from './demo-component/demo-component.component';


@NgModule({
  imports: [
    CommonModule,
    BoschUiAngularRoutingModule,
    TickTockModule.forRoot(),
    NgbModule


  ],
  declarations: [
    BoschDataRangePickerComponent,
    AngularSeedTickTockComponent,
    DemoComponentComponent,


  ]
})
export class BoschUiAngularModule {
}
