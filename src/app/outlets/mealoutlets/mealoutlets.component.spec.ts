import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealoutletsComponent } from './mealoutlets.component';

describe('MealoutletsComponent', () => {
  let component: MealoutletsComponent;
  let fixture: ComponentFixture<MealoutletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealoutletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealoutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
