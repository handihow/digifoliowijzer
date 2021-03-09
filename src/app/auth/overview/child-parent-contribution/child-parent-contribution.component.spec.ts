import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildParentContributionComponent } from './child-parent-contribution.component';

describe('ChildParentContributionComponent', () => {
  let component: ChildParentContributionComponent;
  let fixture: ComponentFixture<ChildParentContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildParentContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildParentContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
