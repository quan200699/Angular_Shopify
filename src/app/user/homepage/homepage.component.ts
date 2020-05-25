import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../model/product";
import {CategoryService} from "../../service/category/category.service";
import {Category} from "../../model/category";
import {UserToken} from "../../model/user-token";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/auth/authentication.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  listProduct: Product[] = [];
  listCategory: Category[] = [];
  currentUser: UserToken;
  hasRoleAdmin = false;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private authenticationService: AuthenticationService,
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
    this.getAllProduct();
    this.getAllCategories();
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
