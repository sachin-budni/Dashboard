import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DqChart2 } from './dq-chart2';

describe('DqChart2', () => {
  let component: DqChart2;
  let fixture: ComponentFixture<DqChart2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DqChart2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DqChart2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
