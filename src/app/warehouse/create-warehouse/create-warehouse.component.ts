import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {WarehouseService} from "../../service/warehouse/warehouse.service";
import {Warehouse} from "../../model/warehouse";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.scss']
})
export class CreateWarehouseComponent implements OnInit {
  warehouseForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private warehouseService: WarehouseService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#warehouse-form').validate({
        rules: {
          name: {
            required: true
          },
          address: {
            required: true
          },
        },
        messages: {
          name: {
            required: 'Hãy nhập tên kho'
          },
          address: {
            required: 'Hãy nhập địa chỉ'
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

  createWarehouse() {
    const warehouse: Warehouse = {
      name: this.warehouseForm.value.name,
      address: this.warehouseForm.value.address
    };
    if (warehouse.name !== "" && warehouse.address !== "") {
      return this.warehouseService.createWarehouse(warehouse).subscribe(() => {
        this.warehouseForm.reset();
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
    }else {
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
