import { Component } from '@angular/core';
import { GenderDistributionChart } from './gender-distribution-chart/gender-distribution-chart';
import { ChildrenAgeGroupChart } from './children-age-group-chart/children-age-group-chart';
import { VerificationStatusChart } from './verification-status-chart/verification-status-chart';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-children-demographics',
  imports: [MaterialModule,GenderDistributionChart, ChildrenAgeGroupChart, VerificationStatusChart],
  templateUrl: './children-demographics.html',
  styleUrl: './children-demographics.scss'
})
export class ChildrenDemographics {

}
