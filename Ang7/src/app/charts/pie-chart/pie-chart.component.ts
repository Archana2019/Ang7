import { Component, OnInit } from '@angular/core';
// import {  } from '../../shared/theme.colors' ;
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }
  // @Input() inputData: any;
  // @Input() limit: number;

  pieChartData: number[] = [345,234,456];
  pieChartLabels: string[] = ['ABCIndia','JaiBharath','DesiAmerican'];

  colors: any[] = [
    {
      // backgroundColor: this.themeColors(theme),
      backgroundColor:[] = ['#ffd16c','#f21f21','#098098'],
      borderColor: 'goldenrod'

    }
  ];

  pieChartType = 'doughnut';

  ngOnInit() {
    // this.parseChartData(this.inputData, this.limit);

  }
  // parseChartData(res: any, limit?: number) {
  //   const allData = res.slice(0, limit);
  //   console.log(allData);
  //   this.pieChartData = allData.map(x => _.values(x)[1]);
  //   this.pieChartLabels = allData.map(x => _.values(x)[0]);
  // }

  // themeColors(setName: string): string[] {
  //   const c = THEME_COLORS.slice(0)
  //     .find(set => set.name === setName).colorSet;

  //   return c;
  // }
}
