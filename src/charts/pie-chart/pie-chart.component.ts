import {Component, OnInit, Input} from '@angular/core';
import {ChartConfiguration} from "./Configuration";

@Component({
  selector: 'ng2-pie-chart',
  templateUrl: './pie-chart.component.html',
  styles: [`
            .chart {
                margin: auto;
                position: relative;
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
  configure:ChartConfiguration;

  private percentage:number;
  private rotation:number;
  private width:number;
  private height:number;
  private holeRadius:number;
  private activeColor:string;
  private backgroundColor:string;
  private greaterThenHalf:boolean;
  private showText:boolean;
  private textConfiguration:any;


  constructor() {

  }

  ngOnInit() {

    //ChartConfiguration
    this.configure = this.configure || {};
    this.activeColor = this.configure.activeColor || 'blue';
    this.backgroundColor = this.configure.backgroundColor || 'black';
    this.holeRadius = this.configure.holeRadius || 0;
    this.width = this.height = this.configure.radius * 2 || 200;
    this.rotation = this.value;
    this.showText = this.configure.showText;
    if (this.configure.text) {
      this.textConfiguration = {
        size: this.configure.text.size || '20px',
        color: this.configure.text.color || 'black',
      }
    }
    this.greaterThenHalf = this.value > 0.5;

    if (this.value > 0.5) {
      this.rotation = this.value - 0.5;
    }

    this.percentage = Math.round(this.value * 100);

  }

  chartStyle():any {
    console.log(`black linear-gradient(to right, ${this.backgroundColor} 50%,   ${this.activeColor}  50%)`);
    return {
      'width': this.width + 'px',
      'height': this.height + 'px',
      'background': `black linear-gradient(to right, ${this.backgroundColor} 50%,   ${this.activeColor}  50%)`
    };
  }

  holeStyle():any {
    return {
      'width': this.holeRadius * 2 + 'px',
      'height': this.holeRadius * 2 + 'px',

    };
  }

  changeRotation():any {
    let backgroundColor = this.greaterThenHalf ? this.activeColor : this.backgroundColor;
    return {
      'background-color': this.backgroundColor,
      'width': this.width / 2 + 'px',
      'height': this.height + 'px',
      'transform': `rotate( ${this.rotation}turn)`
    };
  }

  textStyle():any {
    return {
      'font-size': this.textConfiguration.size,
      'color': this.textConfiguration.color
    };
  }

}
