import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-distribution-breakdown',
  imports: [MaterialModule, HighchartsChartComponent],
  templateUrl: './distribution-breakdown.html',
  styleUrl: './distribution-breakdown.scss'
})
export class DistributionBreakdown {
  delayCountChartOptions: Highcharts.Options = {
    chart: { type: 'pie' },
    title: { text: 'Delay Count Distribution' },
    plotOptions: {
      pie: {
        innerSize: '60%',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y} ({point.percentage:.1f}%)'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Children',
      data: [
        { name: 'No Delays', y: 700, color: '#1abc9c' },
        { name: '1 Delay', y: 243, color: '#9acd32' },
        { name: '2 Delays', y: 108, color: '#f1c40f' },
        { name: '3 Delays', y: 78, color: '#e67e22' },
        { name: '4 Delays (All)', y: 15, color: '#e74c3c' }
      ]
    }]
  };

  delayTypeChartOptions: Highcharts.Options = {
    chart: { type: 'column' },
    title: { text: 'Delay Type Breakdown' },
    xAxis: {
      categories: ['Social Emotional', 'Cognitive Skills', 'Motor Skills', 'Language & Communication'],
      title: { text: null }
    },
    yAxis: {
      min: 0,
      title: { text: 'Assessments' }
    },
    series: [{
      type: 'column',
      name: 'Delays',
      data: [236, 156, 181, 180],
      colorByPoint: true,
      colors: ['#9b59b6', '#00bcd4', '#f39c12', '#e91e63']
    }]
  };

  totalChildren = 1144;
}
