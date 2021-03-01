import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoscowSliderComponent } from './moscow-slider.component';

describe('MoscowSliderComponent', () => {
  let component: MoscowSliderComponent;
  let fixture: ComponentFixture<MoscowSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoscowSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoscowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
