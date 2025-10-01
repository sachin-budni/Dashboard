import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCognitive } from './social-cognitive';

describe('SocialCognitive', () => {
  let component: SocialCognitive;
  let fixture: ComponentFixture<SocialCognitive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialCognitive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCognitive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
