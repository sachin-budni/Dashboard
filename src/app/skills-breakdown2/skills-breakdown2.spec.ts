import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBreakdown2 } from './skills-breakdown2';

describe('SkillsBreakdown2', () => {
  let component: SkillsBreakdown2;
  let fixture: ComponentFixture<SkillsBreakdown2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsBreakdown2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsBreakdown2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
