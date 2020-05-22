import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {UserToken} from "../../model/user-token";
import {ProductService} from "../../service/product/product.service";
import {AuthenticationService} from "../../service/auth/authentication.service";

declare var $: any;

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProduct: Product[];
  currentUser: UserToken;
  hasRoleAdmin = false;

  constructor(private productService: ProductService,
              private authenticationService: AuthenticationService) {
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
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(listProduct => {
      this.listProduct = listProduct;
      $(function () {
        $('#table-product').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false,
        });
      });
    });
  }
}
