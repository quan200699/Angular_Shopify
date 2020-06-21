import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {WarehouseBill} from "../../model/warehouse-bill";
import {WarehouseBillDetail} from "../../model/warehouse-bill-detail";
import {WarehouseBillService} from "../../service/warehouse-bill/warehouse-bill.service";

declare var $: any;

@Component({
  selector: 'app-info-warehouse-bill',
  templateUrl: './info-warehouse-bill.component.html',
  styleUrls: ['./info-warehouse-bill.component.scss']
})
export class InfoWarehouseBillComponent implements OnInit {

  currentWarehouseBill: WarehouseBill;
  listWarehouseBillDetail: WarehouseBillDetail[];
  sub: Subscription;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private warehouseBillService: WarehouseBillService) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentWarehouseBill = await this.getWarehouseBill(this.id);
      this.getAllProductByCategory(this.currentWarehouseBill);
    })
  }

  ngOnInit() {
  }

  getWarehouseBill(id: number) {
    return this.warehouseBillService.getWarehouseBill(id).toPromise();
  }

  getAllProductByCategory(warehouseBill: WarehouseBill) {
    this.warehouseBillService.getAllWarehouseBillDetail(warehouseBill.id).subscribe(listWarehouseBillDetail => {
      this.listWarehouseBillDetail = listWarehouseBillDetail;
      $(function () {
        $('#table-warehouse-bill-detail').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false,
        });
      });
    })
  }
}
