import {Component, OnInit} from '@angular/core';
import {UserToken} from "../../model/user-token";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {Warehouse} from "../../model/warehouse";
import {WarehouseService} from "../../service/warehouse/warehouse.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-warehouse',
  templateUrl: './list-warehouse.component.html',
  styleUrls: ['./list-warehouse.component.scss']
})
export class ListWarehouseComponent implements OnInit {
  listWarehouse: Warehouse[];
  currentUser: UserToken;
  hasRoleAdmin = false;
  id: number;

  constructor(private warehouseService: WarehouseService,
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
    this.getAllWarehouse();
  }

  getWarehouseId(id: number) {
    this.id = id;
  }

  deleteWarehouse() {
    this.warehouseService.deleteWarehouse(this.id).subscribe(() => {
      this.warehouseService.getAllWarehouse().subscribe(listWarehouse => {
        this.listWarehouse = listWarehouse;
      })
      $(function () {
        $('#modal-delete').modal('hide');
      })
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

  getAllWarehouse() {
    this.warehouseService.getAllWarehouse().subscribe(listWarehouse => {
      this.listWarehouse = listWarehouse;
      $(function () {
        $('#table-warehouse').DataTable({
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
