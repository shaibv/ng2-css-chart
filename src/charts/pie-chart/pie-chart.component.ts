import {Component, OnInit, Input} from '@angular/core';
import {ChartConfiguration} from "./Configuration";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'ng2-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.less']
})
export class PieChartComponent implements OnInit {

  @Input()
  value:number;

  @Input()
  configure:ChartConfiguration;

  public percentage:number;
  public greaterThenHalf:boolean;
  public rotation:number;

  private width:number;
  private height:number;
  private holeRadius:number;
  public activeColor:string;
  public backgroundColor:string;
  private showText:boolean;
  private textConfiguration:any;
  private animationDuration:number = 0;


  constructor() {

  }

  ngOnInit() {

    //ChartConfiguration
    this.configure = this.configure || {};
    this.activeColor = this.configure.activeColor || 'blue';
    this.backgroundColor = this.configure.backgroundColor || 'black';
    this.holeRadius = this.configure.holeRadius || 0;
    this.animationDuration = this.configure.animationDuration || 0;
    this.width = this.height = this.configure.radius * 2 || 200;
    this.rotation = this.value;
    this.showText = this.configure.showText;
    if (this.configure.text) {
      this.textConfiguration = {
        size: this.configure.text.size || '20',
        color: this.configure.text.color || 'black',
      }
    }
    this.calculateValue();
    if(this.animationDuration) {
      this.initAnimation();
    }
  }

  private calculateValue() {
    this.greaterThenHalf = this.value > 0.5;
    this.percentage = Math.round(this.value * 100);
    this.rotation = this.value;
    if (this.value > 0.5) {
      this.rotation = this.value - 0.5;
    }
  }

  private initAnimation() {
    const FPS = 60;
    let numOfSteps = (this.animationDuration / 1000) * FPS;
    let step = this.value / numOfSteps;
    this.value = 0;
    this.calculateValue();
    //
    let subscription = Observable.interval((1000 / FPS)).subscribe(()=> {
      if (numOfSteps > 0) {
        numOfSteps--;
        this.value += step;
        this.calculateValue();
      } else{
        subscription.unsubscribe();
      }
    });


  }

  chartStyle():any {
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
      'background-color': backgroundColor,
      'width': this.width / 2 + 'px',
      'height': this.height + 'px',
      'border-radius': '0 100% 100% 0 / 50%',
      'transform': `rotate( ${this.rotation}turn)`,

    };
  }

  textStyle():any {
    return {
      'font-size': this.textConfiguration.size + 'px',
      'color': this.textConfiguration.color
    };
  }

}
