import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycouponsComponent } from './mycoupons.component';

describe('MycouponsComponent', () => {
  let component: MycouponsComponent;
  let fixture: ComponentFixture<MycouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycouponsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MycouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
