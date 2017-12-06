import { Component } from '@angular/core';
import {ChartConfiguration} from "../charts/pie-chart/Configuration";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Chart Demo';
  public pieConfiguration:ChartConfiguration = {holeRadius:0,radius:150,backgroundColor:'#d6cbd3',activeColor:'#eca1a6'};
  public doughnutConfiguration:ChartConfiguration = {holeRadius:100,radius:150,backgroundColor:'#f1e3dd',activeColor:'#667292',showText:true,text:{color:'#667292',size:44}};
}
