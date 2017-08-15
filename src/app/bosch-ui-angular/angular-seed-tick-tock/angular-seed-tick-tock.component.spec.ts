import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSeedTickTockComponent } from './angular-seed-tick-tock.component';

describe('AngularSeedTickTockComponent', () => {
  let component: AngularSeedTickTockComponent;
  let fixture: ComponentFixture<AngularSeedTickTockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSeedTickTockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSeedTickTockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
