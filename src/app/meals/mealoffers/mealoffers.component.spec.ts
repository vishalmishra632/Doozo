import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealoffersComponent } from './mealoffers.component';

describe('MealoffersComponent', () => {
  let component: MealoffersComponent;
  let fixture: ComponentFixture<MealoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealoffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
