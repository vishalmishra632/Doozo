import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymealplanComponent } from './mymealplan.component';

describe('MymealplanComponent', () => {
  let component: MymealplanComponent;
  let fixture: ComponentFixture<MymealplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymealplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymealplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
