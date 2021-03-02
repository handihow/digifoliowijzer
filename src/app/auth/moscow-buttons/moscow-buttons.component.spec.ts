import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoscowButtonsComponent } from './moscow-buttons.component';

describe('MoscowSliderComponent', () => {
  let component: MoscowButtonsComponent;
  let fixture: ComponentFixture<MoscowButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoscowButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoscowButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
