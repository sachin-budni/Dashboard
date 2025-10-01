import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-gender-distribution-chart',
  imports: [MaterialModule, HighchartsChartComponent],
  templateUrl: './gender-distribution-chart.html',
  styleUrl: './gender-distribution-chart.scss'
})
export class GenderDistributionChart {
  chartOptions: any = {};

  femaleCount: number = 573;
  maleCount: number = 597;
  totalCount: number = this.femaleCount + this.maleCount;
  femalePercentage: string = ((this.femaleCount / this.totalCount) * 100).toFixed(1);
  malePercentage: string = ((this.maleCount / this.totalCount) * 100).toFixed(1);

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chartOptions = {
      chart: {
        type: 'pie', // Donut chart type
        height: 250, // Adjust height
        backgroundColor: 'transparent',
        // marginBottom: 50 // To make space for custom legend below
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          innerSize: '60%', // Makes it a donut chart
          dataLabels: {
            enabled: false // Hide default data labels on slices
          },
          showInLegend: false // Hide default legend
        }
      },
      series: [{
        name: 'Gender',
        type: 'pie',
        data: [{
          name: 'Female',
          y: this.femaleCount,
          color: '#F48FB1' // Pink for Female
        }, {
          name: 'Male',
          y: this.maleCount,
          color: '#64B5F6' // Blue for Male
        }]
      }]
    };
  }
}
