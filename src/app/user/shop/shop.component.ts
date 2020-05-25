import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {UserToken} from "../../model/user-token";
import {CategoryService} from "../../service/category/category.service";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {Router} from "@angular/router";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product/product.service";

declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  listCategory: Category[] = [];
  currentUser: UserToken;
  hasRoleAdmin = false;
  listProduct: Product[] = [];

  constructor(private categoryService: CategoryService,
              private authenticationService: AuthenticationService,
              private productService: ProductService,
              private router: Router) {
    this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          this.hasRoleAdmin = true;
        }
      }
    }
  }

  ngOnInit() {
    $(document).ready(function(){
      $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
      });
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
    });
    this.getAllCategories();
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(listProduct => {
      this.listProduct = listProduct;
      this.listProduct.map(async product => {
        product.image = await this.getAllImageByProduct(product);
      })
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

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
