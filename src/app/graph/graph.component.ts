import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Sample JSON data
  data = [
    { month: 'January', sales: 1200 },
    { month: 'February', sales: 1900 },
    { month: 'March', sales: 1500 },
    { month: 'April', sales: 1700 },
    { month: 'May', sales: 2100 },
    { month: 'June', sales: 1800 },
    { month: 'July', sales: 800 }
  ];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  public barChartType: ChartType = 'bar';

  public barChartData: ChartData = {
    labels: this.data.map(item => item.month),
    datasets: [{
      data: this.data.map(item => item.sales),
      label: 'Monthly Sales',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }
}