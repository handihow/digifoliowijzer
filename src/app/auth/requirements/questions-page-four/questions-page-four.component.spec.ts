import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPageFourComponent } from './questions-page-four.component';

describe('QuestionsPageFourComponent', () => {
  let component: QuestionsPageFourComponent;
  let fixture: ComponentFixture<QuestionsPageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsPageFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
