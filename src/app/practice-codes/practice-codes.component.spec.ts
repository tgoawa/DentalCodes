import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCodesComponent } from './practice-codes.component';

describe('PracticeCodesComponent', () => {
  let component: PracticeCodesComponent;
  let fixture: ComponentFixture<PracticeCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
