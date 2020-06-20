import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Warehouse} from "../../model/warehouse";
import {WarehouseService} from "../../service/warehouse/warehouse.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.scss']
})
export class EditWarehouseComponent implements OnInit {
  warehouseForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  });
  currentWarehouse: Warehouse;
  id: number;
  sub: Subscription

  constructor(private activatedRoute: ActivatedRoute,
              private warehouseService: WarehouseService) {
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
            required: 'Hãy nhập tên nhà kho'
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
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentWarehouse = await this.getWarehouse(this.id);
    })
  }

  getWarehouse(id: number) {
    return this.warehouseService.getWarehouse(id).toPromise();
  }

  updateWarehouse(id: number) {
    const warehouse: Warehouse = {
      name: this.warehouseForm.value.name === "" ? this.currentWarehouse.name : this.warehouseForm.value.name,
      address: this.warehouseForm.value.address === "" ? this.currentWarehouse.address : this.warehouseForm.value.address,
    };
    this.warehouseService.updateWarehouse(id, warehouse).subscribe(() => {
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
