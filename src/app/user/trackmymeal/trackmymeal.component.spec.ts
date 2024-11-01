import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackmymealComponent } from './trackmymeal.component';

describe('TrackmymealComponent', () => {
  let component: TrackmymealComponent;
  let fixture: ComponentFixture<TrackmymealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackmymealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackmymealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
