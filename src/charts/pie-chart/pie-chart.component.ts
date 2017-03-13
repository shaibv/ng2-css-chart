import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ng2-pie-chart',
  templateUrl: './pie-chart.component.html',
  styles: [`

            .chart {
              width: 200px;
              height: 200px;
              top: 55px;
              right: 0;
              bottom: 0;
              left: 0;
              margin: auto;
              position: absolute;
              background: black linear-gradient(to right, black 50%, blue 50%);
              color: black;
              border-radius: 50%;
             }

            .chart::after {
                content: '';
                position: absolute;
                width: 140px;
                height: 140px;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: white;
                margin: auto;
                border-radius: 50%;
              }

            .chart::before {
                content: '';
                position: absolute;
                display: block;
                background-color: blue ;
                height: 200px;
                width: 100px;
                bottom: 0;
                right: 0;
                border-radius: 0 100% 100% 0 / 50%;
                transform: rotate(0.1turn);
                transform-origin: 0 50%;
              }

            .text {
                position: absolute;
                display: block;
                top: 38%;
                width: 100%;
                text-align: center;
                z-index: 1;
                font-size: 34px;
                color: @body-copy-color;
              }

            .greater-then-50:before {
                background-color: @chart-active-color;
              }

 `
  ]
})
export class PieChartComponent implements OnInit {

  @Input()
  value:number;

  private percentage:number;
  private rotation:number;
  private greaterThenHalf:boolean;


  constructor() {
    this.value = 0.4;
    this.rotation = this.value;
    if (this.value > 0.5) {
      this.greaterThenHalf = true;
      this.rotation = this.value - 0.5;
    }
    console.log('value: ' + this.value);
    this.percentage = Math.round(this.value * 100);
    console.log('percentage: ' + this.percentage);
    var baseColor = 'black';

  }

  ngOnInit() {
  }

}
