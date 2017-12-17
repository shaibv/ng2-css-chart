
import {TestBed} from '@angular/core/testing';
import {PieChartComponent} from "./pie-chart.component";

describe('ProgressChartComponent', () => {

  let componentUnderTest:PieChartComponent;

  Given(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [PieChartComponent ]
    });
    componentUnderTest = TestBed.get(PieChartComponent);


  });

  describe('INIT 50%', () => {
    Given(() => {
      componentUnderTest.value = 0.5;
    });

    When(() => {
      componentUnderTest.ngOnInit();
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
    });

    Then(() => {
      expect(componentUnderTest.greaterThenHalf).toEqual(true);
      expect(componentUnderTest.percentage).toEqual(75);
      expect(componentUnderTest.rotation).toEqual(0.25);
    });
  });



});
