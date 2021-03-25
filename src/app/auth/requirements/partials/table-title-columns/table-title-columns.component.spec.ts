import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTitleColumnsComponent } from './table-title-columns.component';

describe('TableTitleColumnsComponent', () => {
  let component: TableTitleColumnsComponent;
  let fixture: ComponentFixture<TableTitleColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTitleColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTitleColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
