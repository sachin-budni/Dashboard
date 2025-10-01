import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
// import { HighchartsChartComponent } from 'highcharts-angular';
const SCREENING_1_DATA = {
  socialEmotional: 20,
  cognitive: 22,
  motor: 26,
  languageCommunication: 24,
};

const COLOR_SCREENING_1 = '#9ACD32'; // YellowGreen shade
const COLOR_SCREENING_2 = '#C5E0B4'; // Light Green shade

const SCREENING_2_DATA = {
  socialEmotional: 20,
  cognitive: 15,
  motor: 11,
  languageCommunication: 14,
};
@Component({
  selector: 'app-skills-breakdown',
  imports: [
    MaterialModule,
    BaseChartDirective
  ],
  templateUrl: './skills-breakdown.html',
  styleUrl: './skills-breakdown.scss'
})
export class SkillsBreakdown {
  
  public chartType: ChartType = 'line';

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false, // Allows you to control the size with CSS
    scales: {
      y: {
        min: 0,
        max: 30, // Max value from the image is a little over 25
        ticks: {
          stepSize: 5,
          callback: (value) => `${value}%`, // Add percentage sign to Y-axis
        },
        title: {
          display: true,
          text: 'Percentage (%)',
        }
      },
      x: {
        grid: {
          display: true,
        },
        title: {
          display: true,
          text: 'Screening Timeline',
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true, // Use dots/points for the legend items
        }
      },
      title: {
        display: false,
        text: '',
        font: {
            size: 16
        },
        position: 'top',
        align: 'start'
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`
        }
      }
    },
    elements: {
        line: {
            tension: 0 // Makes the lines straight
        }
    }
  };

  // 3. Define Chart Data
  public lineChartData: ChartData<'line'> = {
    labels: ['Screening 1', 'Screening 2'],
    datasets: [
      {
        data: [SCREENING_1_DATA.socialEmotional, SCREENING_2_DATA.socialEmotional],
        label: 'Social Emotional',
        borderColor: '#9370DB', // Purple
        backgroundColor: 'rgba(147, 112, 219, 0.2)',
        pointBackgroundColor: '#9370DB',
        pointRadius: 5, // Match the dots in the image
        fill: false,
        borderWidth: 2,
      },
      {
        data: [SCREENING_1_DATA.cognitive, SCREENING_2_DATA.cognitive],
        label: 'Cognitive',
        borderColor: '#3CB371', // Medium Sea Green
        backgroundColor: 'rgba(60, 179, 113, 0.2)',
        pointBackgroundColor: '#3CB371',
        pointRadius: 5,
        fill: false,
        borderWidth: 2,
      },
      {
        data: [SCREENING_1_DATA.motor, SCREENING_2_DATA.motor],
        label: 'Motor',
        borderColor: '#00CED1', // Dark Turquoise
        backgroundColor: 'rgba(0, 206, 209, 0.2)',
        pointBackgroundColor: '#00CED1',
        pointRadius: 5,
        fill: false,
        borderWidth: 2,
      },
      {
        data: [SCREENING_1_DATA.languageCommunication, SCREENING_2_DATA.languageCommunication],
        label: 'Language & Communication',
        borderColor: '#FFA500', // Orange
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        pointBackgroundColor: '#FFA500',
        pointRadius: 5,
        fill: false,
        borderWidth: 2,
      }
    ]
  };

  public barChartData: ChartData<'bar'> = {
    labels: [
      'Social Emotional',
      'Cognitive',
      'Motor',
      'Language & Communication'
    ],
    datasets: [
      {
        data: [20, 26, 22.5, 22.5],
        label: 'Screening 1',
        backgroundColor: COLOR_SCREENING_1,
        hoverBackgroundColor: COLOR_SCREENING_1,
        borderColor: COLOR_SCREENING_1,
        barPercentage: 0.9, // Control bar width spacing
        categoryPercentage: 0.8
      },
      {
        data: [20, 12, 15, 14],
        label: 'Screening 2',
        backgroundColor: COLOR_SCREENING_2,
        hoverBackgroundColor: COLOR_SCREENING_2,
        borderColor: COLOR_SCREENING_2,
        barPercentage: 0.9,
        categoryPercentage: 0.8
      }
    ]
  };
  public chartData: any = this.lineChartData;
  constructor() {
  }

  ngOnInit(): void {}

  setChartType(type: ChartType) {
    this.chartType = type;
    this.chartData = type === 'line' ? this.lineChartData : this.barChartData;
  }

}
