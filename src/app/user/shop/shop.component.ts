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
      $('.owl-carousel').owlCarousel();
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
