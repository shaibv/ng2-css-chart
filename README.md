
# ng2modules-progresschart
This package is a very lightweight progress chart - Based purely on css style with no external dependencies.

# Get Started

## installation
1. Install ` ng2modules-progresschart ` using npm
```
$ npm i ng2modules-progresschart
```

2. Include ` progresschart ` library in application via `html`, `angular-cli` or `webpack`
```html
<script src="node_modules/easy-pie-chart/dist/progresschart.js"></script>
```

## Usage
Import the module to your module:

```js
import { ProgressChartComponent } from 'ng2modules-progresschart';

// In your app's module
imports: [
  ProgressChartComponent
]
```

Use the easyPieChart directive into your component template:
```js
  //Pie Chart Configuration
  public pieConfiguration:ChartConfiguration = {holeRadius:0,radius:150,backgroundColor:'#d6cbd3',activeColor:'#eca1a6'};
  //Doughnut Chart Configuration
  public doughnutConfiguration:ChartConfiguration = {holeRadius:100,radius:150,backgroundColor:'#f1e3dd',activeColor:'#667292',showText:true,text:{color:'#667292',size:44}};
```

```html
<!--  <ng2-pie-chart [value]="percent" [configure]="configuration"></ng2-pie-chart> -->

<div>
  <h3>Pie Chart</h3>
  <ng2-pie-chart [value]="0.3" [configure]="pieConfiguration"></ng2-pie-chart>
</div>

<div>
  <h3>Doughnut Chart</h3>
  <ng2-pie-chart [value]="0.8" [configure]="doughnutConfiguration"></ng2-pie-chart>
</div>

```
