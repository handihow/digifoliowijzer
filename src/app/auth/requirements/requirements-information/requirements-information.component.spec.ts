import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsInformationComponent } from './requirements-information.component';

describe('RequirementsInformationComponent', () => {
  let component: RequirementsInformationComponent;
  let fixture: ComponentFixture<RequirementsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementsInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
