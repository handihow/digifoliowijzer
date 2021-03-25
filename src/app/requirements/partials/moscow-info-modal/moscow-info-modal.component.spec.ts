import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoscowInfoModalComponent } from './moscow-info-modal.component';

describe('MoscowInfoModalComponent', () => {
  let component: MoscowInfoModalComponent;
  let fixture: ComponentFixture<MoscowInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoscowInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoscowInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
