import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreturnsComponent } from './myreturns.component';

describe('MyreturnsComponent', () => {
  let component: MyreturnsComponent;
  let fixture: ComponentFixture<MyreturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyreturnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyreturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
