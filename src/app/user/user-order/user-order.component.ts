import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Item} from "../../model/item";
import {OrdersService} from "../../service/order/orders.service";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {UserToken} from "../../model/user-token";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product/product.service";
import {Orders} from "../../model/orders";

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  currentUser: UserToken;
  listProduct: Product[] = [];
  listOrders: Orders[] = [];
  status: boolean;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private ordersService: OrdersService,
              private authenticationService: AuthenticationService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.getAllCategories();
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value
    });
    this.activatedRoute.params.subscribe(params => {
      this.status = params['status'];
      this.getAllOrderByUserAndStatus(this.currentUser.id, this.status);
      if (this.status == true) {
        this.getAllProductUserBought(this.currentUser.id);
      }
    });
  }

  ngOnInit() {
  }

  getAllProductUserBought(id: number) {
    this.ordersService.getAllProductUserBought(id).subscribe(listProduct => {
      this.listProduct = listProduct;
      this.listProduct.map(async product => {
        product.image = await this.getAllImageByProduct(product);
      })
    })
  }

  getAllOrderByUserAndStatus(id: number, status: boolean) {
    this.ordersService.getAllOrderByUserAndStatus(id, status).subscribe(listOrder => {
      this.listOrders = listOrder;
    })
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
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
