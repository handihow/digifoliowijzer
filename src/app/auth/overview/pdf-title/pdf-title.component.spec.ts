import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfTitleComponent } from './pdf-title.component';

describe('PdfTitleComponent', () => {
  let component: PdfTitleComponent;
  let fixture: ComponentFixture<PdfTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
