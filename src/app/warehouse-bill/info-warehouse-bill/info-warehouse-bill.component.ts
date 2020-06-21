import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {WarehouseBill} from "../../model/warehouse-bill";
import {WarehouseBillDetail} from "../../model/warehouse-bill-detail";
import {WarehouseBillService} from "../../service/warehouse-bill/warehouse-bill.service";
import {WarehouseBillDetailService} from "../../service/warehouse-bill-detail/warehouse-bill-detail.service";

declare var $: any;
declare var Swal: any;

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
  detailId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private warehouseBillService: WarehouseBillService,
              private warehouseBillDetailService: WarehouseBillDetailService) {
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

  getWarehouseBillDetailId(id: number) {
    this.detailId = id;
  }

  deleteWarehouseBillDetail() {
    this.warehouseBillDetailService.deleteWarehouseBillDetail(this.detailId).subscribe(() => {
      this.warehouseBillService.getAllWarehouseBillDetail(this.id).subscribe(listWarehouseBillDetail => {
        this.listWarehouseBillDetail = listWarehouseBillDetail;
      })
      $(function () {
        $('#modal-delete').modal('hide');
      })
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'success',
          title: 'Xóa thành công'
        });
      });
    }, () => {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Xóa thất bại'
        });
      });
    })
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
