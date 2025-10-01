import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationStatusChart } from './verification-status-chart';

describe('VerificationStatusChart', () => {
  let component: VerificationStatusChart;
  let fixture: ComponentFixture<VerificationStatusChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationStatusChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationStatusChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
