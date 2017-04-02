import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ng2-pie-chart',
  templateUrl: './pie-chart.component.html',
  styles: [`
            .chart {
                top: 55px;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
                position: absolute;
                border-radius: 50%;
             }

            .chart-after {
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

            .chart-before {
                content: '';
                position: absolute;
                display: block;
                background-color: blue ;
                height: 200px;
                width: 100px;
                bottom: 0;
                right: 0;
                border-radius: 0 100% 100% 0 / 50%;
                transform: rotate( 0.75 turn);
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

  @Input()
  config:any;

  private percentage:number;
  private rotation:number;
  private width:number;
  private height:number;
  private holeRadius:number;
  private activeColor:string;
  private backgroundColor:string;
  private greaterThenHalf:boolean;


  constructor() {
    debugger;
    this.config = this.config || {};
    this.activeColor = this.config.activeColor || 'blue';
    this.backgroundColor = this.config.backgroundColor || 'black';
    this.holeRadius = this.config.holeRadius || 0;
    this.width = this.config.radius * 2 || 200;
    this.height = this.config.radius || 200;
  }

  ngOnInit() {
    this.rotation = this.value;

    if (this.value > 0.5) {
      this.greaterThenHalf = true;
      this.rotation = this.value - 0.5;
    }

    this.percentage = Math.round(this.value * 100);

  }

  chartStyle():any {
    return {
      'width': this.width + 'px',
      'height': this.height + 'px',
      'background': 'black linear-gradient(to right, black 50%, ' + this.activeColor + ' 50%)'
    };
  }

  holeStyle():any {
    return {
      'width': this.holeRadius * 2 + 'px',
      'height': this.holeRadius * 2 + 'px',

    };
  }

  changeRotation():any {
    return {'transform': 'rotate(' + this.rotation + 'turn)', 'background-color': this.activeColor};
  }

}
