import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category/category.service";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {UserToken} from "../../model/user-token";
import {Item} from "../../product/item";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  listCategory: Category[] = [];
  currentUser: UserToken;
  hasRoleAdmin = false;
  items: Item[] = [];
  amount: number = 0;

  constructor(private categoryService: CategoryService,
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
    this.loadCart();
  }

  ngOnInit() {
    this.getAllCategories();
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

  loadCart(): void {
    this.amount = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null) {
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.amount += item.quantity;
      }
    }
  }
}
