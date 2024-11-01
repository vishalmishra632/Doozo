import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypaymentdetailsComponent } from './mypaymentdetails.component';

describe('MypaymentdetailsComponent', () => {
  let component: MypaymentdetailsComponent;
  let fixture: ComponentFixture<MypaymentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypaymentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
