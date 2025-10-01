import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenAgeGroupChart } from './children-age-group-chart';

describe('ChildrenAgeGroupChart', () => {
  let component: ChildrenAgeGroupChart;
  let fixture: ComponentFixture<ChildrenAgeGroupChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenAgeGroupChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenAgeGroupChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
