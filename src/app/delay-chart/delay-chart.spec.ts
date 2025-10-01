import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayChart } from './delay-chart';

describe('DelayChart', () => {
  let component: DelayChart;
  let fixture: ComponentFixture<DelayChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
