import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferEarnMealsComponent } from './reffer-earn-meals.component';

describe('RefferEarnMealsComponent', () => {
  let component: RefferEarnMealsComponent;
  let fixture: ComponentFixture<RefferEarnMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefferEarnMealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefferEarnMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
