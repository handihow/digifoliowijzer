import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPageFiveComponent } from './questions-page-five.component';

describe('QuestionsPageFiveComponent', () => {
  let component: QuestionsPageFiveComponent;
  let fixture: ComponentFixture<QuestionsPageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsPageFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
