import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenDemographics } from './children-demographics';

describe('ChildrenDemographics', () => {
  let component: ChildrenDemographics;
  let fixture: ComponentFixture<ChildrenDemographics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildrenDemographics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenDemographics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
