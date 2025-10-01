import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorLanguage } from './motor-language';

describe('MotorLanguage', () => {
  let component: MotorLanguage;
  let fixture: ComponentFixture<MotorLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
