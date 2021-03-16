import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoscowTitleColumnComponent } from './moscow-title-column.component';

describe('MoscowTitleColumnComponent', () => {
  let component: MoscowTitleColumnComponent;
  let fixture: ComponentFixture<MoscowTitleColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoscowTitleColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoscowTitleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
