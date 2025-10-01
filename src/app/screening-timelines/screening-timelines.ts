import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-screening-timelines',
  imports: [MaterialModule],
  templateUrl: './screening-timelines.html',
  styleUrl: './screening-timelines.scss'
})
export class ScreeningTimelines {
  displayedColumns: string[] = ['details', 'ageGroups', 'period', 'status', 'progress'];

  timelines = [
    {
      name: 'Screening 1',
      children: 1170,
      ageGroups: ['0-1 yrs', '1-2 yrs', '2-3 yrs', '3-4 yrs', '4-5 yrs', '5-6 yrs'],
      period: 'Oct 1 to Jan 31',
      status: 'completed',
      completed: 1109,
      percent: 95
    },
    {
      name: 'Screening 2',
      children: 1164,
      ageGroups: ['0-1 yrs', '1-2 yrs', '2-3 yrs', '3-4 yrs', '4-5 yrs', '5-6 yrs'],
      period: 'Jan 1 to Sep 30',
      status: 'active',
      completed: 964,
      percent: 83
    }
  ];
}
