import {Component, OnInit} from '@angular/core';
import {UserToken} from "../../model/user-token";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-category-list',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  listCategory: Category[];
  currentUser: UserToken;
  hasRoleAdmin = false;
  id: number;

  constructor(private categoryService: CategoryService,
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
    this.getAllCategory();
  }

  getCategoryId(id: number) {
    this.id = id;
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.id).subscribe(() => {
      this.getAllCategory();
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'success',
          title: 'Xóa thành công'
        });
      });
    }, () => {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Xóa thất bại'
        });
      });
    })
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
      $(function () {
        $('#table-category').DataTable({
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
