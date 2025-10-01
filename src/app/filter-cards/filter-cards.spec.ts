import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCards } from './filter-cards';

describe('FilterCards', () => {
  let component: FilterCards;
  let fixture: ComponentFixture<FilterCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
