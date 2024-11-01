import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmealreviewComponent } from './addmealreview.component';

describe('AddmealreviewComponent', () => {
  let component: AddmealreviewComponent;
  let fixture: ComponentFixture<AddmealreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmealreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmealreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
