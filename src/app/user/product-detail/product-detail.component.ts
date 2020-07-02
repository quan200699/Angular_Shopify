import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product/product.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {ShoppingCartService} from "../../service/shopping-cart/shopping-cart.service";
import {ItemService} from "../../service/item/item.service";
import {UserToken} from "../../model/user-token";
import {ShoppingCart} from "../../model/shopping-cart";
import {Review} from "../../model/review";
import {ReviewService} from "../../service/review/review.service";

declare var $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  currentProduct: Product;
  sub: Subscription
  relatedProducts: Product[] = [];
  currentUser: UserToken;
  shoppingCart: ShoppingCart;
  listReview: Review[] = [];
  starAverage: number = 0;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private reviewService: ReviewService,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private itemService: ItemService,
              private router: Router) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.currentProduct = await this.getProduct(id);
      this.currentProduct.image = await this.getAllImageByProduct(this.currentProduct);
      this.getAllProductRelated(this.currentProduct.category);
    })
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value
      this.getShoppingCartByUser(this.currentUser.id);
    });
  }

  ngOnInit() {
    this.getAllReview();
    $(document).ready(function () {
      $(".product__details__pic__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
      });
      $('.product__details__pic__slider img').on('click', function () {
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product__details__pic__item--large').attr('src');
        if (imgurl != bigImg) {
          $('.product__details__pic__item--large').attr({
            src: imgurl
          });
        }
      });
      var proQty = $('.pro-qty');
      proQty.prepend('<span class="dec qtybtn">-</span>');
      proQty.append('<span class="inc qtybtn">+</span>');
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
  }

  getAllReview() {
    this.reviewService.getAllReview().subscribe(listReview => {
      let sum = 0;
      this.listReview = listReview;
      this.listReview.map(review => {
        review.createDate = new Date(review.createDate);
        sum += review.evaluate;
      })
      this.starAverage = sum / this.listReview.length;
    })
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
    this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }

  getProduct(id: number) {
    return this.productService.getProduct(id).toPromise();
  }

  getAllImageByProduct(product: Product) {
    return this.productService.getAllImageByProduct(product.id).toPromise()
  }

  getAllProductRelated(category: Category) {
    this.categoryService.getAllProductByCategory(category.id).subscribe(listProduct => {
      if (listProduct.length > 4) {
        for (let i = 0; i < 4; i++) {
          this.relatedProducts.push(listProduct[i]);
        }
      } else {
        this.relatedProducts = listProduct;
      }
      this.relatedProducts.map(async product => {
        product.image = await this.getAllImageByProduct(product);
      })
    })
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../shop'], {queryParams: {name: name}});
  }
}
