import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealbagComponent } from './mealbag.component';

describe('MealbagComponent', () => {
  let component: MealbagComponent;
  let fixture: ComponentFixture<MealbagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealbagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
