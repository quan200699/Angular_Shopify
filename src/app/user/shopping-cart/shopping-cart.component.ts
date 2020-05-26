import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";
import {Item} from "../../product/item";
import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../model/product";

declare var $: any;

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
              private productService: ProductService) {
  }

  ngOnInit() {
    $(document).ready(function () {
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
    this.activatedRoute.params.subscribe(async params => {
      var id = params['id'];
      if (id) {
        const product = await this.getProduct(id);
        product.image = await this.getAllImageByProduct(product)
        var item: Item = {
          product: product,
          quantity: 1
        };
        if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          this.addProductToCart(id, item);
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
    });
  }

  addProductToCart(id: number, item: Item) {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        index = i;
        break;
      }
    }
    if (index == -1) {
      cart.push(JSON.stringify(item));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let item: Item = JSON.parse(cart[index]);
      item.quantity += 1;
      cart[index] = JSON.stringify(item);
      localStorage.setItem("cart", JSON.stringify(cart));
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
      this.total += item.product.price * item.quantity;
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
}
