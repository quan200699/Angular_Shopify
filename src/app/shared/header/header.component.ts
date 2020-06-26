import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category/category.service";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {UserToken} from "../../model/user-token";
import {Item} from "../../model/item";
import {ShoppingCart} from "../../model/shopping-cart";
import {ShoppingCartService} from "../../service/shopping-cart/shopping-cart.service";

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
  favoriteProduct: Item[] = [];
  amount: number = 0;
  shoppingCart: ShoppingCart;

  constructor(private categoryService: CategoryService,
              private authenticationService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private router: Router) {
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value
      this.getShoppingCartByUser(this.currentUser.id);
    });
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          this.hasRoleAdmin = true;
        }
      }
    }
    this.loadFavorite()
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getShoppingCartByUser(id: number) {
    if (id == null) {
      this.loadCart();
    } else {
      this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
        this.shoppingCart = shoppingCart;
        this.getAllItemInShoppingCart(this.shoppingCart.id);
      })
    }
  }

  getAllItemInShoppingCart(id: number) {
    this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(items => {
      this.items = items;
      this.sumTotalItem();
    })
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
      this.sumTotalItem();
    }
  }

  sumTotalItem(): number {
    this.amount = 0;
    for(let item of this.items){
      this.amount += item.quantity;
    }
    return this.amount;
  }


  loadFavorite(): void {
    this.favoriteProduct = [];
    let heart = JSON.parse(localStorage.getItem('heart'));
    if (heart != null) {
      for (var i = 0; i < heart.length; i++) {
        let item = JSON.parse(heart[i]);
        this.favoriteProduct.push({
          product: item.product,
          quantity: item.quantity
        });
      }
    }
  }
}
