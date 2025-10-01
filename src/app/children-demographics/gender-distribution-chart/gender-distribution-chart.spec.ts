import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderDistributionChart } from './gender-distribution-chart';

describe('GenderDistributionChart', () => {
  let component: GenderDistributionChart;
  let fixture: ComponentFixture<GenderDistributionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderDistributionChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderDistributionChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
