import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeGroupKey } from './age-group-key';

describe('AgeGroupKey', () => {
  let component: AgeGroupKey;
  let fixture: ComponentFixture<AgeGroupKey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeGroupKey]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeGroupKey);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
