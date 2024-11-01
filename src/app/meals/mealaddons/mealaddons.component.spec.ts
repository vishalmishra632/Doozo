import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealaddonsComponent } from './mealaddons.component';

describe('MealaddonsComponent', () => {
  let component: MealaddonsComponent;
  let fixture: ComponentFixture<MealaddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealaddonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealaddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
