import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-children-age-group-chart',
  imports: [MaterialModule, HighchartsChartComponent],
  templateUrl: './children-age-group-chart.html',
  styleUrl: './children-age-group-chart.scss'
})
export class ChildrenAgeGroupChart {
  chartOptions: any = {};
  totalChildren: number = 1170; // Sum of all age groups

  constructor() { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    const categories = ['0-1 yrs', '1-2 yrs', '2-3 yrs', '3-4 yrs', '4-5 yrs', '5-6 yrs', '6+ yrs'];
    const data = [10, 235, 260, 285, 215, 150, 15]; // Example data
    const colors = ['#66BB6A', '#42A5F5', '#FFCA28', '#EF5350', '#9575CD', '#FFA726', '#26A69A']; // Example colors

    this.chartOptions = {
      chart: {
        type: 'column', // Bar chart type
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
        categories: categories,
        title: {
          text: ''
        },
        labels: {
          style: {
            fontSize: '11px',
            color: '#616161'
          }
        },
        lineColor: '#e0e0e0',
        tickWidth: 0 // Remove x-axis ticks
      },
      yAxis: {
        min: 0,
        max: 300, // Based on image
        tickInterval: 50, // Based on image
        title: {
          text: ''
        },
        labels: {
          style: {
            fontSize: '11px',
            color: '#616161'
          }
        },
        gridLineColor: '#f5f5f5' // Light grid lines
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        column: {
          borderRadius: 4, // Rounded tops of bars
          pointPadding: 0.1, // Space between bars in a category
          groupPadding: 0.2, // Space between groups of bars
          dataLabels: {
            enabled: false // No data labels on bars
          },
          colorByPoint: true // Apply colors defined in the series data
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{point.key}</span><br>',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
      },
      series: [{
        name: 'Children',
        type: 'column',
        data: data.map((value, index) => ({ y: value, color: colors[index % colors.length] })),
      }]
    };
  }
}
