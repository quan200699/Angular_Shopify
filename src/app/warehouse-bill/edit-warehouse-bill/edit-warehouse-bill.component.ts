import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {WarehouseBill} from "../../model/warehouse-bill";
import {Warehouse} from "../../model/warehouse";
import {WarehouseBillService} from "../../service/warehouse-bill/warehouse-bill.service";
import {WarehouseService} from "../../service/warehouse/warehouse.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-warehouse-bill',
  templateUrl: './edit-warehouse-bill.component.html',
  styleUrls: ['./edit-warehouse-bill.component.scss']
})
export class EditWarehouseBillComponent implements OnInit {
  warehouseBillForm: FormGroup = new FormGroup({
    warehouse: new FormControl(),
  });
  currentWarehouseBill: WarehouseBill;
  id: number;
  sub: Subscription
  listWarehouse: Warehouse[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private warehouseBillService: WarehouseBillService,
              private warehouseService: WarehouseService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#warehouse-bill-form').validate({
        rules: {
          warehouse: {
            required: true
          },
        },
        messages: {
          warehouse: {
            required: 'Hãy chọn nhà kho'
          },
        },
        errorElement: 'span',
        errorPlacement: function (error, element) {
          error.addClass('invalid-feedback');
          element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
          $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).removeClass('is-invalid');
        }
      });
    });
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentWarehouseBill = await this.getWarehouseBill(this.id);
    })
    this.getAllWarehouse();
  }

  getAllWarehouse() {
    this.warehouseService.getAllWarehouse().subscribe(listWarehouse => {
      this.listWarehouse = listWarehouse;
    })
  }

  getWarehouseBill(id: number) {
    return this.warehouseBillService.getWarehouseBill(id).toPromise();
  }

  updateWarehouseBill(id: number) {
    const warehouseBill: WarehouseBill = {
      createDate: this.currentWarehouseBill.createDate,
      warehouse: {
        id: this.warehouseBillForm.value.warehouse === "" ? this.currentWarehouseBill.warehouse : this.warehouseBillForm.value.warehouse,
      }
    };
    this.warehouseBillService.updateWarehouseBill(id, warehouseBill).subscribe(() => {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'success',
          title: 'Cập nhật thành công'
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
          title: 'Cập nhật thất bại'
        });
      });
    });
  }
}
