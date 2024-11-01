import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfavoritemealComponent } from './myfavoritemeal.component';

describe('MyfavoritemealComponent', () => {
  let component: MyfavoritemealComponent;
  let fixture: ComponentFixture<MyfavoritemealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfavoritemealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyfavoritemealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
