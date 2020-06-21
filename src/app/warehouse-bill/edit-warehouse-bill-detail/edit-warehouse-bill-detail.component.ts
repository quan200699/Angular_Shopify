import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product/product.service";
import {WarehouseBillDetail} from "../../model/warehouse-bill-detail";
import {WarehouseBillDetailService} from "../../service/warehouse-bill-detail/warehouse-bill-detail.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-warehouse-bill-detail',
  templateUrl: './edit-warehouse-bill-detail.component.html',
  styleUrls: ['./edit-warehouse-bill-detail.component.scss']
})
export class EditWarehouseBillDetailComponent implements OnInit {
  warehouseBillDetailForm: FormGroup = new FormGroup({
    amount: new FormControl(0)
  });
  currentWarehouseBillDetail: WarehouseBillDetail;
  id: number;
  detailId: number;
  sub: Subscription
  listProduct: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private warehouseBillDetailService: WarehouseBillDetailService,
              private productService: ProductService,) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#warehouse-bill-detail-form').validate({
        rules: {
          amount: {
            required: true
          },
        },
        messages: {
          amount: {
            required: 'Hãy nhập số lượng'
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
      this.detailId = +paramMap.get('detailId')
      this.currentWarehouseBillDetail = await this.getWarehouseBillDetail(this.detailId);
    })
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(listProduct => {
      this.listProduct = listProduct;
    })
  }

  getWarehouseBillDetail(id: number) {
    return this.warehouseBillDetailService.getWarehouseBillDetail(id).toPromise();
  }

  updateWarehouseBillDetail(id: number) {
    const warehouseBillDetail: WarehouseBillDetail = {
      wareHouseBill: {
        id: this.id
      },
      product: {
        id: this.warehouseBillDetailForm.value.product === "" ? this.currentWarehouseBillDetail.product : this.warehouseBillDetailForm.value.product,
      },
      amount: this.warehouseBillDetailForm.value.amount
    };
    this.warehouseBillDetailService.updateWarehouseBillDetail(id, warehouseBillDetail).subscribe(() => {
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
