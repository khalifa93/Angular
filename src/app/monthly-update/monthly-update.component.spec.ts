import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyUpdateComponent } from './monthly-update.component';

describe('MonthlyUpdateComponent', () => {
  let component: MonthlyUpdateComponent;
  let fixture: ComponentFixture<MonthlyUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
