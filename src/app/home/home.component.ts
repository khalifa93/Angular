import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js';
import { ChartModule } from 'angular2-chartjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('line') line: ElementRef;
  chart: any;
  @Input()  data = {};

  @Input()  type: string;


  linee ;

  @Input()  options = {};
  constructor() { }

  ngOnInit() {

    this.type = 'line';
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My First dataset',
          data: [15, 29, 50, 61, 86, 35, 20]
        }
      ]
    };
    this.options = {
  responsive: true,
  maintainAspectRatio: false
};



  }

}
