import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionBreakdown } from './distribution-breakdown';

describe('DistributionBreakdown', () => {
  let component: DistributionBreakdown;
  let fixture: ComponentFixture<DistributionBreakdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributionBreakdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionBreakdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
