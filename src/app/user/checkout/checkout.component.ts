import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";
import {Item} from "../../model/item";
import {Router} from "@angular/router";
import {CustomerInfoService} from "../../service/customer-info/customer-info.service";
import {CustomerInfo} from "../../model/customer-info";
import {UserToken} from "../../model/user-token";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {ShoppingCartService} from "../../service/shopping-cart/shopping-cart.service";
import {ItemService} from "../../service/item/item.service";
import {ShoppingCart} from "../../model/shopping-cart";
import {OrdersService} from "../../service/order/orders.service";
import {Orders} from "../../model/orders";
import {OrdersDetail} from "../../model/orders-detail";
import {OrderDetailService} from "../../service/order-detail/order-detail.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  customerInfoForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  })
  items: Item[] = [];
  total: number = 0;
  currentUser: UserToken;
  shoppingCart: ShoppingCart;
  isSubmitted: boolean = false;

  constructor(private categoryService: CategoryService,
              private customerInfoService: CustomerInfoService,
              private authenticationService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private itemService: ItemService,
              private ordersService: OrdersService,
              private orderDetailService: OrderDetailService,
              private router: Router) {
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
      this.getShoppingCartByUser(this.currentUser.id);
    });
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.hero__categories__all').on('click', function () {
        $('.hero__categories ul').slideToggle(400);
      });
    })
    this.getAllCategories();
    if (this.currentUser == null) {
      this.loadCart();
    }
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }

  getShoppingCartByUser(id: number) {
    this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
      this.getAllItemInShoppingCart(this.shoppingCart.id);
    })
  }

  getAllItemInShoppingCart(id: number) {
    this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(items => {
      this.items = items;
      this.sumTotalPrice();
    });
  }

  deleteAllItemInShoppingCart(id: number) {
    this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(items => {
      this.items = items;
      this.items.map(item => {
        this.itemService.deleteItem(item.id).subscribe();
      })
    });
  }

  createOrder() {
    const orders: Orders = {
      user_id: this.currentUser.id,
      status: false
    }
    return this.ordersService.createOrders(orders).toPromise();
  }

  createOrderDetail(item: Item, orders: Orders) {
    const orderDetail: OrdersDetail = {
      orders_id: orders.id,
      amount: item.quantity,
      product_id: item.product.id
    }
    return this.orderDetailService.createOrderDetail(orderDetail).toPromise();
  }

  async submitCheckoutForm(items: Item[], shoppingCartId: number) {
    const customerInfo = await this.createCustomerInfo();
    if (customerInfo.address != "" && customerInfo.email != "" && customerInfo.name != "" && customerInfo.phone_number != "") {
      this.isSubmitted = true;
    }
    if (this.isSubmitted) {
      this.deleteAllItemInShoppingCart(shoppingCartId);
      this.getAllItemInShoppingCart(shoppingCartId);
      const orders = await this.createOrder();
      let listOrderDetail = items.map(item => {
        this.createOrderDetail(item, orders);
      });
      Promise.all(listOrderDetail).then(() => {
        $(function () {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Đơn hàng đã tạo, vui lòng chờ xác nhận'
          });
        });
        this.customerInfoForm.reset();
      }).catch(() => {
        $(function () {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'error',
            title: 'Xảy ra lỗi khi tạo đơn hàng'
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
          title: 'Điền đủ thông tin để nhận hàng'
        });
      });
    }
  }

  createCustomerInfo() {
    const customerInfo: CustomerInfo = {
      name: this.customerInfoForm.value.name,
      address: this.customerInfoForm.value.address,
      phone_number: this.customerInfoForm.value.phoneNumber,
      email: this.customerInfoForm.value.email,
      user_id: this.currentUser.id
    };
    return this.customerInfoService.createCustomerInfo(customerInfo).toPromise();
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null) {
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.sumTotalPrice();
      }
    }
  }

  sumTotalPrice(): number {
    this.total = 0;
    for (let item of this.items) {
      this.total += (item.product.price * (1 - item.product.saleOff / 100)) * item.quantity;
    }
    return this.total;
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../shop'], {queryParams: {name: name}});
  }
}
