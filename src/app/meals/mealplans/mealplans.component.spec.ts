import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplansComponent } from './mealplans.component';

describe('MealplansComponent', () => {
  let component: MealplansComponent;
  let fixture: ComponentFixture<MealplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealplansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
