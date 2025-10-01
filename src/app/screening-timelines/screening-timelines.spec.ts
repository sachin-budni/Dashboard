import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningTimelines } from './screening-timelines';

describe('ScreeningTimelines', () => {
  let component: ScreeningTimelines;
  let fixture: ComponentFixture<ScreeningTimelines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningTimelines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreeningTimelines);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
