import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnganwadiLocations } from './anganwadi-locations';

describe('AnganwadiLocations', () => {
  let component: AnganwadiLocations;
  let fixture: ComponentFixture<AnganwadiLocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnganwadiLocations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnganwadiLocations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
