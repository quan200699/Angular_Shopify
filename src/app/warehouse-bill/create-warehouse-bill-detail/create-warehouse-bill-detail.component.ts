import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Subscription} from "rxjs";
import {WarehouseBillDetailService} from "../../service/warehouse-bill-detail/warehouse-bill-detail.service";
import {ProductService} from "../../service/product/product.service";
import {WarehouseBillDetail} from "../../model/warehouse-bill-detail";

declare var $: any;
declare var Swal: any;
let productId: number = null;

@Component({
  selector: 'app-create-warehouse-bill-detail',
  templateUrl: './create-warehouse-bill-detail.component.html',
  styleUrls: ['./create-warehouse-bill-detail.component.scss']
})
export class CreateWarehouseBillDetailComponent implements OnInit {
  warehouseBillDetailForm: FormGroup = new FormGroup({
    amount: new FormControl(0)
  });
  listProduct: Product[] = [];
  sub: Subscription;
  id: number = -1;

  constructor(private warehouseBillDetailService: WarehouseBillDetailService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) {

  }

  ngOnInit() {
    this.getAllProduct();
    $(document).ready(function () {
      $('.select2').select2();
      $('#product').on('select2:select', function (e, source) {
        productId = $(e.currentTarget).val();
      });
      $('#warehouse-bill-deatil-form').validate({
        rules: {
          product: {
            required: true
          },
          amount: {
            required: true
          }
        },
        messages: {
          product: {
            required: 'Hãy chọn sản phẩm',
            amount: 'nhập số lượng'
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

  getAllProduct() {
    this.productService.getAllProduct().subscribe(listProduct => {
      this.listProduct = listProduct;
    })
  }

  createWarehouseBillDetail() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const warehouseBillDetail: WarehouseBillDetail = {
        product_id: productId,
        amount: this.warehouseBillDetailForm.value.amount,
        ware_house_bill_id: this.id
      };
      if (warehouseBillDetail.amount !== 0) {
        return this.warehouseBillDetailService.createWarehouseBillDetail(warehouseBillDetail).subscribe(() => {
          this.warehouseBillDetailForm.reset();
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
    })
  }
}
