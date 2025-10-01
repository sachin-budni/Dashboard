import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MaterialModule } from '../material.module';
import { HighchartsChartComponent } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assessments',
  imports: [MaterialModule, HighchartsChartComponent, FormsModule],
  templateUrl: './assessments.html',
  styleUrl: './assessments.scss'
})
export class Assessments {

  chartOptions: any = {};
  chartType: string = 'line'; // 'line' or 'column'
  buttons: string[] = ['Full', 'Weekly', 'Monthly', 'Custom'];
  selectedDuration: string = 'Full';
  chartPeriodDays: number = 91; // Example value, would be dynamic
  totalAssessments: number = 964; // Example value, would be dynamic

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    // --- Sample Data (replace with real data from your backend) ---
    // This data tries to mimic the shape in your image
    const data = [
      [new Date('2023-06-28').getTime(), 0],
      [new Date('2023-07-08').getTime(), 0],
      [new Date('2023-07-18').getTime(), 0],
      [new Date('2023-07-28').getTime(), 0],
      [new Date('2023-08-07').getTime(), 0],
      [new Date('2023-08-17').getTime(), 0],
      [new Date('2023-08-18').getTime(), 50],
      [new Date('2023-08-19').getTime(), 100],
      [new Date('2023-08-20').getTime(), 150],
      [new Date('2023-08-21').getTime(), 190],
      [new Date('2023-08-22').getTime(), 220],
      [new Date('2023-08-23').getTime(), 180],
      [new Date('2023-08-24').getTime(), 110],
      [new Date('2023-08-25').getTime(), 0], // Drop off
      [new Date('2023-08-26').getTime(), 0],
      [new Date('2023-08-27').getTime(), 10], // Small bump
      [new Date('2023-08-28').getTime(), 30],
      [new Date('2023-08-29').getTime(), 5],
      [new Date('2023-08-30').getTime(), 0],
      [new Date('2023-09-06').getTime(), 0],
      [new Date('2023-09-16').getTime(), 0],
      [new Date('2023-09-26').getTime(), 0],
    ];

    this.chartOptions = {
      chart: {
        type: this.chartType,
        backgroundColor: 'transparent',
        height: 300, // Adjust chart height
      },
      title: {
        text: '' // Title is handled by mat-card-title
      },
      credits: {
        enabled: false // Hide Highcharts.com watermark
      },
      xAxis: {
        type: 'datetime',
        tickInterval: 7 * 24 * 3600 * 1000, // Weekly ticks
        labels: {
          format: '{value:%b %e}' // e.g., Aug 7
        },
        lineColor: '#e0e0e0', // Light grey line
        gridLineColor: '#f5f5f5' // Very light grid lines
      },
      yAxis: {
        title: {
          text: '' // No Y-axis title
        },
        min: 0,
        tickInterval: 19, // To match your image's Y-axis steps
        labels: {
          format: '{value}'
        },
        gridLineColor: '#f5f5f5' // Very light grid lines
      },
      plotOptions: {
        series: {
          marker: {
            enabled: true,
            radius: 3, // Smaller dots
            fillColor: '#4caf50', // Green dots
            lineColor: '#4caf50',
            lineWidth: 1
          },
          // For line series
          line: {
            color: '#4caf50', // Green line color
            lineWidth: 2,
            fillColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, new Highcharts.Color('#4caf50').setOpacity(0.5).get('rgba')],
                [1, new Highcharts.Color('#4caf50').setOpacity(0).get('rgba')]
              ]
            },
            // Highcharts default `connectNulls: false` is good for gaps
          },
          // For column series (if type is 'column')
          column: {
            color: '#4caf50', // Green column color
            pointPadding: 0.2,
            borderWidth: 0
          }
        }
      },
      tooltip: {
        xDateFormat: '%A, %b %e, %Y', // e.g., Monday, Aug 7, 2023
        pointFormat: 'Assessments: <b>{point.y}</b>'
      },
      series: [{
        name: 'Assessments',
        type: this.chartType, // Use the dynamic chartType
        data: data
      }]
    };
  }

  setChartType(type: string): void {
    this.chartType = type;
    this.chartOptions.series![0] = { ...this.chartOptions.series![0], type: this.chartType };
    this.chartOptions = { ...this.chartOptions };
  }

  applyDurationFilter(val: string): void {
    this.selectedDuration = val;
  }
}
