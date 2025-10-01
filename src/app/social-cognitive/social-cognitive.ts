import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-social-cognitive',
  imports: [MaterialModule, HighchartsChartComponent],
  templateUrl: './social-cognitive.html',
  styleUrl: './social-cognitive.scss'
})
export class SocialCognitive {

  socialEmotionalChart: any = {
    chart: { type: 'column' },
    title: { text: 'Social Emotional' },
    xAxis: {
      categories: ['Not Assessed', 'Critical', 'Severe', 'Moderate', 'Mild', 'None'],
    },
    yAxis: {
      min: 0,
      title: { text: '' }
    },
    series: [{
      name: 'Assessments',
      type: 'column',
      data: [32, 6, 10, 29, 257, 1746],
      colorByPoint: true
    }]
  };

  cognitiveSkillsChart: any = {
    chart: { type: 'column' },
    title: { text: 'Cognitive Skills' },
    xAxis: {
      categories: ['Not Assessed', 'Critical', 'Severe', 'Moderate', 'Mild', 'None'],
    },
    yAxis: {
      min: 0,
      title: { text: '' }
    },
    series: [{
      name: 'Assessments',
      type: 'column',
      data: [0, 6, 41, 64, 173, 1764],
      colorByPoint: true
    }]
  };
}
