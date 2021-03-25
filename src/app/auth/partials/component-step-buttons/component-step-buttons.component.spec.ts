import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStepButtonsComponent } from './component-step-buttons.component';

describe('ComponentStepButtonsComponent', () => {
  let component: ComponentStepButtonsComponent;
  let fixture: ComponentFixture<ComponentStepButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentStepButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentStepButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
