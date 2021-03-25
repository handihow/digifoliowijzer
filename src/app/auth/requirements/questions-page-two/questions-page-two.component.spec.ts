import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPageTwoComponent } from './questions-page-two.component';

describe('QuestionsPageTwoComponent', () => {
  let component: QuestionsPageTwoComponent;
  let fixture: ComponentFixture<QuestionsPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
