import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-verification-status-chart',
  imports: [MaterialModule, HighchartsChartComponent],
  templateUrl: './verification-status-chart.html',
  styleUrl: './verification-status-chart.scss'
})
export class VerificationStatusChart {
  chartOptions: any = {};

  unverifiedCount: number = 1170; // Based on your image

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.chartOptions = {
      chart: {
        type: 'column', // Simple column chart
        height: 300,
        backgroundColor: 'transparent'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['Unverified'], // Only one category
        title: {
          text: ''
        },
        labels: {
          enabled: false // Hide x-axis label for "Unverified"
        },
        lineColor: '#e0e0e0',
        tickWidth: 0
      },
      yAxis: {
        min: 0,
        max: 1200, // Max value based on your image
        tickInterval: 200, // Based on your image
        title: {
          text: ''
        },
        labels: {
          style: {
            fontSize: '11px',
            color: '#616161'
          }
        },
        gridLineColor: '#f5f5f5'
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        column: {
          borderRadius: 4,
          pointPadding: 0.2,
          groupPadding: 0, // No group padding since only one bar
          borderWidth: 0,
          dataLabels: {
            enabled: false
          }
        }
      },
      tooltip: {
        headerFormat: '', // No header for a single bar
        pointFormat: 'Unverified: <b>{point.y}</b>'
      },
      series: [{
        name: 'Verification Status',
        type: 'column',
        data: [{
          y: this.unverifiedCount,
          color: '#EF5350' // Red for Unverified
        }]
      }]
    };
  }
}
