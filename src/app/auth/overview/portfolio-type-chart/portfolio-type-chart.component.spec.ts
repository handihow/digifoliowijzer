import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTypeChartComponent } from './portfolio-type-chart.component';

describe('PortfolioTypeChartComponent', () => {
  let component: PortfolioTypeChartComponent;
  let fixture: ComponentFixture<PortfolioTypeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioTypeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
