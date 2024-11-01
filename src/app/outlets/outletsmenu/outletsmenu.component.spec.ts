import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletsmenuComponent } from './outletsmenu.component';

describe('OutletsmenuComponent', () => {
  let component: OutletsmenuComponent;
  let fixture: ComponentFixture<OutletsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletsmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
