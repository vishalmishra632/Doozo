import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletsdeatilsComponent } from './outletsdeatils.component';

describe('OutletsdeatilsComponent', () => {
  let component: OutletsdeatilsComponent;
  let fixture: ComponentFixture<OutletsdeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletsdeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletsdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
