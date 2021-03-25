import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanColumnsSelectorComponent } from './boolean-columns-selector.component';

describe('BooleanColumnsSelectorComponent', () => {
  let component: BooleanColumnsSelectorComponent;
  let fixture: ComponentFixture<BooleanColumnsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooleanColumnsSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanColumnsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
