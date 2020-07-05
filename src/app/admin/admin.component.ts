import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../service/order/orders.service";
import {WarehouseBillService} from "../service/warehouse-bill/warehouse-bill.service";

declare var $: any;
declare var JQuery: any;
declare var Chart: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  currentYear: number;

  constructor(private ordersService: OrdersService,
              private warehouseBillService: WarehouseBillService) {
  }

  async ngOnInit() {
    this.currentYear = new Date().getFullYear();
    let monthTotalBought = [];
    let monthTotalGet = [];
    for (let i = 0; i < 12; i++) {
      let totalSpendByBought = await this.sumTotalPriceHaveBought(i + 1, this.currentYear);
      let totalGetByMonth = await this.sumTotalPriceHaveGot(i + 1, this.currentYear);
      if (totalSpendByBought == null) {
        totalSpendByBought = 0;
      }
      if (totalGetByMonth == null) {
        totalGetByMonth = 0;
      }
      monthTotalBought.push(totalSpendByBought);
      monthTotalGet.push(totalGetByMonth);
    }
    let areaChartData = {
      labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
        'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',],
      datasets: [
        {
          label: 'Chi',
          backgroundColor: 'rgba(60,141,188,0.9)',
          borderColor: 'rgba(60,141,188,0.8)',
          pointRadius: false,
          pointColor: '#3b8bba',
          pointStrokeColor: 'rgba(60,141,188,1)',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data: monthTotalBought
        },
        {
          label: 'Thu',
          backgroundColor: 'rgba(210, 214, 222, 1)',
          borderColor: 'rgba(210, 214, 222, 1)',
          pointRadius: false,
          pointColor: 'rgba(210, 214, 222, 1)',
          pointStrokeColor: '#c1c7d1',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: monthTotalGet
        },
      ]
    }
    // @ts-ignore
    let barChartData = jQuery.extend(true, {}, areaChartData)
    let stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d')
    // @ts-ignore
    let stackedBarChartData = jQuery.extend(true, {}, barChartData)

    let stackedBarChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }

    let stackedBarChart = new Chart(stackedBarChartCanvas, {
      type: 'bar',
      data: stackedBarChartData,
      options: stackedBarChartOptions
    })
  }

  sumTotalPriceHaveBought(month: number, year: number) {
    return this.warehouseBillService.sumTotalPriceHaveBought(month, year).toPromise();
  }

  sumTotalPriceHaveGot(month: number, year: number) {
    return this.ordersService.sumTotalPriceGet(month, year).toPromise();
  }

}
