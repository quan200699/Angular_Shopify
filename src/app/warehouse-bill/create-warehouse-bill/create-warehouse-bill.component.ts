import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {WarehouseBillService} from "../../service/warehouse-bill/warehouse-bill.service";
import {WarehouseBill} from "../../model/warehouse-bill";
import {WarehouseService} from "../../service/warehouse/warehouse.service";
import {Warehouse} from "../../model/warehouse";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-create-warehouse-bill',
  templateUrl: './create-warehouse-bill.component.html',
  styleUrls: ['./create-warehouse-bill.component.scss']
})
export class CreateWarehouseBillComponent implements OnInit {
  warehouseBillForm: FormGroup = new FormGroup({
    warehouse: new FormControl()
  });
  listWarehouse: Warehouse[] = [];

  constructor(private warehouseBillService: WarehouseBillService,
              private warehouseService: WarehouseService) {
  }

  ngOnInit() {
    this.getAllWarehouse();
    $(document).ready(function () {
      $('#warehouse-bill-form').validate({
        rules: {
          warehouse: {
            required: true
          },
        },
        messages: {
          warehouse: {
            required: 'Hãy chọn kho nhập'
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
  }

  getAllWarehouse() {
    this.warehouseService.getAllWarehouse().subscribe(listWarehouse => {
      this.listWarehouse = listWarehouse;
    })
  }

  createWarehouseBill() {
    const warehouseBill: WarehouseBill = {
      warehouse: {
        id: this.warehouseBillForm.value.warehouse
      }
    };
    if (warehouseBill.warehouse !== null) {
      return this.warehouseBillService.createWarehouseBill(warehouseBill).subscribe(() => {
        this.warehouseBillForm.reset();
        $(function () {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          Toast.fire({
            type: 'success',
            title: 'Tạo mới thành công'
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
            title: 'Tạo mới thất bại'
          });
        });
      });
    } else {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        Toast.fire({
          type: 'error',
          title: 'Tạo mới thất bại'
        });
      });
    }
  }
}
