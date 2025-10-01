import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
// import { HighchartsChartComponent } from 'highcharts-angular';
import { ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

// 1. Import necessary components from chart.js
import { Chart, registerables } from 'chart.js';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

// **CRUCIAL STEP:** Register all standard components, including the 'category' scale
Chart.register(...registerables);

@Component({
  selector: 'app-delay-chart',
  imports: [
    MaterialModule,
    // HighchartsChartComponent,
    BaseChartDirective
  ],
  templateUrl: './delay-chart.html',
  styleUrl: './delay-chart.scss'
})

export class DelayChart {
  public lineChartType: ChartConfiguration<'line' | 'bar'>['type'] = 'line';
  public ChartData: ChartData<'bar' | 'line'> | any = {};
    
  public barChartData: ChartData<'bar'> = {
    labels: ['0 Delays', '1 Delay', '2 Delays', '3 Delays', '4 Delays (All)'],
    datasets: [
      { 
        data: [48, 25, 14, 9.5, 2.5], 
        label: 'Screening 1', 
        backgroundColor: '#9ACD32', // Olive-like color
        hoverBackgroundColor: '#80B32E' 
      },
      { 
        data: [63, 20, 8, 5.5, 1.5], 
        label: 'Screening 2', 
        backgroundColor: '#D9EAD3', // Light Green/Pistachio color
        hoverBackgroundColor: '#C6D9C0'
      }
    ]
  };

  public lineChartData: ChartConfiguration<'line' | 'bar'>['data'] = {
    labels: [
      'Screening 1',
      'Screening 2'
    ],
    datasets: [
      // 0 Delays (Green line - highest)
      {
        data: [50, 60], // Approximate values from the image (50% to 60%)
        label: '0 Delays',
        borderColor: '#00cc99', // A nice teal/green color
        backgroundColor: 'transparent',
        pointBackgroundColor: '#00cc99',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0, // Straight lines
        fill: false
      },
      {
        data: [20, 18], // Approximate values (20% to 18%)
        label: '1 Delay',
        borderColor: '#cccc33', // Lighter yellow-green
        backgroundColor: 'transparent',
        pointBackgroundColor: '#cccc33',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0,
        fill: false
      },
      // 2 Delays (Orange)
      {
        data: [13, 11], // Approximate values (13% to 11%)
        label: '2 Delays',
        borderColor: '#ff9933', // Orange
        backgroundColor: 'transparent',
        pointBackgroundColor: '#ff9933',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0,
        fill: false
      },
      // 3 Delays (Darker Orange)
      {
        data: [7, 6], // Approximate values (7% to 6%)
        label: '3 Delays',
        borderColor: '#ff6600', // Darker Orange
        backgroundColor: 'transparent',
        pointBackgroundColor: '#ff6600',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0,
        fill: false
      },
      // 4 Delays (All) (Red line - lowest)
      {
        data: [5, 3], // Approximate values (5% to 3%)
        label: '4 Delays (All)',
        borderColor: '#cc3300', // Red
        backgroundColor: 'transparent',
        pointBackgroundColor: '#cc3300',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0,
        fill: false
      },
    ]
  };


  public ChartOptions: ChartConfiguration['options'] | any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Screening Timelines',
          font: {
            size: 12
          }
        },
        grid: {
          display: false // Hide vertical grid lines
        }
      },
      y: {
        title: {
          display: true,
          text: 'Percentage of Children(%)',
          font: {
            size: 12
          }
        },
        min: 0,
        max: 100, // Based on the image Y-axis
        ticks: {
          // stepSize: 25, // Show 0, 25, 50, 75, 100
          callback: (value: any) => value + '%' // Add percentage sign
        },
        grid: {
          color: 'rgba(0,0,0,0.1)' // Light grey horizontal lines
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true, // Use the point style (circle) for the legend
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + '%';
            }
            return label;
          }
        }
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.lineChart();
  }

  onChange(value: ChartConfiguration<'line' | 'bar'>['type']) {
    this.lineChartType = value;
    this.lineChartType === 'bar' ? this.barChart() : this.lineChart();
  }
  lineChart() {
    this.ChartData = this.lineChartData;
  }

  barChart() {
    this.ChartData = this.barChartData;
  } 
}