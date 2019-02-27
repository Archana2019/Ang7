import { SalesVolumeComponent } from './../../section/sales-volume/sales-volume.component';
import { Component, OnInit } from '@angular/core';
const SAMPLE_BARCHART_DATA : any[] = [
  {data:[36,35,54,63,42,34,45] ,label : 'Q3 Sales'},
  {data:[23,43,23,45,67,98,12] ,label : 'Q4 Sales'}
]
const SAMPLE_BARCHART_LABELS : string[] = ['W1','W2','W3','W4','W5','W6','W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor() { }
  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  ngOnInit() {
  }

}
