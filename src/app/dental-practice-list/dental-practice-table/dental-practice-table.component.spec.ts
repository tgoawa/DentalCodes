import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalPracticeTableComponent } from './dental-practice-table.component';

describe('DentalPracticeTableComponent', () => {
  let component: DentalPracticeTableComponent;
  let fixture: ComponentFixture<DentalPracticeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalPracticeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalPracticeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
