import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPageOneComponent } from './questions-page-one.component';

describe('QuestionsPageOneComponent', () => {
  let component: QuestionsPageOneComponent;
  let fixture: ComponentFixture<QuestionsPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
