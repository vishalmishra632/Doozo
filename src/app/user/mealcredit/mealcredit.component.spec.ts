import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealcreditComponent } from './mealcredit.component';

describe('MealcreditComponent', () => {
  let component: MealcreditComponent;
  let fixture: ComponentFixture<MealcreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealcreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
