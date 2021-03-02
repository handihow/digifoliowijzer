import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsPageThreeComponent } from './questions-page-three.component';

describe('QuestionsPageThreeComponent', () => {
  let component: QuestionsPageThreeComponent;
  let fixture: ComponentFixture<QuestionsPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsPageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
