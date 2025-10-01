import { Component } from '@angular/core';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { MaterialModule } from '../material.module';
@Component({
  selector: 'app-dq-chart2',
  imports: [NgxEchartsModule, MaterialModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useValue: {
        echarts: () => import('echarts'),
      },
    },
  ],
  templateUrl: './dq-chart2.html',
  styleUrl: './dq-chart2.scss'
})
export class DqChart2 {
  chartOption: EChartsOption = {
    tooltip: { trigger: 'axis' },
    legend: {
      top: 0,
      data: [
        { name: 'Social Emotional', icon: 'circle' },
        { name: 'Cognitive', icon: 'circle' },
        { name: 'Motor', icon: 'circle' },
        { name: 'Language & Communication', icon: 'circle' }
      ]
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Screening 1', 'Screening 2'],
      name: 'Screening Timelines',
      nameLocation: 'middle',
      nameGap: 35
    },
    yAxis: {
      type: 'value',
      name: 'Percentage (%)',
      min: 0,
      max: 30
    },
    series: [
      {
        name: 'Social Emotional',
        type: 'line',
        smooth: true,
        data: [20, 20],
        lineStyle: { color: 'purple' },
        itemStyle: { color: 'purple' },
        symbol: 'circle',
        symbolSize: 12
      },
      {
        name: 'Cognitive',
        type: 'line',
        smooth: true,
        data: [27, 12],
        lineStyle: { color: 'deepskyblue' },
        itemStyle: { color: 'deepskyblue' },
        symbol: 'circle',
        symbolSize: 12
      },
      {
        name: 'Motor',
        type: 'line',
        smooth: true,
        data: [23, 15],
        lineStyle: { color: 'seagreen' },
        itemStyle: { color: 'seagreen' },
        symbol: 'circle',
        symbolSize: 12
      },
      {
        name: 'Language & Communication',
        type: 'line',
        smooth: true,
        data: [22, 14],
        lineStyle: { color: 'orange' },
        itemStyle: { color: 'orange' },
        symbol: 'circle',
        symbolSize: 12
      }
    ]
  };
}
