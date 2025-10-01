import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBreakdown } from './skills-breakdown';

describe('SkillsBreakdown', () => {
  let component: SkillsBreakdown;
  let fixture: ComponentFixture<SkillsBreakdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsBreakdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsBreakdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
