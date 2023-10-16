import { Component, OnInit } from '@angular/core';
import {CoreTableConfig} from "../../interfaces/common";
import {MatDialog} from "@angular/material/dialog";
import {CreateComponent} from "./create/create.component";
import {AdminService} from "../../../core/admin/admin.service";
import {FuseConfirmationService} from "@fuse/services/confirmation";

@Component({
  selector: 'app-vps',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  data = [];

  tableConfig: CoreTableConfig = {
    name: 'Quản lí user',
    subtitle: '',
    create: 'Tạo user'
  };

  displayedColumns: string[] = [
    'user_id',
    'full_name',
    'email',
    'username',
    'permission_all',
    'roles',
    'permissions',
    'status',
    'created_time',
    'updated_time',
    'meta',
    'type',
    'user_type',
    'position',
    'actions'
  ];

  constructor(
    private dialog: MatDialog,
    private adminService: AdminService,
    private _fuseConfirmationService: FuseConfirmationService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  openCreateDialog(): void {
    const dialog = this.dialog.open(CreateComponent, {});
    dialog.afterClosed().subscribe((isGetList: boolean) => {
      if(isGetList) {
        this.getList();
      }
    });
  }

  getList() {
    this.adminService.getListUsers().subscribe(data => {
      if(data) {
        this.data = data.data;
      }
    });
  }

  edit(element: any) {
    const dialog = this.dialog.open(CreateComponent, {
      data: {
        item: element
      }
    });
    dialog.afterClosed().subscribe((isGetList: boolean) => {
      if(isGetList) {
        this.getList();
      }
    });
  }

  delete(element) {
    // Open the confirmation and save the reference
    const dialogRef = this._fuseConfirmationService.open({
      title: 'Xác nhận',
      message: 'Bạn có chắc muốn xóa không?',
      actions: {
        confirm: {
          label: 'Xóa'
        },
        cancel: {
          label: 'Hủy'
        }
      }
    });

// Subscribe to afterClosed from the dialog reference
    dialogRef.afterClosed().subscribe((result) => {
      if(result === 'confirmed') {
        this.adminService.deleteUser(element.vps_id).subscribe(() => {
          this.getList();
        })
      }
    });
  }

}
