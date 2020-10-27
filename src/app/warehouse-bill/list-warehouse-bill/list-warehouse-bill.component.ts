import {Component, OnInit} from '@angular/core';
import {UserToken} from "../../model/user-token";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {WarehouseBill} from "../../model/warehouse-bill";
import {WarehouseBillService} from "../../service/warehouse-bill/warehouse-bill.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-warehouse-bill',
  templateUrl: './list-warehouse-bill.component.html',
  styleUrls: ['./list-warehouse-bill.component.scss']
})
export class ListWarehouseBillComponent implements OnInit {
  listWarehouseBill: WarehouseBill[];
  currentUser: UserToken;
  hasRoleAdmin = false;
  id: number;

  constructor(private warehouseBillService: WarehouseBillService,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.name === 'ROLE_ADMIN') {
          this.hasRoleAdmin = true;
        }
      }
    }
  }

  ngOnInit() {
    this.getAllWarehouseBill();
  }

  getWarehouseBillId(id: number) {
    this.id = id;
  }

  deleteWarehouseBill() {
    this.warehouseBillService.deleteWarehouseBill(this.id).subscribe(() => {
      this.warehouseBillService.getAllWarehouseBill().subscribe(listWarehouseBill => {
        this.listWarehouseBill = listWarehouseBill;
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

  getAllWarehouseBill() {
    this.warehouseBillService.getAllWarehouseBill().subscribe(listWarehouseBill => {
      this.listWarehouseBill = listWarehouseBill;
      $(function () {
        $('#table-warehouse-bill').DataTable({
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
