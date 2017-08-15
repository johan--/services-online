import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoschDataRangePickerComponent } from './bosch-data-range-picker.component';

describe('BoschDataRangePickerComponent', () => {
  let component: BoschDataRangePickerComponent;
  let fixture: ComponentFixture<BoschDataRangePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoschDataRangePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoschDataRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
