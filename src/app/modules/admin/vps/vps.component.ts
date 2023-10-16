import { Component, OnInit } from '@angular/core';
import {CoreTableConfig} from "../../interfaces/common";
import {MatDialog} from "@angular/material/dialog";
import {CreateComponent} from "./create/create.component";
import {AdminService} from "../../../core/admin/admin.service";
import {FuseConfirmationService} from "@fuse/services/confirmation";

@Component({
  selector: 'app-vps',
  templateUrl: './vps.component.html',
  styleUrls: ['./vps.component.scss']
})
export class VpsComponent implements OnInit {

  data = [];

  tableConfig: CoreTableConfig = {
    name: 'Cấu hình vps',
    subtitle: '',
    create: 'Tạo mới cấu hình VPS'
  };

  displayedColumns: string[] = [
    'vps_id',
    'ip',
    'port',
    'username',
    'password',
    'status',
    'country',
    'key',
    'url',
    'created_on',
    'initialized',
    'created_time',
    'updated_time',
    'ipv6_gateway',
    'network_interface',
    'edit'
  ];

  constructor(
    private dialog: MatDialog,
    private adminService: AdminService,
    private _fuseConfirmationService: FuseConfirmationService
  ) { }

  ngOnInit(): void {
    this.getListVps();
  }

  openCreateDialog(): void {
    const dialog = this.dialog.open(CreateComponent, {});
    dialog.afterClosed().subscribe((isGetList: boolean) => {
      if(isGetList) {
        this.getListVps();
      }
    });
  }

  getListVps() {
    this.adminService.getListVps().subscribe(data => {
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
        this.getListVps();
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
          this.getListVps();
        })
      }
    });
  }

}
