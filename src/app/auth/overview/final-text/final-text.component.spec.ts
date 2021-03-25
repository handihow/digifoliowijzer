import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalTextComponent } from './final-text.component';

describe('FinalTextComponent', () => {
  let component: FinalTextComponent;
  let fixture: ComponentFixture<FinalTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
