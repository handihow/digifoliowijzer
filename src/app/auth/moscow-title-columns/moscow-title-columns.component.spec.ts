import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoscowTitleColumnsComponent } from './moscow-title-columns.component';

describe('MoscowTitleColumnsComponent', () => {
  let component: MoscowTitleColumnsComponent;
  let fixture: ComponentFixture<MoscowTitleColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoscowTitleColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoscowTitleColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
