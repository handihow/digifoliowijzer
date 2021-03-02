import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoscowColumnsSelectorComponent } from './moscow-columns-selector.component';

describe('MoscowColumnsSelectorComponent', () => {
  let component: MoscowColumnsSelectorComponent;
  let fixture: ComponentFixture<MoscowColumnsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoscowColumnsSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoscowColumnsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
