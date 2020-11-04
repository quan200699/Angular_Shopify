import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";
import {Item} from "../../model/item";
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {WarehouseBillDetailService} from "../../service/warehouse-bill-detail/warehouse-bill-detail.service";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {ShoppingCartService} from "../../service/shopping-cart/shopping-cart.service";
import {ShoppingCart} from "../../model/shopping-cart";
import {UserToken} from "../../model/user-token";
import {ItemService} from "../../service/item/item.service";
import {OrderDetailService} from "../../service/order-detail/order-detail.service";

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
  shoppingCart: ShoppingCart;
  currentUser: UserToken;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private warehouseBillDetailService: WarehouseBillDetailService,
              private orderDetailService: OrderDetailService,
              private authenticationService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private itemService: ItemService,
              private router: Router) {

    this.getAllCategories();
    this.loadCart();
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value
      this.getShoppingCartByUser(this.currentUser.id);
    });
    if (this.currentUser == null) {
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
  }

  getShoppingCartByUser(id: number) {
    if (id == null) {
      this.loadCart();
    } else {
      this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
        this.shoppingCart = shoppingCart;
        this.shoppingCartService.getAllItemByShoppingCart(this.shoppingCart.id).subscribe(items => {
          this.items = items;
          items.map(async item => {
            item.product.image = await this.getAllImageByProduct(item.product);
          })
          this.sumTotalPrice();
        })
      })
    }
  }

  async addItemToShoppingCart(productId: number, shoppingCartId: number) {
    let items = await this.getAllItemInShoppingCart(shoppingCartId);
    this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
    this.getShoppingCartByUser(this.currentUser.id);
  }

  async decreaseItemToShoppingCart(productId: number, shoppingCartId: number) {
    let items = await this.getAllItemInShoppingCart(shoppingCartId);
    this.itemService.decreaseItemToShoppingCart(items, productId);
    this.getShoppingCartByUser(this.currentUser.id);
  }

  getAllItemInShoppingCart(id: number) {
    return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
  }

  sumAmountInput(id: number) {
    return this.warehouseBillDetailService.sumAmount(id).toPromise();
  }

  sumAmountOutput(id: number) {
    return this.orderDetailService.sumAmount(id).toPromise();
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
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null) {
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
      }
      this.sumTotalPrice();
    }
  }

  sumTotalPrice(): number {
    this.total = 0;
    for (let item of this.items) {
      this.total += (item.product.price * (1 - item.product.saleOff / 100)) * item.quantity;
    }
    return this.total;
  }

  remove(productId: number): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == productId) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

  removeItemFromCart(itemId: number) {
    this.itemService.deleteItem(itemId).subscribe(() => {
      this.getShoppingCartByUser(this.currentUser.id);
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        Toast.fire({
          type: 'success',
          title: 'Đã xóa 1 sản phẩm trong giỏ hàng'
        });
      });
    })
  }

  getAllImageByProduct(product: Product) {
    return this.productService.getAllImageByProduct(product.id).toPromise()
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../shop'], {queryParams: {name: name}});
  }
}
