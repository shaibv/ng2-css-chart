import {PieChartComponent} from "./pie-chart.component";
import {ReflectiveInjector} from '@angular/core';
import {tick} from '@angular/core/testing';
import {ChartConfiguration} from "./Configuration";

describe('PieChartComponent', () => {

  let componentUnderTest:PieChartComponent;
  let injector:ReflectiveInjector;


  Given(() => {

    componentUnderTest = injector.get(PieChartComponent);

  });

  describe('INIT 50%', () => {
    Given(() => {
      componentUnderTest.value = 0.5;
    });

    When(() => {
      componentUnderTest.ngOnInit();
      tick();
    });

    Then(() => {
      expect(componentUnderTest.greaterThenHalf).toEqual(false);
      expect(componentUnderTest.percentage).toEqual(50);
      expect(componentUnderTest.rotation).toEqual(0.5);
    });
  });

  describe('INIT 75%', () => {
    Given(() => {
      componentUnderTest.value = 0.75;
    });

    When(() => {
      componentUnderTest.ngOnInit();
      tick();
    });

    Then(() => {
      expect(componentUnderTest.greaterThenHalf).toEqual(true);
      expect(componentUnderTest.percentage).toEqual(75);
      expect(componentUnderTest.rotation).toEqual(0.25);
    });
  });



});
