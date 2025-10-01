import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DqChart } from './dq-chart';

describe('DqChart', () => {
  let component: DqChart;
  let fixture: ComponentFixture<DqChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DqChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DqChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
