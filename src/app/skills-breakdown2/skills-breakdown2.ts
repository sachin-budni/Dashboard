import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MaterialModule } from '../material.module';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Legend,
  Tooltip
} from 'chart.js';

@Component({
  selector: 'app-skills-breakdown2',
  imports: [MaterialModule],
  templateUrl: './skills-breakdown2.html',
  styleUrl: './skills-breakdown2.scss'
})
export class SkillsBreakdown2 implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngAfterViewInit() {
    // Register necessary Chart.js components
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Legend, Tooltip);

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Screening 1', 'Screening 2'],
        datasets: [
          {
            label: 'Social Emotional',
            data: [20, 20],
            borderColor: 'purple',
            backgroundColor: 'purple',
            fill: false,
            tension: 0.3,
            pointStyle: 'circle',
            pointRadius: 6,
          },
          {
            label: 'Cognitive',
            data: [27, 12],
            borderColor: 'deepskyblue',
            backgroundColor: 'deepskyblue',
            fill: false,
            tension: 0.3,
            pointStyle: 'circle',
            pointRadius: 6,
          },
          {
            label: 'Motor',
            data: [23, 15],
            borderColor: 'seagreen',
            backgroundColor: 'seagreen',
            fill: false,
            tension: 0.3,
            pointStyle: 'circle',
            pointRadius: 6,
          },
          {
            label: 'Language & Communication',
            data: [22, 14],
            borderColor: 'orange',
            backgroundColor: 'orange',
            fill: false,
            tension: 0.3,
            pointStyle: 'circle',
            pointRadius: 6,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 20
            }
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage (%)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Screening Timelines'
            }
          }
        }
      }
    });
  }
  setChartType(type: 'line' | 'bar') {
    if (!this.chart) return;

  // ✅ Option 1: just change the type and update
  (this.chart.config as any).type = type;
  this.chart.update();
  }
}
