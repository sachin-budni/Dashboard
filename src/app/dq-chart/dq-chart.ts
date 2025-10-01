import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { EChartsOption } from 'echarts';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
// import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-dq-chart',
  imports: [NgxEchartsModule, MaterialModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useValue: {
        echarts: () => import('echarts'),
      },
    },
  ],
  templateUrl: './dq-chart.html',
  styleUrl: './dq-chart.scss'
})
export class DqChart {
  // Age groups (Y-axis labels)
  ageGroups = [
    '36+ months', '30-35 months', '24-29 months', 
    '18-23 months', '12-17 months', '6-11 months', '0-5 months'
  ];

  // Screening 1 and Screening 3 data (x = score, y = age index)
  screening1 = [0.72, 0.75, 0.73, 0.76, 0.71, 0.69, 0.68];
  screening3 = [0.78, 0.82, 0.83, 0.87, 0.86, 0.87, 0.85];

  chartOption: EChartsOption = {
    tooltip: { trigger: 'axis' },
    legend: {
      bottom: 0,
      data: [
        { name: 'Screening 1 DQ Score', icon: 'circle' },
        { name: 'Screening 3 DQ Score', icon: 'circle' },
        { name: 'Normal Development Threshold (0.85)', icon: 'line' }
      ]
    },
    grid: { left: 120, right: 60, bottom: 60, containLabel: true },
    xAxis: {
      type: 'value',
      min: 0.6,
      max: 1,
      name: ''
    },
    yAxis: {
      type: 'category',
      data: this.ageGroups,
      inverse: true
    },
    series: [
      // Screening 1
      {
        name: 'Screening 1 DQ Score',
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 16,
        itemStyle: { color: '#9e9e9e' },
        label: {
          show: true, position: 'top',
          formatter: (p: any) => p.value[0].toFixed(2)
        },
        data: this.screening1.map((val, idx) => [val, this.ageGroups[idx]])
      },
      // Screening 3
      {
        name: 'Screening 3 DQ Score',
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 16,
        itemStyle: { color: '#f57c00' },
        label: {
          show: true, position: 'top',
          formatter: (p: any) => p.value[0].toFixed(2)
        },
        data: this.screening3.map((val, idx) => [val, this.ageGroups[idx]])
      },
      // Connecting Arrows (improvements)
      {
        type: 'custom',
        name: 'Improvement',
        renderItem: (params: any, api: any) => {
          const start = api.coord([this.screening1[params.dataIndex], params.dataIndex]);
          const end = api.coord([this.screening3[params.dataIndex], params.dataIndex]);
          return {
            type: 'group',
            children: [
              {
                type: 'line',
                shape: { x1: start[0], y1: start[1], x2: end[0], y2: end[1] },
                style: { stroke: 'green', lineWidth: 2 }
              },
              {
                type: 'text',
                style: {
                  text: '+' + (this.screening3[params.dataIndex] - this.screening1[params.dataIndex]).toFixed(2),
                  x: (start[0] + end[0]) / 2,
                  y: start[1] - 10,
                  fill: 'green',
                  fontSize: 12
                }
              }
            ]
          };
        },
        data: this.ageGroups
      },
      // Threshold line
      {
        name: 'Normal Development Threshold (0.85)',
        type: 'line',
        markLine: {
          symbol: 'none',
          lineStyle: { type: 'dashed', color: 'purple' },
          data: [{ xAxis: 0.85 }]
        }
      }
    ]
  };
}
