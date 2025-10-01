import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-motor-language',
  imports: [MaterialModule, HighchartsChartComponent],
  templateUrl: './motor-language.html',
  styleUrl: './motor-language.scss'
})
export class MotorLanguage {
   motorSkillsChart: Highcharts.Options = this.generateChartOptions(
    'Motor Skills',
    ['Not Assessed', 'Critical', 'Severe', 'Moderate', 'Mild', 'None'],
    [32, 7, 22, 60, 178, 1781]
  );

  languageChart: Highcharts.Options = this.generateChartOptions(
    'Language & Communication',
    ['Not Assessed', 'Critical', 'Severe', 'Moderate', 'Mild', 'None'],
    [32, 6, 27, 52, 173, 1790]
  );

  private generateChartOptions(title: string, categories: string[], data: number[]): Highcharts.Options {
    return {
      chart: {
        type: 'column',
        height: 300
      },
      title: {
        text: title,
        align: 'left'
      },
      xAxis: {
        categories: categories,
        crosshair: true,
        title: { text: null }
      },
      yAxis: {
        min: 0,
        title: { text: '' },
        allowDecimals: false
      },
      tooltip: {
        pointFormat: '<b>{point.y}</b>'
      },
      plotOptions: {
        column: {
          colorByPoint: true,
          colors: ['#999', '#d32f2f', '#f44336', '#ffca28', '#8bc34a', '#009688'],
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        name: title,
        data: data,
        type: 'column'
      }]
    };
  }
}
