import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCodesTableComponent } from './practice-codes-table.component';

describe('PracticeCodesTableComponent', () => {
  let component: PracticeCodesTableComponent;
  let fixture: ComponentFixture<PracticeCodesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeCodesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeCodesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
