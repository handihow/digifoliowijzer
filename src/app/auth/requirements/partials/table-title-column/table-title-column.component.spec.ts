import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTitleColumnComponent } from './table-title-column.component';

describe('TableTitleColumnComponent', () => {
  let component: TableTitleColumnComponent;
  let fixture: ComponentFixture<TableTitleColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTitleColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTitleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
