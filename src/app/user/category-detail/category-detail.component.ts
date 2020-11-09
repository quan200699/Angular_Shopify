import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product/product.service";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {ShoppingCartService} from "../../service/shopping-cart/shopping-cart.service";
import {ItemService} from "../../service/item/item.service";
import {UserToken} from "../../model/user-token";
import {ShoppingCart} from "../../model/shopping-cart";

declare var $: any;

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  currentCategory: Category;
  listProduct: Product[] = [];
  listProductSaleOff: Product[] = [];
  sub: Subscription;
  currentUser: UserToken;
  shoppingCart: ShoppingCart;
  listProductLatest: Product[] = [];

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private itemService: ItemService,
              private router: Router) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.currentCategory = await this.getCategory(id);
      this.listProduct = await this.getAllProductByCategory(this.currentCategory);
      this.listProduct.map(async product => {
        product.image = await this.getAllImageByProduct(product);
      })
    })
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
      var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
      rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
          minamount.val('$' + ui.values[0]);
          maxamount.val('$' + ui.values[1]);
        }
      });
      minamount.val('$' + rangeSlider.slider("values", 0));
      maxamount.val('$' + rangeSlider.slider("values", 1));
    });
    this.getAllCategories();
    this.getAllProductSaleOff()
    this.getAllProductLatest();
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
  addImageToProduct(listProduct: Product[]) {
    listProduct.map(async product => {
      product.image = await this.getAllImageByProduct(product);
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

  getAllProductByCategory(category: Category) {
    return this.categoryService.getAllProductByCategory(category.id).toPromise();
  }

  getAllImageByProduct(product: Product) {
    return this.productService.getAllImageByProduct(product.id).toPromise()
  }

  getCategory(id: number) {
    return this.categoryService.getCategory(id).toPromise();
  }

  getAllProductSaleOff() {
    this.productService.getAllProductHasSaleOffGreaterThanZero().subscribe(listProduct => {
      this.listProductSaleOff = listProduct;
      this.listProductSaleOff.map(async product => {
        product.image = await this.getAllImageByProduct(product);
      })
      $(document).ready(function () {
        $(".product__discount__slider").owlCarousel({
          // loop: true,
          margin: 0,
          items: 3,
          dots: true,
          smartSpeed: 1200,
          autoHeight: false,
          // autoplay: true,
          responsive: {
            320: {
              items: 1,
            },

            480: {
              items: 2,
            },

            768: {
              items: 3,
            }
          }
        });
      })
    })
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../shop'], {queryParams: {name: name}});
  }
}
