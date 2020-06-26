import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product";
import {CategoryService} from "../../service/category/category.service";
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {UserToken} from "../../model/user-token";
import {ShoppingCartService} from "../../service/shopping-cart/shopping-cart.service";
import {ShoppingCart} from "../../model/shopping-cart";
import {Item} from "../../model/item";
import {ItemService} from "../../service/item/item.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  listProduct: Product[] = [];
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  listProductLatest: Product[] = [];
  currentUser: UserToken;
  shoppingCart: ShoppingCart;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private authenticationService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private itemService: ItemService,
              private router: Router) {
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value
      this.getShoppingCartByUser(this.currentUser.id);
    });
  }

  ngOnInit() {
    $(document).ready(function () {
      $(".latest-product__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
      });
      $('.hero__categories__all').on('click', function () {
        $('.hero__categories ul').slideToggle(400);
      });
      $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

          0: {
            items: 1,
          },

          480: {
            items: 2,
          },

          768: {
            items: 3,
          },

          992: {
            items: 4,
          }
        }
      });
    });
    this.getAllProductLatest();
    this.getAllProduct();
    this.getAllCategories();
  }

  getShoppingCartByUser(id: number) {
    this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
    })
  }

  getAllItemInShoppingCart(id: number) {
    return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
  }

  async addItemToShoppingCart(productId: number, shoppingCartId: number) {
    let items = await this.getAllItemInShoppingCart(shoppingCartId);
    if (items.length == 0) {
      let item: Item = {
        product: {
          id: productId
        },
        quantity: 1,
        shoppingCart: {
          id: shoppingCartId
        }
      }
      this.itemService.createItem(item).subscribe(() => {
        $(function () {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Đã thêm vào giỏ hàng'
          });
        });
      });
    }else {
      items.map(item => {
        if (item.product.id == productId) {
          item.quantity += 1;
          this.itemService.updateItem(item.id, item).subscribe(() => {
            $(function () {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });

              Toast.fire({
                type: 'success',
                title: 'Đã thêm vào giỏ hàng'
              });
            });
          });
        } else {
          let item1: Item = {
            product: {
              id: productId
            },
            quantity: 1,
            shoppingCart: {
              id: shoppingCartId
            }
          }
          this.itemService.createItem(item1).subscribe(() => {
            $(function () {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });

              Toast.fire({
                type: 'success',
                title: 'Đã thêm vào giỏ hàng'
              });
            });
          });
        }
      })
    }
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(listProduct => {
      this.listProduct = listProduct;
      this.addImageToProduct(this.listProduct);
    })
  }

  addImageToProduct(listProduct: Product[]) {
    listProduct.map(async product => {
      product.image = await this.getAllImageByProduct(product);
    })
  }

  getAllImageByProduct(product: Product) {
    return this.productService.getAllImageByProduct(product.id).toPromise()
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }

  getAllProductLatest() {
    this.productService.getAllProductLatest().subscribe(listProduct => {
      if (listProduct.length > 3) {
        for (let i = 0; i < 3; i++) {
          this.listProductLatest.push(listProduct[i]);
        }
      } else {
        this.listProductLatest = listProduct;
      }
      this.addImageToProduct(this.listProductLatest);
    })
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../shop'], {queryParams: {name: name}});
  }
}
