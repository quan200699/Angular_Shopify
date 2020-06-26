import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";
import {Item} from "../../product/item";
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {WarehouseBillDetailService} from "../../service/warehouse-bill-detail/warehouse-bill-detail.service";
import {OrdersService} from "../../service/order/orders.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  discountForm: FormGroup = new FormGroup({
    discount: new FormControl('')
  })
  items: Item[] = [];
  total: number = 0;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private warehouseBillDetailService: WarehouseBillDetailService,
              private ordersService: OrdersService,
              private router: Router) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.hero__categories__all').on('click', function () {
        $('.hero__categories ul').slideToggle(400);
      });
      var proQty = $('.pro-qty');
      proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 0;
          }
        }
        $button.parent().find('input').val(newVal);
      });
    })
    this.getAllCategories();
    this.loadCart();
    this.activatedRoute.params.subscribe(async params => {
      var id = params['id'];
      if (id) {
        const product = await this.getProduct(id);
        product.image = await this.getAllImageByProduct(product)
        var item: Item = {
          product: product,
          quantity: 1
        };
        const sum = await this.sumAmountInput(product.id);
        if (sum == null) {
          $(function () {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            Toast.fire({
              type: 'error',
              title: 'Mặt hàng này không còn vui lòng chọn mua sản phẩm khác'
            });
          });
        } else {
          if (localStorage.getItem('cart') == null) {
            let cart: any = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            this.addProductToCart(id, item);
          }
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
    });
  }

  sumAmountInput(id: number) {
    return this.warehouseBillDetailService.sumAmount(id).toPromise();
  }

  sumAmountOutput(id: number) {
    return this.ordersService.sumAmount(id).toPromise();
  }

  async addProductToCart(id: number, item: Item) {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        index = i;
        break;
      }
    }
    let sumInput = await this.sumAmountInput(item.product.id);
    let sumOutput = await this.sumAmountOutput(item.product.id);
    if (sumOutput == null) {
      sumOutput = 0;
    }
    if (sumInput == null) {
      sumInput = 0;
    }
    if (sumInput - sumOutput <= 0) {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Mặt hàng này không còn vui lòng chọn mua sản phẩm khác'
        });
      });
    } else {
      if (index == -1) {
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item: Item = JSON.parse(cart[index]);
        item.quantity += 1;
        cart[index] = JSON.stringify(item);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      this.loadCart();
    }
  }

  decreaseProduct(id: number, index: number) {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let item: Item = JSON.parse(cart[index]);
    item.quantity -= 1;
    if (item.quantity == 0) {
      this.remove(id);
    } else {
      cart[index] = JSON.stringify(item);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    this.loadCart();
  }

  getProduct(id: number) {
    return this.productService.getProduct(id).toPromise();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += (item.product.price * (1 - item.product.saleOff / 100)) * item.quantity;
    }
  }

  remove(id: number): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

  getAllImageByProduct(product: Product) {
    return this.productService.getAllImageByProduct(product.id).toPromise()
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../shop'], {queryParams: {name: name}});
  }
}
