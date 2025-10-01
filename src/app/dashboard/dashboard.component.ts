import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MaterialModule } from '../material.module';
import { ScreeningTimelines } from '../screening-timelines/screening-timelines';
import { Referrals } from '../referrals/referrals';
import { DqChart } from '../dq-chart/dq-chart';
import { DelayChart } from '../delay-chart/delay-chart';
import { FilterCards } from '../filter-cards/filter-cards';
import { Assessments } from '../assessments/assessments';
import { ChildrenDemographics } from '../children-demographics/children-demographics';
import { AnganwadiLocations } from '../anganwadi-locations/anganwadi-locations';
import { SocialCognitive } from '../social-cognitive/social-cognitive';
import { MotorLanguage } from '../motor-language/motor-language';
import { DistributionBreakdown } from '../distribution-breakdown/distribution-breakdown';
import { AgeGroupKey } from '../age-group-key/age-group-key';
import { SkillsBreakdown } from '../skills-breakdown/skills-breakdown';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    MaterialModule,
    ScreeningTimelines,
    Referrals,
    DqChart,
    DelayChart,
    FilterCards,
    Assessments,
    ChildrenDemographics,
    AnganwadiLocations,
    SocialCognitive,
    MotorLanguage,
    DistributionBreakdown,
    AgeGroupKey,
    SkillsBreakdown
  ]
})
export class DashboardComponent {
  // Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: { type: 'column' },
    title: { text: 'Sample Development Metrics' },
    xAxis: { categories: ['Social', 'Cognitive', 'Motor', 'Language'] },
    yAxis: { title: { text: 'Count' } },
    series: [{
      type: 'column',
      name: 'Completed',
      data: [5, 7, 3, 9]
    }, {
      type: 'column',
      name: 'Pending',
      data: [2, 3, 4, 1]
    }]
  };

  topCards = [
    {
      name: 'Anganwadis',
      value: 25,
      icon: 'home'
    },
    {
      name: 'Children',
      value: 1170,
      icon: 'group'
    },
    {
      name: 'Screening Timelines',
      value: 2,
      icon: 'calendar_today'
    },
    {
      name: 'Assessments',
      value: 2069,
      icon: 'finance_mode'
    },
  ];
  singleIcon = [
    {
      value: 835,
      name: "Children Screened"
    },
    {
      value: '65%',
      name: "Recovery Rate"
    },
    {
      value: 25,
      name: "AWC Centers"
    }
  ]
}
